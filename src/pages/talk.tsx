import React, { useState, useEffect } from "react";
import TimeComponent from "@/components/TimeComponent";

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
;   

const emailRegex = new RegExp(
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
);

    const handleSubmit = e => {
        e.preventDefault();
        const data = {
            name,
            email,
            message,
        };
        console.log(data);
        setName("");
        setEmail("");
        setMessage("");

        if(!name || !email || !message) return setError("❌ Please fill in all fields");
        if(!emailRegex.test(email)) return setError("❌ Please enter a valid email");

        if(error) setError("");

        if(name && email && message) setSuccess("✅ Message sent successfully");

    
   
    
    fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
        },
    });

};
   
    return (
    <>

   
     <main className='container mx-auto flex flex-col items-start justify-start max-w-3xl'>

<div className='flex flex-col items-start justify-start leading-7 m-10 gap-3'>
    <h1>Let's connect 💬</h1>
    <TimeComponent />
    </div>


    <div className="font-semibold text-slate-400 rounded-xl dark:bg-[#12181d]/60 w-full  mx-auto">
    
    <form>
    <div className="flex flex-col items-start justify-start m-10 gap-3">
    <label htmlFor="Name">Name</label>
    <input 
    id="name"
    type="text"
    value={name}
    onChange={e => setName(e.target.value)}
    placeholder="Tim Cook"
    required
     className="w-full rounded-md p-2 dark:bg-[#12181d]/60 text-white" />
    </div>

    <div className="flex flex-col items-start justify-start m-10 gap-3">
    <label htmlFor="email">Email</label>
    <input 
    id="email"
    type="email"
    value={email}
    onChange={e => setEmail(e.target.value)}
    placeholder="tcook@apple.com"
     required
     className="w-full rounded-md p-2 dark:bg-[#12181d]/60 text-white" />
    </div>

    <div className="flex flex-col items-start justify-start m-10 gap-3">
    <label htmlFor="message">Message</label>
    <textarea 
    maxLength={1000}
    value={message}
    id="message"
    typeof="text"
    rows={4}
    onChange={e => setMessage(e.target.value)}
    placeholder="Hi, I'm Tim Cook and I'm the CEO of Apple."
    required
    className="w-full rounded-md p-2 dark:bg-[#12181d]/60 text-white" />
    </div>

    <div className="flex flex-col items-start justify-start m-10">
     <p className="text-red-500">{error}</p>
     </div>

     <div className="flex flex-col items-start justify-start m-10">
        <p className="text-green-500">{success}</p>
        </div>

    <div className="flex flex-col items-end justify-end m-10 gap-3">
    <button 
    onClick={handleSubmit}
    type="submit" 
    className="bg-indigo-600 text-white font-bold hover:bg-slate-700 rounded-lg px-5 py-2">Send ➤</button>
    
    

    </div>

    

    </form>
    
 </div>
    
    </main>
    </>
    )
    }

    export default Contact;