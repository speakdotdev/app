import React from 'react';
import { NextPage } from 'next';
import fetch from 'isomorphic-unfetch';

interface Props {
    speakerName: string
}

const Speaker:NextPage<Props> = ({speakerName}) => (
 <h1>Speaker Page for {speakerName}</h1>
);

Speaker.getInitialProps = async () => {
    const res = await fetch('http://localhost:3000/api/speaker');
    const data = await res.json()

    return data;
}

export default Speaker