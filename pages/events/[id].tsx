import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import EventCard from '../../components/EventCard';
import { useRouter } from 'next/router';

import { fetchGraphQLQuery } from '../../lib/fetch';

const Event = ({ event }) => {
  console.log(event);
  return (
    <>
      <Head>
        <title>{event.name} | Speak.dev</title>
      </Head>
      <div className=""></div>
      <div className="">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold">{event.name}</h1>
          {event.presentations &&
            event.presentations.map((presentation) => (
              <h1>{presentation.speaker}</h1>
            ))}
        </div>
      </div>
    </>
  );
};

export async function getStaticPaths() {
  const query = `
    {events{_id}}
  `;
  const data = await fetchGraphQLQuery(query);

  const paths = data.events.map((event) => ({
    params: { id: event._id },
  }));

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  let query = `
  query {
    event (query: { _id: "${params.id}" }) {
      _id
      name
      url
      presentations {
        speaker
      }
    }}`;
  const data = await fetchGraphQLQuery(query);
  console.log(data);
  return {
    props: {
      event: data.event,
    },
  };
}

export default Event;
