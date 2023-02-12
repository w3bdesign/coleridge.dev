
const birthday = () => {
   

    const birthday = new Date(2023, 2, 30);
    const today = new Date();
    const diff = birthday.getTime() - today.getTime();
    const days = Math.ceil(diff / (1000 * 60 * 60 * 24));

    return (
        <div className="flex flex-col items-start justify-start text-sm font-semibold px-5 py-4 mt-5 dark:bg-[#12181d]/60 rounded-lg p-3 text-white">
            🎂 {days} days until birthday
            </div>
    )
    
    
}

  

    export default birthday;