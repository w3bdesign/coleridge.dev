import { useLanyardWS } from "use-lanyard";
import { SpotifyIcon } from "@/Icons";
import { useEffect, useState } from "react";

// TODO: Add proper Typescript types here

const Spotify = () => {
  const DISCORD_ID = "328282806327181322";
  const data = useLanyardWS(DISCORD_ID)
  const [, mounted] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      mounted({});
    }, 1000);

    return () => clearInterval(interval);

  }, []);


  if (!data?.spotify) {
    return (
      <div>
        <p className="dark:text-gray-500 text-lg font-semibold mb-5 mt-5 flex items-center gap-2">
          <SpotifyIcon />
          Not listening to anything
          <span className="w-2 h-2">
            <span className="absolute w-2 h-2 bg-red-400 rounded-full animate-ping" />
            <span className="absolute w-2 h-2 bg-red-400 rounded-full" />
          </span>
        </p>
      </div>
    );
  }

  const total = data.spotify.timestamps.end - data.spotify.timestamps.start;
  const current = 100 - ((data.spotify.timestamps.end - new Date().getTime()) / total) * 100;
  
  return (
    <div>
      <p className="text-green-400 text-lg font-semibold flex items-center gap-2">
        <span className="text-green-400">
          <SpotifyIcon />
        </span>

        Listening to Spotify
        <span className="w-2 h-2">
          <span className="absolute w-2 h-2 bg-green-400 rounded-full animate-ping" />
          <span className="absolute w-2 h-2 bg-green-400 rounded-full" />
        </span>
      </p>

      <div className="text-green-500 text-lg font-semibold mt-5 pr-3 p-2 flex items-center dark:bg-wh/60 dark:bg-[#12181d]/60 border-4 rounded-md overflow-hidden border-green-400">
        <img
          src={data.spotify.album_art_url ?? ""}
          className="w-[10rem] h-[6rem] md:h-[8rem] mr-5 pointer-events-none"
          alt={data.spotify?.album}
        />
        <div className="w-full h-full flex flex-col items-start justify-center">
          i&apos;m listening to
          <a
            href={`https://open.spotify.com/track/${data?.spotify?.track_id}`}
            target="_blank"
            rel="noreferrer"
            className="md:w-full text-sm md:text-xl text-gray-900 dark:text-[#e1eafd] hover:underline truncate">
            {data?.spotify?.song}
          </a>
          <p className="w-full text-gray-600 dark:text-[#cad2e0] font-normal text-sm truncate">
            {data?.spotify?.artist}
          </p>
          
          <div className="w-full rounded-full md:mt-2 mb-1.5 mt-2 dark:bg-gray-800">
            <div className="bg-green-500 h-3 rounded-md" style={{width: `${current}%` }}></div>
        </div>
     


      </div>
    </div>
    </div >
  );
};


export default Spotify;
