'use client'
import { useEffect, useState } from 'react';
import Header from '../header/page';
import Loader from '../Loader/page';
export default function GiphyList() {
    const [gifs, setGifs] = useState([]);
    const [input, setInput] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 10;
    const limit = 12;

    useEffect(() => {
        const apiKey = 'Cdf9RW093kdkBMDE0saHxhL47OBz3E0O';
        const offset = (currentPage - 1) * limit;
        const searchUrl = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${encodeURIComponent(searchTerm)}&limit=${limit}&offset=${offset}&rating=g`;
        const trendingUrl = `https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=${limit}&offset=${offset}&rating=g&bundle=messaging_non_clips`;
        const fetchGifs = async () => {
            try {
                const url = searchTerm.trim() !== '' ? searchUrl : trendingUrl;
                const response = await fetch(url);
                const data = await response.json();
                setGifs(data.data);
            } catch (error) {
                console.error('Error fetching data from Giphy:', error);
            }
        };

        fetchGifs();
    }, [searchTerm, currentPage]);

    const handleSearch = () => {
        if (input.trim() === '') {
            setSearchTerm('');
            setCurrentPage(1);
        } else {
            setSearchTerm(input);
            setCurrentPage(1);
        }
    };

    const startPage = Math.max(1, currentPage - 1);
    const endPage = Math.min(totalPages, currentPage + 1);
    return (
        <>
            <Header />

            <div className="px-40 pt-6">
                <div className="flex justify-center items-center ">
                    <div className="w-3/5">
                        <div className="flex">
                            <input
                                className="text-black p-2 w-full rounded-l-lg"
                                type="text"
                                value={searchTerm}
                                onChange={
                                    (e) => {
                                        setSearchTerm(e.target.value);
                                    }}
                                placeholder="Search for GIFs"
                            />
                            <button onClick={handleSearch} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r-lg">
                                Search
                            </button>
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-2 mt-4">

                    {
                        gifs.length === 0 && <Loader />
                    }

                    {gifs.map(gif => (
                        <div key={gif.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-2 mb-4 cursor-pointer">
                            <div className="rounded overflow-hidden shadow-lg bg-white">
                                <img className="w-full h-44" src={gif.images.fixed_height.url} alt='Gif Not Found' />
                                <div className="px-4 py-2">
                                    <div className="font-bold text-xl mb-2 text-gray-900">{gif.title}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex justify-center items-center mt-4">
                    <button
                        onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                        disabled={currentPage === 1}
                        className="px-4 py-2 m-2 bg-gray-300 rounded"
                    >
                        Previous
                    </button>
                    {[...Array(endPage - startPage + 1)].map((_, idx) => (
                        <button
                            key={startPage + idx}
                            onClick={() => setCurrentPage(startPage + idx)}
                            className={`px-4 py-2 m-2 ${currentPage === startPage + idx ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
                        >
                            {startPage + idx}
                        </button>
                    ))}
                    <button
                        onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                        disabled={currentPage === totalPages}
                        className="px-4 py-2 m-2 bg-gray-300 rounded"
                    >
                        Next
                    </button>
                </div>
            </div>
        </>
    );
}
