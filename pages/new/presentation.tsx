import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import auth0 from '../../lib/auth0';
import Header from '../../components/shared/Header';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';

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

const NewPresentation = ({ user }) => {
  const [addPresentation, { data }] = useMutation(ADD_PRESENTATION);
  const { register, handleSubmit, watch, errors } = useForm();
  const presentation = watch();

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
                    Title ({presentation && 100 - presentation.length})
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-5"
                    name="title"
                    defaultValue="My Amazing Talk"
                    ref={register}
                  />
                </div>

                <div className="form-group">
                  <label>Subtitle</label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-5"
                    name="subtitle"
                    defaultValue="How I learned to kick ass"
                    ref={register}
                  />
                </div>

                <div className="form-group">
                  <label>Abstract</label>
                  <textarea
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-5"
                    name="abstract"
                    defaultValue="How I learned to kick ass"
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

  if (session) {
    return { props: { user: session.user } };
  }
  return { props: {} };
}

export default NewPresentation;
