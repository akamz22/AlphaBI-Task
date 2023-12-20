'use client';
import { signOut, useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import GiphyList from './giphylist/page';
export default function Home() {
  const session = useSession({
    required: true,
    onUnauthenticated() {
      redirect('/signin');
    },
  });
  return (
    <div className="p-8">
      <GiphyList/>
    </div>
  )
}

Home.requireAuth = true