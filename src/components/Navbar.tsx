export default function Navbar(): JSX.Element {
    
    return (
        <nav className='flex flex-col items-center sm:justify-center sm:flex-row gap-6 pt-20'>
            <a href='/about' className='hover:text-blue-700 hover:backdrop-saturate-200'>
                About
            </a>

            <a href='/cv' className='hover:text-blue-700'>
                Curriculum
            </a>

            <a href='/contatti' className='hover:text-blue-700'>
                Contatti
             </a>

            <a href='https://tinyurl.com/2tw52t3f' className='hover:text-blue-700'>
                Portfolio
             </a>
        </nav>
    )
}