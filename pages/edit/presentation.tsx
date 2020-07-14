import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import auth0 from '../../lib/auth0';
import Header from '../../components/shared/Header';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';
import axios from 'axios';

interface User {
  name: string;
  picture: string;
  sub: string;
  nickname: string;
}

const ADD_PRESENTATION = gql`
  mutation AddPresentation(
    $title: String!
    $subtitle: String
    $ownerId: String
    $abstract: String
  ) {
    addPresentation(
      title: $title
      subtitle: $subtitle
      ownerId: $ownerId
      abstract: $abstract
    ) {
      _id
    }
  }
`;

const EditPresentation = ({ user, original }) => {
  const [addPresentation, { data }] = useMutation(ADD_PRESENTATION);
  const { register, handleSubmit, watch, reset, errors } = useForm({
    defaultValues: {
      title: original.title,
      subtitle: original.subtitle,
      abstract: original.abstract,
    },
  });
  const presentation = watch();

  useEffect(() => {
    console.log('called');
  }, []);

  console.log(original);

  const onSubmit = async (data) => {
    console.log(data);
    addPresentation({
      variables: {
        ownerId: user.sub,
        title: data.title,
        subtitle: data.subtitle,
        abstract: data.abstract,
      },
    });
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
          <div className="w-1/2">
            <h1 className="text-4xl">New Presentation</h1>
            <div>
              <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                  <label>
                    Title (
                    {presentation.title && 100 - presentation.title.length})
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-5"
                    name="title"
                    ref={register}
                  />
                </div>

                <div className="form-group">
                  <label>Subtitle</label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-5"
                    name="subtitle"
                    ref={register}
                  />
                </div>

                <div className="form-group">
                  <label>Abstract</label>
                  <textarea
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-5"
                    name="abstract"
                    ref={register}
                  ></textarea>
                </div>

                <div className="form-group">
                  <input type="submit" />
                </div>
              </form>
            </div>
          </div>
          <div className="w-1/2">
            <div className="h-48 w-full m-5 bg-green-500 text-center text-white">
              {/*<h1 className="text-4xl self-center">{presentation.title}</h1>
              <h2 className="text-2xl">{presentation.subtitle}</h2>*/}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps({ req, res }) {
  const session = await auth0.getSession(req);

  const presentations = await axios({
    method: 'POST',
    url: `${process.env.GRAPHQL}`,
    headers: req ? { cookie: req.headers.cookie } : undefined,
    data: {
      query: `query Presentation {
    presentation(_id: "123") {
      _id
      title
      abstract
      subtitle
    }
  }`,
    },
  });

  console.log(presentations.data);

  if (session) {
    return {
      props: {
        user: session.user,
        original: presentations.data.data.presentation,
      },
    };
  }
  return { props: {} };
}

export default EditPresentation;
