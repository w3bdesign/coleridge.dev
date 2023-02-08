import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
       <nav className="w-full sticky md:top-5 z-50 bg-gray-900 font-semibold px-5 py-3 md:mt-4 container mx-auto rounded-md backdrop-blur-lg">
            <div className='text-md text-gray-400 md:space-x-4'>
            <button className='font-bold text-lg rounded-full px-5 py-1'>
                    <Link href='/'>
                       /.
                    </Link>
                </button>

                <button className='hover:bg-slate-600 rounded-md px-3 py-1'>
                    <Link href='/'>
                        about
                    </Link>
                </button>

                <button className='hover:bg-slate-600 rounded-md px-3 py-1'>
                    <Link href='/'>
                        projects
                    </Link>
                </button>

                <button className='hover:bg-slate-600 rounded-md px-3 py-1'>
                    <Link href='/'>
                        contact
                    </Link>
                </button>
            



            </div>
       </nav>
    )
}


export default Navbar;