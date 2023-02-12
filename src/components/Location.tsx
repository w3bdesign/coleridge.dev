import { useLanyard } from "use-lanyard";

const DISCORD_ID = "328282806327181322";

const Location = () => {
    const { data: user } = useLanyard(DISCORD_ID);

    return (
        // show location kv pair
        
        <div className="flex flex-col items-start justify-start text-sm font-semibold px-5 py-4 mt-5 dark:bg-[#12181d]/60 rounded-lg p-3 hover:bg-gray-900">
            <a href={user?.kv.googleMapURL} target="_blank" rel="noreferrer">
            <h3>📍{user?.kv.location}</h3>
            </a>
        </div>
    );
};
export default Location;