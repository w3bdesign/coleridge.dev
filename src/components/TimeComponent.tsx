import { useEffect, useState } from "react";

const CurrentStatus = () => {
    const [time, setTime] = useState<string>("00:00:00 p.m.");
    const [awake, setAwake] = useState<boolean>(true);

    function updateTime() {
      let currentTime = new Date().toLocaleString("en-GB", { hour: '2-digit', minute: '2-digit'});
      let ampm = (currentTime >= "12:00") ? "pm" : "am";
      setTime(currentTime + ampm)
      setAwake(currentTime >= "08:00" && currentTime <= "23:00");
    }
    useEffect(() => {
        updateTime();
    }, []);
 
    return (
        <p className="text-black/50 dark:text-white/50 text-md mt-2">
            <p className="text-white font-semibold mb-5">Have a question you want to ask? Or want to connect with me? Feel free to get in touch by leaving a message below. You can also contact me via Twitter or Discord.</p>
            It&aposs currently <span className="font-semibold text-black/60 dark:text-white/60">{time}</span> for me, so I&aposm
            probably{" "}
            <span className="font-semibold text-black/60 dark:text-white/60">{awake ? "awake🌟" : "sleeping💤"}</span>. I&aposll
            get back to you soon.
        </p>
    );
};

export default CurrentStatus;