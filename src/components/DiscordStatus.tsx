import { useLanyardWS } from "use-lanyard";
import { DiscordLogo } from "@/Icons";
const DISCORD_ID = "328282806327181322";

const DiscordStatus = () => {
  const data = useLanyardWS(DISCORD_ID);
  
//switch statement 
  if (data?.discord_status === "dnd") {
    return (
      <div className="flex flex-col items-start justify-center text-xl font-semibold pl-3  py-4 mt-5 text-white bg-red-500 rounded-lg">
        <h3>
          <span className="px-2">
            <DiscordLogo />
          </span>
          {"Do Not Disturb"}
        </h3>
      </div>
      
    );
  }

  if (data?.discord_status === "online") {
    return (
      <div className="flex flex-col items-start justify-center text-xl font-bold px-4 pl-3 pr-20 py-4 mt-5 text-white bg-green-600 rounded-lg">
        <h3>
          <span className="px-2">
            <DiscordLogo />
          </span>
          {"Online"}
        </h3>
      </div>
    );
  }

  if (data?.discord_status === "idle") {
    return (
      <div className="flex flex-col items-start justify-center text-xl font-semibold px-4 pl-3 pr-20 py-4 mt-5 text-white bg-yellow-600 rounded-lg">
        <h3>
          <span className="px-2">
            <DiscordLogo />
          </span>
          {"Idle"}
        </h3>
      </div>
    );
  }

  if (data?.discord_status === "offline") {
    return (
      <div className="flex flex-col items-start justify-center text-xl font-semibold px-4 pl-3 pr-20 py-4 mt-5 text-white dark:bg-[#7289da]/80 rounded-lg">
        <h3>
          <span className="px-2">
            <DiscordLogo />
          </span>
          {"Offline"}
        </h3>
      </div>
    );
  }

  return <div></div>;
};
export default DiscordStatus;
