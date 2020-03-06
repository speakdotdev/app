import React from 'react'
import Head from 'next/head'
import EventCard from '../../components/EventCard';
import MainMenu from '../../components/shared/MainMenu';

const Events = () => {

    const events = [0, 1, 2, 3, 4, 5]
    const mainMenu = [
        { order: 1, name: "Recommended", icon: "far fa-keynote", link: "/events" },
        { order: 2, name: "CFP Closing Soon", icon: "far fa-clock", link: "/events?filter=Closing" }
    ]
    return (

        <div className="container mx-auto">
            <div className="flex">
                <div className="w-full text-center bg-gray-300 p-5 mb-5">
                    <h1 className="text-5xl font-bold">Events</h1>
                    <p className="text-2xl">Find the right one for you</p>
                    <input />
                </div>
            </div>
            <div className="flex">
                <div className="w-1/5">
                    <MainMenu items={mainMenu} />
                </div>
                <div className="w-3/5">
                    {events.map(event => (
                        <div key={event} className="mb-5">
                            <EventCard />
                        </div>
                    ))}
                </div>
                <div className="w-1/5">
                    Sidebar
                </div>
            </div>
        </div>
    )
}

Events.getInitialProps = () => {
    return "hello"
}

export default Events;