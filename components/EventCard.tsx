import React, { useState } from 'react';
import Link from 'next/link';

const EventCard = ({ event }) => {
  return (
    <div className="bg-white shadow-lg flex flex-wrap w-full rounded-md overflow-hidden">
      <div
        className="bg-cover bg-center w-1/3"
        style={{
          backgroundImage:
            'url(' +
            'https://images.unsplash.com/photo-1478172326435-839f111a16c5' +
            ')',
        }}
      ></div>
      <div className="w-2/3">
        <div className="bg-white px-5 py-3 relative">
          <Link href="/events/[id]" as={`/events/${event._id}`}>
            <h2 className="text-lg font-bold mb-2">{event.name}</h2>
          </Link>
          <p className="text-sm text-gray-700">Paris, France</p>
          <p className="text-sm text-gray-700">Musee du Louvre</p>
          <p className="text-sm text-gray-700">
            April 11, 2020 - April 13, 2020
          </p>

          <div className="absolute top-0 right-0 px-5 py-3 mt-1 text-sm">
            <i title="CFP Open" className="fas fa-megaphone text-lg"></i>
          </div>
        </div>

        <div className="bg-gray-100 px-5 py-3">
          <img
            className="inline-block h-6 w-6 rounded-full text-white shadow-solid"
            src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
          <img
            className="-ml-1 inline-block h-6 w-6 rounded-full text-white shadow-solid"
            src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
          <img
            className="-ml-1 inline-block h-6 w-6 rounded-full text-white shadow-solid"
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
            alt=""
          />
          <img
            className="-ml-1 inline-block h-6 w-6 rounded-full text-white shadow-solid"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
          <span className="text-sm ml-2">+30 More</span>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
