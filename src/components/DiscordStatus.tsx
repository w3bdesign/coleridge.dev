import { useLanyardWS } from "use-lanyard";
import { DiscordLogo } from "@/Icons";
const DISCORD_ID = "328282806327181322";

const DiscordStatus = () => {
  const data  = useLanyardWS(DISCORD_ID);
  if (data?.discord_status === "dnd") {
    return (
      <div className="flex flex-col items-start justify-center text-lg font-semibold px-2 py-4 mt-5 text-white bg-red-500 rounded-lg transition ease-in-out hover:bg-gray-900">
        <h3>
        <span className="px-2">
          <DiscordLogo />
          </span>
          {data?.discord_status}
        </h3>
      </div>
    );
  }

  if (data?.discord_status === "online") {
    return (
      <div className="flex flex-col items-start justify-center text-lg font-bold px-2 py-4 mt-5 text-white bg-green-600 rounded-lg transition ease-in-out hover:bg-gray-900">
        <h3>
          <span className="px-2">
          <DiscordLogo />
          </span>
          {data?.discord_status}
        </h3>
      </div>
    );
  }

  if (data?.discord_status === "idle") {
    return (
      <div className="flex flex-col items-start justify-center text-lg font-semibold px-2 py-4 mt-5 text-white bg-yellow-600 rounded-lg transition ease-in-out hover:bg-gray-900">
        <h3>
        <span className="px-2">
          <DiscordLogo />
          </span>
          {data?.discord_status}
        </h3>
      </div>
    );
  }

  if (data?.discord_status === "offline") {
    return (
      <div className="flex flex-col items-start justify-center text-lg font-semibold px-2 py-4 mt-5 text-white dark:bg-[#7289da]/80 rounded-lg transition ease-in-out hover:bg-gray-900">
        <h3>
          <span className="px-2">
          <DiscordLogo />
          </span>
          {data?.discord_status}
        </h3>
      </div>
    );
  }

  return <div></div>;
};
export default DiscordStatus;
