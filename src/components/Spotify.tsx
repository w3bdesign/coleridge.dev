import React, { useEffect } from "react";
import { useLanyard } from "use-lanyard";

const DISCORD_ID = "328282806327181322";

const Spotify = () => {
  const { data: user } = useLanyard(DISCORD_ID);

  // refresh component every 30seconds to update presence data
  useEffect(() => {
    const interval = setInterval(() => {
      window.location.reload();
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  if (!user?.spotify) {
    return (
      <div>
        <p className="dark:text-gray-500 text-lg font-semibold mb-5 mt-5 flex items-center gap-2">
          <svg
            stroke="currentColor"
            fill="gray"
            strokeWidth="0"
            role="img"
            viewBox="0 0 24 24"
            className="text-2xl"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title></title>
            <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"></path>
          </svg>
          Not listening to anything
          <span className="w-2 h-2">
            <span className="absolute w-2 h-2 bg-red-400 rounded-full animate-ping" />
            <span className="absolute w-2 h-2 bg-red-400 rounded-full" />
          </span>
        </p>
      </div>
    );
  }

  return (
    <div>
      <p className="text-green-400 text-lg font-semibold flex items-center gap-2">
        <svg
          stroke="currentColor"
          fill="#1DB954"
          strokeWidth="0"
          role="img"
          viewBox="0 0 24 24"
          className="text-2xl"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title></title>
          <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"></path>
        </svg>
        Listening to Spotify
        <span className="w-2 h-2">
          <span className="absolute w-2 h-2 bg-green-400 rounded-full animate-ping" />
          <span className="absolute w-2 h-2 bg-green-400 rounded-full" />
        </span>
      </p>

      <div className="text-green-500 text-lg font-semibold mt-5 flex items-center dark:bg-wh/60 dark:bg-[#12181d]/60 rounded-lg border-4 border-green-400">
        <img
          src={user.spotify.album_art_url ?? ""}
          className="w-[10rem] h-[6rem] md:h-[8rem] rounded-md mr-5 pointer-events-none"
          alt={user.spotify?.album}
        />
        <div className="w-full h-full flex flex-col items-start justify-center">
          i&apos;m listening to
          <a
            href={`https://open.spotify.com/track/${user?.spotify?.track_id}`}
            target="_blank"
            rel="noreferrer"
            className="md:w-full w-60 font-medium text-gray-900 dark:text-[#e1eafd] hover:underline truncate"
          >
            {user?.spotify?.song}
          </a>
          <p className="w-full text-gray-600 dark:text-[#cad2e0] font-normal text-sm truncate">
            {user?.spotify?.artist}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Spotify;
