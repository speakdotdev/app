import React from 'react';
import Head from 'next/head';
import auth0 from '../../lib/auth0';
import Header from '../../components/shared/Header';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';

interface User {
  name: string;
  picture: string;
  sub: string;
  nickname: string;
}

const NewPresentation = ({ user }) => {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
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
                  <label>Title</label>
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
                    name="subtitle"
                    defaultValue="How I learned to kick ass"
                    ref={register}
                  ></textarea>
                </div>

                {/* include validation with required or other standard HTML validation rules */}
                <input name="eventURL" ref={register({ required: true })} />
                {/* errors will return when field validation fails  */}
                {errors.exampleRequired && <span>This field is required</span>}

                <input type="submit" />
              </form>
            </div>
          </div>
          <div className="w-1/2">Results</div>
        </div>
      </div>
    </div>
  );
};

NewPresentation.propTypes = {
  user: {
    name: PropTypes.string,
    picture: PropTypes.string,
    sub: PropTypes.string,
    nickname: PropTypes.string,
  },
};

export async function getServerSideProps({ req, res }) {
  const session = await auth0.getSession(req);

  

  if (session) {
    return { props: { user: session.user } };
  }
  return { props: {} };
}

export default NewPresentation;
