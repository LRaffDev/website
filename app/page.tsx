'use client'
import dynamic from 'next/dynamic';
const Navbar = dynamic(() => import('../components/Navbar'), { ssr: false, loading: () => <p className='flex w-screen h-screen justify-center items-center text-3xl'>Caricamento...</p> });
const Home = dynamic(() => import('../components/Index'), { ssr: false });

export default function Page() {
  return (
    <>
        <Navbar />
        <Home />
    </>
  )
}
