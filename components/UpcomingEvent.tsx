import React from 'react';
import {NextComponentType} from 'next';

const UpcomingEvent:NextComponentType = () => (
 <div className="shadow-md flex items-stretch w-full rounded-md">

     <div className="bg-cover bg-center w-1/3 rounded-tl-md rounded-bl-md" style={{backgroundImage: "url(" + "https://images.unsplash.com/photo-1478172326435-839f111a16c5" + ")"}}>      
    </div>
     <div className="w-2/3">
        <div className="bg-white rounded-tr-md px-5 py-3">
            <h2 className="text-lg font-bold mb-2">JavaScriptyConf Europe</h2>
            <p className="text-sm text-gray-700">Paris, France</p>
            <p className="text-sm text-gray-700">Musee du Louvre</p>
            <p className="text-sm text-gray-700">April 11, 2020 - April 13, 2020</p>
        </div>

        <div className="bg-gray-200 px-5 py-2 rounded-br-md">
            <p className="font-semibold">What the heck is MongoDB?</p>
            <p className="text-sm text-gray-700 pb-1">April 12, 2020 @ 15:00</p>
        </div>
     </div>
 </div>
);

export default UpcomingEvent