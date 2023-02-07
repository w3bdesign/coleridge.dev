import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
       <nav className="flex md:w-full justify-center">
            <div className='flex items- rounded-full bg-slate-900 text-neutral-400 font-semibold mt-8 py-2 px-5 space-x-5 md:w-[70%]'>
            <button className='font-bold text-lg rounded-full px-3 py-1'>
                    <Link href='/'>
                       /.
                    </Link>
                </button>

                <button className='hover:bg-slate-600 rounded-full px-3 py-1'>
                    <Link href='/'>
                        Home
                    </Link>
                </button>

                <button className='hover:bg-slate-600 rounded-full px-3 py-1'>
                    <Link href='/'>
                        About
                    </Link>
                </button>

                <button className='hover:bg-slate-600 rounded-full px-3 py-1'>
                    <Link href='/'>
                        Contact
                    </Link>
                </button>

            </div>
       </nav>
    )
}


export default Navbar;