import { useLanyard } from "use-lanyard";

const DISCORD_ID = "328282806327181322";

const Location = () => {
  const { data: user } = useLanyard(DISCORD_ID);

  return (
    // show location kv pair

    <div className="flex flex-col items-start justify-start text-sm font-semibold px-5 py-4 mt-5 dark:bg-[#12181d]/60 rounded-lg p-3 transition ease-in-out hover:bg-gray-900">
      <a href={user?.kv.googleMapURL} target="_blank" rel="noreferrer">
        <p className="text-lg text-white">📍 {user?.kv.location}</p>
      </a>
    </div>
  );
};
export default Location;
