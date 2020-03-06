import React, {useState} from 'react';

const BlogCard = () => {
    return (
        <div className="bg-white shadow-lg flex flex-wrap w-full rounded-md overflow-hidden">
            <img className="w-full object-cover h-auto" src="https://images.unsplash.com/photo-1478172326435-839f111a16c5" />     

    <div className="w-full">
        <div className="bg-white px-5 py-3 relative">
            <h2 className="text-lg font-bold mb-2">Building Modern Applications with Next.js and MongoDB</h2>
            <p className="text-sm text-gray-700 mb-2">February 21, 2020 | Scotch.io</p>
            <p className="text-gray-700 mb-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, voluptatum facilis? Ut inventore repellat vero quos blanditiis rem temporibus eos modi maiores ipsam, atque autem, iure, dolorum voluptatibus facilis aspernatur! Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis enim magni sint voluptatem deserunt molestias provident officiis esse error, recusandae quae dignissimos quo corrupti odit similique itaque veritatis? Culpa, eaque.</p>
            <div className="py-2">
                <span className="inline-block text-sm py-1 px-4 mr-2 bg-black text-white rounded-full">Next.js</span>
                <span className="inline-block text-sm py-1 px-4 mr-2 bg-green-500 text-white rounded-full">MongoDB</span>
                <span className="inline-block text-sm py-1 px-4 mr-2 bg-blue-500 text-white rounded-full">Frontend</span>
            </div>
            <p className="py-3">
                <a href="">Read more on Scotch.io</a>
            </p>
        </div>
     </div>
       </div>
    )
}

export default BlogCard