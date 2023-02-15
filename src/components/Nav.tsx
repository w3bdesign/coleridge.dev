import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Tooltip as ReactTooltip } from "react-tooltip";

import "react-tooltip/dist/react-tooltip.css";

const Navbar = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <nav className="md:w-[60rem] sticky md:top-5 z-50 dark:bg-[#12181d]/60 font-bold md:py-2 mt-5 py-3 container mx-auto md:rounded-lg backdrop-blur-md">
      <div className="text-sm text-slate-400 md:space-x-4">
        <button className="font-extrabold text-2xl rounded-full px-4 py-1">
          <Link href="/">ツ</Link>
        </button>

        <button
          id="about"
          className="transition ease-in-out hover:bg-slate-600  hover:text-white rounded-md px-3 py-1 md:visible"
          data-tooltip-content="Coming Soon"
        >
          <Link href="/">about</Link>
        </button>

        <button className="transition ease-in-out hover:bg-slate-600 hover:text-white rounded-md px-3 py-1 md:visible">
          <Link href="/projects">projects</Link>
        </button>

        <button className="transition ease-in-out hover:bg-slate-600 hover:text-white rounded-md px-3 py-1 md:visible">
          <Link href="/contact">contact</Link>
        </button>
      </div>
      {mounted ? <ReactTooltip anchorId="about" /> : null}
    </nav>
  );
};

export default Navbar;
