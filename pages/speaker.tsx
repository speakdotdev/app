import React from 'react';
import { NextPage } from 'next';
import fetch from 'isomorphic-unfetch';
import UpcomingEvent from '../components/UpcomingEvent';

interface Props {
    speakerName: string
}

const Speaker:NextPage<Props> = ({speakerName}) => (
 <div className="p-5">
    <UpcomingEvent />
 </div>
);

Speaker.getInitialProps = async () => {
    const res = await fetch('http://localhost:3000/api/speaker');
    const data = await res.json()

    return data;
}

export default Speaker