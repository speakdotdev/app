import React from 'react';
import { NextPage } from 'next';
import fetch from 'isomorphic-unfetch';
import AboutSpeaker from '../../../components/AboutSpeaker';
import UpcomingEvent from '../../../components/UpcomingEvent';
import EventCard from '../../../components/EventCard';
import BlogCard from '../../../components/BlogCard';
import Head from 'next/head';
import MainMenu from '../../../components/shared/MainMenu';
import { useRouter } from 'next/router';

interface Props {
  speakerName: string;
}

interface MainMenu {
  order: Number;
  icon: string;
  name: string;
  link: string;
}

const UserAbout: NextPage<Props> = ({ speakerName }) => {
  const router = useRouter();

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
      name: 'About',
      link: `/user/${router.query.id}/about`,
    },
  ];
  return <div>Hello</div>;
  /*
  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {JSON.stringify(data)}
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
              <h1 className="text-4xl font-semibold my-0">
                {data && data.user.firstName} {data && data.user.lastName}
              </h1>
              <p className="text-gray-700">@kukicado</p>
            </div>
          </div>
        </div>

        <div className="flex flex-row">
          <div className="w-1/5">
            <MainMenu items={mainMenu} />
          </div>
          <div className="w-3/5">
            <h2 className="text-2xl font-semibold mb-5">Writing</h2>
            <div className="mb-5">
              <BlogCard />
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
    
  );*/
};

export default UserAbout;
