import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
       <nav className="w-full sticky md:top-5 z-50 dark:bg-[#12181d]/60 font-semibold px-3 py-2 container mx-auto md:rounded-md backdrop-blur-lg">
            <div className='text-sm text-slate-400 md:space-x-4'>
            <button className='font-extrabold text-lg rounded-full line-through px-5 py-1'>
                    <Link href='/'>
                       //
                    </Link>
                </button>

                <button className='hover:bg-slate-600 hover:text-white rounded-md px-3 py-1'>
                    <Link href='/'>
                        about
                    </Link>
                </button>

                <button className='hover:bg-slate-600 hover:text-white rounded-md px-3 py-1'>
                    <Link href='/'>
                        projects
                    </Link>
                </button>

                <button className='hover:bg-slate-600 hover:text-white rounded-md px-3 py-1'>
                    <Link href='/'>
                        blog
                    </Link>
                </button>

                <button className='hover:bg-slate-600 hover:text-white rounded-md px-3 py-1'>
                    <Link href='/'>
                        contact
                    </Link>
                </button>


            </div>
       </nav>
    )
}


export default Navbar;