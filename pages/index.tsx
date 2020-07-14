import React from 'react';
import Head from 'next/head';
import auth0 from '../lib/auth0';
import Header from '../components/shared/Header';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { fetchGraphQLMutation } from '../lib/fetch';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import axios from 'axios';
import { env } from 'process';

interface User {
  name: string;
  picture: string;
  sub: string;
  nickname: string;
}

const QUERY = gql`
  query Presentations {
    presentations {
      _id
    }
  }
`;

const Home = ({ user, presentations }) => {
  /*
  const { loading, data } = useQuery(QUERY);

  if (data) {
    console.log(data);
  }*/
  console.log(presentations);
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = async (data) => {
    console.log(data);

    let mutation = `mutation {
      insertOneEvent(data: {
        name: "${data.eventName}"
        url: "${data.eventURL}"
        presentations: [{
          speaker: "Joe"
        }]
      }) {
        _id
        name
        url
      }
    }`;
    console.log(mutation);

    let res = await fetch('http://localhost:3000/api/realm', {
      method: 'POST',
      body: mutation,
    });
    let dat = await res.json();
    console.log(dat);
  };
  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header user={user} />

      <div className="container mx-auto">
        <div className="flex">
          <div className="w-1/4">
            <div className="menu">
              <div className="">Profile</div>
              <div className="">Talks</div>
              <div className="">Events</div>
            </div>
          </div>
          <div className="w-1/2">
            Content
            <div>
              <form onSubmit={handleSubmit(onSubmit)}>
                {/* register your input into the hook by invoking the "register" function */}
                <input
                  name="eventName"
                  defaultValue="test"
                  ref={register}
                  multiple
                />

                {/* include validation with required or other standard HTML validation rules */}
                <input name="eventURL" ref={register({ required: true })} />
                {/* errors will return when field validation fails  */}
                {errors.exampleRequired && <span>This field is required</span>}

                <input type="submit" />
              </form>
            </div>
          </div>
          <div className="w-1/4">Closing CFPs</div>
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps({ params, req, res }) {
  const session = await auth0.getSession(req);

  console.log(req.headers.cookie);
  console.log(`${process.env.GRAPHQL}`);
  const presentations = await axios({
    method: 'POST',
    url: `${process.env.GRAPHQL}`,
    headers: req ? { cookie: req.headers.cookie } : undefined,
    data: {
      query: `query Presentations {
      presentations {
        _id
      }
    }`,
    },
  });

  if (session) {
    return {
      props: {
        user: session.user,
        presentations: presentations.data.data.presentations,
      },
    };
  }
  return { props: {} };
}

export default Home;
