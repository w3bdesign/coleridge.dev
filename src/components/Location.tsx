import { useLanyard } from "use-lanyard";
import { Tooltip as ReactTooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

const DISCORD_ID = "328282806327181322";

const Location = () => {
  const { data: user } = useLanyard(DISCORD_ID);

  return (
    <div className="flex flex-col items-start justify-start text-sm font-semibold px-5 py-4 mt-5 dark:bg-[#12181d]/60 rounded-lg p-3 transition ease-in-out hover:bg-gray-900">
      <a href={user?.kv.locationURL}  target="_blank" rel="noreferrer" id="location" data-tooltip-content="Current Location">
        <p className="text-lg text-white" >📍 {user?.kv.location}</p>
      </a>
      <ReactTooltip anchorId="location" />
    </div>
  );
};
export default Location;
