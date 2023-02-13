import Link from 'next/link';
import React from 'react';
import { Tooltip as ReactTooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'


const Navbar = () => {
    return (
       <nav className="w-full sticky md:top-5 z-50  dark:bg-[#12181d]/60 font-semibold md:py-2 px-3 py-4 container mx-auto md:rounded-md backdrop-blur-lg">
            <div className='text-sm text-slate-400 md:space-x-4'>
            <button className='font-extrabold text-2xl rounded-full px-5 py-1'>
                    <Link href='/'>
                    ツ
                    </Link>
                </button>

                <button id="about" className='transition ease-in-out hover:bg-slate-600  hover:text-white rounded-md px-3 py-1 md:visible' data-tooltip-content="Coming Soon">
                    <Link href='/'>
                        about
                    </Link>
                </button>

                <button className='transition ease-in-out hover:bg-slate-600 hover:text-white rounded-md px-3 py-1 md:visible'>
                    <Link href='/projects'>
                        projects
                    </Link>
                </button>

                <button className='transition ease-in-out hover:bg-slate-600 hover:text-white rounded-md px-3 py-1 md:visible'>
                    <Link href='/contact'>
                       contact
                    </Link>
                </button>
                
            </div>
           
       </nav>
       
    )
}


export default Navbar;