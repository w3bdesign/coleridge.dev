import Link from 'next/link';

function Navbar() {
  return (
    <nav className="bg-gray-900 md:rounded-md text-sm text-white font-bold md:ml-10 md:mt-5 py-4 px-6 md:px-10 md:w-[90%]">
        <div className="space-x-7 text-gray-400 invisible lg:visible ">
            <Link href="/" className='text-xl visible '>./</Link>
            <Link href="/" className='hover:bg-slate-700 p-2 rounded-2xl'>/about</Link>
            <Link href="/" className='hover:bg-slate-700 p-2 rounded-2xl'>/projects</Link>
            <Link href="/" className='hover:bg-slate-700 p-2 rounded-2xl'>/contact</Link>
        </div>
    </nav>
    );

  }

export default Navbar;