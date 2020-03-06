import React, {useState} from 'react';
import {NextComponentType} from 'next';

const UpcomingEvent = ({event}) => {
    //console.log(event)

    let [moreInfo, setMoreInfo] = useState(false)

    let toggleInfo = () => {
        setMoreInfo(!moreInfo)
    }
    
    return (
 <div className="shadow-lg flex flex-wrap w-full rounded-md overflow-hidden">

    <div className="bg-cover bg-center w-1/3" style={{backgroundImage: "url(" + "https://images.unsplash.com/photo-1478172326435-839f111a16c5" + ")"}}>      
    </div>
    <div className="w-2/3">
        <div className="bg-white px-5 py-3">
            <h2 className="text-lg font-bold mb-2">JavaScriptyConf Europe</h2>
            <p className="text-sm text-gray-700">Paris, France</p>
            <p className="text-sm text-gray-700">Musee du Louvre</p>
            <p className="text-sm text-gray-700">April 11, 2020 - April 13, 2020</p>
        </div>

        <div className="flex flex-row space-between bg-gray-200 px-5 py-2 cursor-pointer" onClick={()=>toggleInfo()}>
            <div className="w-2/3">
                <p className="font-semibold">What the heck is MongoDB?</p>
                <p className="text-sm text-gray-700 pb-1">April 12, 2020 @ 15:00</p>
            </div>
            <div className="w-1/3 text-right">
                <i className={"fas " + (!moreInfo ? "fa-caret-circle-right" : "fa-caret-circle-down")}></i>
            </div>
        </div>
     </div>
     {moreInfo && <div className="w-full px-5 py-2">
        <p className="font-semibold my-2">Talk Description</p>
        <p className="text-gray-700 my-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed optio officiis dolorem blanditiis! Autem fugiat blanditiis, atque placeat impedit quibusdam quod officiis repellendus beatae commodi voluptates a accusamus quas! Maxime!</p>
        <p className="text-gray-700 text-sm">When: April 13, 2020</p>
        <p className="text-gray-700 text-sm">Where: Room 19, Database Track</p>
        <div className="flew flex-row flex-wrap my-2">
            <a className="rounded-full text-sm py-1 px-3 mr-2 my-2 bg-green-500 text-white">MongoDB</a>
        </div>
    </div>}
 </div>
)};

export default UpcomingEvent