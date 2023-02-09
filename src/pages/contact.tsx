import React, { useState } from "react";
import axios from "axios";

const Contact = () => {

    const [inputData, setInputData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e: any) => {
        setInputData({...inputData, [e.target.name]: e.target.value});
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
        axios.post("/api/send", inputData)
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        })
        alert("Message sent!");
    }

   
    return (
    <>
     <main className='container mx-auto flex flex-col items-start justify-start max-w-3xl'>

<div className='flex flex-col items-start justify-start leading-7 m-10 gap-3'>
    <h1>Give me a shout 📧</h1>
    <p className="text-white">Feel free to reach out to me on any of the platforms below. I'm always open to new opportunities and collaborations.</p>
    <p>It's currently <span className="font-bold">4:53pm.</span> for me, so I'm probably <span className="font-bold">awake.</span> I'll be in contact with you soon.</p>
    </div>



    <div className="font-bold text-slate-400 rounded-xl dark:bg-[#12181d]/60 px-4 w-full mx-auto">
    
    <form method="post" onSubmit={handleSubmit}>
    <div className="flex flex-col items-start justify-start m-10 gap-3">
    <label htmlFor="Name">Name</label>
    <input 
     id="name"
     type="name"
     name="name"
     onChange={handleChange}
     required 
     placeholder="John Appleseed"
     className="w-full rounded-md p-2 dark:bg-[#12181d]/60 text-white" />
    </div>

    <div className="flex flex-col items-start justify-start m-10 gap-3">
    <label htmlFor="email">Email</label>
    <input 
    id="email"
    type="email" 
    name="email"
    onChange={handleChange}
     placeholder="johnappleseed@apple.com"
     required
     className="w-full rounded-md p-2 dark:bg-[#12181d]/60 text-white" />
    </div>

    <div className="flex flex-col items-start justify-start m-10 gap-3">
    <label htmlFor="message">Message</label>
    <textarea 
    id="message"
    name="message"
    onChange={handleChange}
    required 
    placeholder="Hi Kai, what's up?" 
    className="w-full rounded-md p-2 dark:bg-[#12181d]/60 text-white" />
    </div>

    <div className="flex flex-col items-end justify-end m-10 gap-3">
    <button 
    type="submit" 
    onSubmit={handleSubmit}
    className="bg-indigo-600 text-white font-bold hover:bg-slate-700 rounded-lg px-5 py-2">Send ➤</button>
    </div>

    </form>
    
 </div>
    
    </main>
    </>
    )
    }

    export default Contact;