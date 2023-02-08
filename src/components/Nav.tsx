import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
       <nav className="w-full sticky md:top-5 z-50 font-semibold px-5 py-3 md:mt-4 container mx-auto rounded-md backdrop-blur-lg">
            <div className='text-md text-white md:space-x-4'>
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
                        contact
                    </Link>
                </button>
            



            </div>
       </nav>
    )
}


export default Navbar;