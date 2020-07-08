import React from 'react';
import { NextPage } from 'next';
import fetch from 'isomorphic-unfetch';
import AboutSpeaker from '../../components/AboutSpeaker';
import UpcomingEvent from '../../components/UpcomingEvent';
import EventCard from '../../components/EventCard';
import Head from 'next/head';
import MainMenu from '../../components/shared/MainMenu';
import { useRouter } from 'next/router';
import auth0 from '../../lib/auth0';

interface Props {
  speakerName: string;
}

interface MainMenu {
  order: Number;
  icon: string;
  name: string;
  link: string;
}

const Speaker = ({ user }) => {
  const router = useRouter();
  console.log(user);
  const mainMenu = [
    {
      order: 1,
      icon: 'far fa-keynote',
      name: 'Upcoming Events',
      link: `/user/${router.query.id}`,
    },
    {
      order: 2,
      icon: 'far fa-presentation',
      name: 'Talks',
      link: '/speaker/talks',
    },
    {
      order: 3,
      icon: 'far fa-feather-alt',
      name: 'Posts',
      link: '/speaker/posts',
    },
    {
      order: 4,
      icon: 'fas fa-user',
      name: 'Bio',
      link: `/user/${router.query.id}/about`,
    },
  ];
  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container mx-auto">
        <div className="flex flex-col mb-5">
          <div
            className="w-full"
            style={{ background: '#eee', height: '420px' }}
          ></div>
          <div className="flex flex-row">
            <div className="">
              <img
                className="h-48 w-48 -my-24 mx-10 rounded-full border-white border-8"
                src="https://images.unsplash.com/photo-1478172326435-839f111a16c5"
              />
            </div>
            <div className="">
              <h1 className="text-4xl font-semibold my-0">Ado Kukic</h1>
              <p className="text-gray-700">@kukicado</p>
            </div>
          </div>
        </div>

        <div className="flex flex-row">
          <div className="w-1/5">
            <MainMenu items={mainMenu} />
          </div>
          <div className="w-3/5">
            <h2 className="text-2xl font-semibold mb-5">Upcoming Events</h2>
            <div className="mb-5">
              <UpcomingEvent event="hello" />
            </div>
            <div className="mb-5">
              <UpcomingEvent event="hello" />
            </div>

            <div className="mb-5"></div>
            <div className="mb-5">
              <div className="p-5 shadow-lg">
                <p className="text-xl">What is MongoDB?</p>
                <p>ng-Conf 2020</p>
                <div>
                  <iframe
                    className="w-full"
                    height="420px"
                    src="https://www.youtube.com/embed/ySDX02WD0og"
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
            <div className="mb-5">
              <div className="shadow-md flex flex-row flex-wrap items-stretch w-full rounded-md">
                <div className="w-2/3">
                  <div className="bg-white rounded-tl-md px-5 py-3">
                    <h2 className="text-lg font-bold mb-2">
                      JavaScriptyConf Europe
                    </h2>
                    <p className="text-sm text-gray-700">Paris, France</p>
                    <p className="text-sm text-gray-700">Musee du Louvre</p>
                    <p className="text-sm text-gray-700">
                      April 11, 2020 - April 13, 2020
                    </p>
                  </div>

                  <div className="bg-gray-200 px-5 py-2">
                    <p className="font-semibold">What the heck is MongoDB?</p>
                    <p className="text-sm text-gray-700 pb-1">
                      April 12, 2020 @ 15:00
                    </p>
                  </div>
                </div>
                <div
                  className="bg-cover bg-center w-1/3 rounded-tr-md"
                  style={{
                    backgroundImage:
                      'url(' +
                      'https://images.unsplash.com/photo-1478172326435-839f111a16c5' +
                      ')',
                  }}
                ></div>
                <div className="w-full px-5 py-2 rounded-b-md">
                  <p className="font-semibold my-2">Talk Description</p>
                  <p className="text-gray-700 my-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                    optio officiis dolorem blanditiis! Autem fugiat blanditiis,
                    atque placeat impedit quibusdam quod officiis repellendus
                    beatae commodi voluptates a accusamus quas! Maxime!
                  </p>
                  <p className="text-gray-700 text-sm">When: April 13, 2020</p>
                  <p className="text-gray-700 text-sm">
                    Where: Room 19, Database Track
                  </p>
                  <div className="flew flex-row flex-wrap my-2">
                    <a className="rounded-full text-sm py-1 px-3 mr-2 my-2 bg-green-500 text-white">
                      MongoDB
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/5">
            <h2 className="px-3 text-2xl font-semibold mb-5">Technologies</h2>
            <div className="flex flex-wrap flex-row mx-5">
              <a className="rounded-full text-sm py-1 px-3 mr-2 my-2 bg-red-500 text-white">
                Angular
              </a>
              <a className="rounded-full text-sm py-1 px-3 mr-2 my-2 bg-yellow-500 text-white">
                JavaScript
              </a>
              <a className="rounded-full text-sm py-1 px-3 mr-2 my-2 bg-green-500 text-white">
                MongoDB
              </a>
              <a className="rounded-full text-sm py-1 px-3 mr-2 my-2 bg-green-300 text-white">
                Vue
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps({ req, res }) {
  const session = await auth0.getSession(req);
  console.log(session);
  return {
    props: {
      user: session.user,
    }, // will be passed to the page component as props
  };
}

export default Speaker;
