'use client'
import Link from 'next/link';
import Image from 'next/image';
import { signOut, useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import logo from '../assets/logo.gif';
export default function Header() {
    const session = useSession({
        required: true,
        onUnauthenticated() {
            redirect('/signin');
        },
    });
    return (
        <header className="bg-black shadow-md pt-2">
            <div className="container mx-auto flex justify-between items-center px-6">
                <div className="flex items-center text-3xl">
                    <Link href="/giphylist">
                        <Image className='h-10 w-20 rounded-md' src={logo} alt="Giphy"/>
                    </Link>
                </div>
                <div className="flex items-center space-x-4">
                    <Link href='/favourite'>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Favourite❤️
                        </button>
                    </Link>
                    <button onClick={() => signOut()} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Logout
                    </button>
                </div>
            </div>
        </header>
    );
}
