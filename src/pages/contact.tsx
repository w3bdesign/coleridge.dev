import React, { useEffect, useState } from "react";
import TimeComponent from "@/components/TimeComponent";
import Aos from "aos";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const emailRegex = new RegExp(
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
  useEffect(() => {
    Aos.init({ duration: 300 });
  }, []);

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const data = {
      name,
      email,
      message
    };

    if (!name || !email || !message) return setError("❌ Please fill in all fields");
    if (!emailRegex.test(email)) return setError("❌ Please enter a valid email");
    if (error) setError("");
    if (name && email && message) setSuccess("✅ Message sent successfully");

    fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    });

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <>
      <div data-aos="zoom-in">
        <div className="container mx-auto flex flex-col items-start justify-start max-w-3xl">
          <div className="flex flex-col items-start justify-start leading-7 pt-5 m-5 gap-3 ">
            <h1 className="text-4xl">Get in touch 💬</h1>
            <TimeComponent />
          </div>
          <div className="font-semibold text-slate-400 rounded-xl dark:bg-[#12181d]/60 w-full  mx-auto">
            <form>
              <div className="flex flex-col items-start justify-start m-10 gap-3">
                <label htmlFor="Name">Name<span className="text-red-500">*</span></label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Jony Ive"
                  required
                  className="w-full rounded-md p-2 dark:bg-[#12181d]/60 text-white"
                />
              </div>
              <div className="flex flex-col items-start justify-start m-10 gap-3">
                <label htmlFor="email">Email<span className="text-red-500">*</span></label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="jive@apple.com"
                  required
                  className="w-full rounded-md p-2 dark:bg-[#12181d]/60 text-white"
                />
              </div>
              <div className="flex flex-col items-start justify-start m-10 gap-3">
                <label htmlFor="message">Message<span className="text-red-500">*</span></label>
                <textarea
                  maxLength={1000}
                  value={message}
                  id="message"
                  typeof="text"
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Leave your message here."
                  required
                  className="w-full rounded-md p-2 dark:bg-[#12181d]/60 text-white"
                />
              </div>
              <div className="flex flex-col itemscen justify-center m-10 gap-3">
                <button
                  onClick={handleSubmit}
                  type="submit"
                  className="bg-indigo-600 text-white font-bold transition ease-in-out hover:bg-slate-700 rounded-lg py-3 "
                >
                  Send ➤
                </button>
              </div>
              <div className="flex flex-col items-center justify-center m-10">
                <p className="text-red-500">{error}</p>
              </div>
              <div className="flex flex-col items-center justify-center m-10">
                <p className="text-green-500">{success}</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
