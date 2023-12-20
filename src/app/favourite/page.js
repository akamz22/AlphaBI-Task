'use client'

import { useContext } from "react"
import { Context } from "../context/page"
export default function Favourite() {
    const { favourite } = useContext(Context)
    console.log(favourite)
    return (
        <>
            {/* <div className="flex flex-wrap -mx-2 mt-4">
                {favourite.map(gif => (
                    <div key={gif.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-2 mb-4 cursor-pointer">
                        <div className="rounded overflow-hidden shadow-lg bg-white">
                            <img className="w-full h-44" src={gif.images.fixed_height.url} alt='Gif Not Found' />
                            <div className="px-4 py-2">
                                <div className="font-bold text-xl mb-2 text-gray-900">{gif.title}</div>

                            </div>
                        </div>
                    </div>
                ))}
            </div> */}
            <div className="flex flex-wrap m-10">
                {favourite.length === 0 ? (
                    <div className="w-full text-center">
                        <p className="text-white text-6xl">No items added</p>
                    </div>
                ) : (
                    favourite.map(gif => (
                        <div key={gif.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-2 mb-4 cursor-pointer">
                            <div className="rounded overflow-hidden shadow-lg bg-white">
                                <img className="w-full h-44" src={gif.images.fixed_height.url} alt={gif.title || 'Gif Not Found'} />
                                <div className="px-4 py-2">
                                    <div className="font-bold text-xl mb-2 text-gray-900">{gif.title}</div>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>

        </>
    )
}