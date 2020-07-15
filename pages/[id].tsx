import React from 'react';
import Head from 'next/head';
import auth0 from '../lib/auth0';
import Header from '../components/shared/Header';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { fetchGraphQLMutation, gqlQuery } from '../lib/fetch';
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

const User = ({ user, profile }) => {
  /*
  const { loading, data } = useQuery(QUERY);

  if (data) {
    console.log(data);
  }*/
  console.log(profile);
  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header user={user} />

      <div className="container mx-auto">
        <div className="bg-gray-500 h-64"></div>
        <div className="flex">
          <img
            className="avatar rounded-full h-40 -mt-20 ml-5"
            src={profile.picture}
          />
          <div className="ml-5">
            <h1 className="text-3xl font-bold">{profile.name}</h1>
            <h2 className="text-xl">@{profile.username}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps({ params, req, res }) {
  const session = await auth0.getSession(req);
  console.log(params);

  const data = await gqlQuery(
    req,
    `query {profile(_id:"${params.id}") {
    _id
    name
    nickname
    picture
    username
  }}
`
  );

  if (session) {
    return {
      props: {
        user: session.user,
        profile: data.profile,
      },
    };
  }

  return { props: {} };
}

export default User;
