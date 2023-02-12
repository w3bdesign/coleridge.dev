import Link from 'next/link'
import { useLanyard } from 'use-lanyard'

const DISCORD_ID = '328282806327181322'

const Discord = () => {
    const { data: user } = useLanyard(DISCORD_ID) 

    if(user?.discord_status === 'offline') {
        return (
            <div className="flex flex-col items-start justify-center text-sm font-semibold px-5 py-4 mt-5 text-white dark:bg-[#12181d]/60 rounded-lg">
                <h3>⚫ {user?.discord_status}</h3>
            </div>            
        )
    }

    if(user?.discord_status === 'dnd') {
        return (
            <div className="flex flex-col items-start justify-center text-sm font-semibold px-5 py-4 mt-5 text-white dark:bg-[#12181d]/60 rounded-lg">
                <h3>🔴 {user?.discord_status}</h3>
            </div>            
        )
    }
    
    if(user?.discord_status === 'online') {
        return (
            <div className="flex flex-col items-start justify-center text-sm font-semibold px-5 py-4 mt-5 text-white dark:bg-[#12181d]/60 rounded-lg">
                <h3>🟢 {user?.discord_status}</h3>
            </div>            
        ) 
    }
    if(user?.discord_status === 'idle') {
        return (
            <div className="flex flex-col items-start justify-center text-sm font-semibold px-5 py-4 mt-5 text-white dark:bg-[#12181d]/60 rounded-lg">
                <h3>🟡 {user?.discord_status}</h3>
            </div>            
        ) 

    } 

    

}
export default Discord;