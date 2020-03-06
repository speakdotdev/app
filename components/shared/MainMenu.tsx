import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

const MainMenu = ({items}) => {
    return(
        <div className="menu sticky top-0 pt-2">
            {items.map(item => (
                <MainMenuItem item={item} key={item.order} />
            ))}
        </div>
    )
}

const MainMenuItem = ({item}) => {
    const router = useRouter();
    console.log("Router", router.asPath);
    console.log("Item", item.link);
    return(
        <Link href={item.link}>
            <div className={"py-2 px-4 text-lg hover:bg-gray-300 rounded-full " + (item.link === router.asPath ? 'font-semibold': '')}>
                <i className={item.icon}></i> 
                <span className="pl-4">{item.name}</span>
            </div>
        </Link>
    )
}

export default MainMenu