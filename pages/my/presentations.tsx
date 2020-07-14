import React, { useEffect } from 'react';
import Head from 'next/head';
import auth0 from '../../lib/auth0';
import Header from '../../components/shared/Header';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { gql } from 'apollo-boost';
import { useQuery, useLazyQuery } from '@apollo/react-hooks';
import axios from 'axios';
import { env } from 'process';

interface User {
  name: string;
  picture: string;
  sub: string;
  nickname: string;
}

const QUERY = gql`
  query MyPresentations {
    presentations: myPresentations {
      _id
      title
      abstract
    }
  }
`;

const MyPresentations = ({ user }) => {
  const { loading, data } = useQuery(QUERY);

  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header user={user} />

      <div className="container mx-auto">
        <div className="flex flex-col">
          {data &&
            data.presentations.map((presentation) => (
              <div>{presentation.title}</div>
            ))}
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps({ params, req, res }) {
  const session = await auth0.getSession(req);

  if (session) {
    return {
      props: {
        user: session.user,
      },
    };
  }
  return { props: {} };
}

export default MyPresentations;
