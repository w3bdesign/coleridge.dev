import React, { useEffect } from "react";
import Spotify from "@/components/Spotify";
import DiscordStatus from "@/components/DiscordStatus";
import Location from "@/components/Location";
import Birthday from "@/components/Birthday";
import Link from "next/link";
import {
  GitHubIcon,
  TwitterIcon,
  LinkedinLogo,
  MailIcon,
  JavascriptLogo,
  ReactLogo,
  TypescriptLogo,
  VSCodeLogo,
  SwiftIcon,
  NextJsIcon,
  TailWindIcon,
  GitIcon,
  NodeJsIcon,
  AWSIcon,
  MongoIcon,
  DockerIcon
} from "../Icons";
import "aos/dist/aos.css";
import Aos from "aos";

export default function Home() {
  useEffect(() => {
    Aos.init({ duration: 300 });
  }, []);

  return (
    <>
      <div data-aos="zoom-in">
        <main className="container mx-auto flex flex-col items-start justify-start max-w-3xl mt-5">
          <div className="flex flex-col items-start justify-start leading-7 m-5">
            <Spotify />

            <div className="flex flex-wrap flex-row justify-start md:grid grid-cols-3 gap-1">
              <Location />
              <Link href="https://discord.com/invite/gFY6uHQPNB">
                <DiscordStatus />
              </Link>
              <Birthday />
            </div>
            <div className="flex flex-wrap flex-row justify-start md:grid grid-cols-4 gap-5 mt-10">
              <a href="https://github.com/KaiColeridge" target="_blank" rel="noopener noreferrer">
                <GitHubIcon />
              </a>
              <a href="https://twitter.com/KaiColeridge" target="_blank" rel="noopener noreferrer">
                <TwitterIcon />
              </a>
              <a
                href="https://www.linkedin.com/in/kaicoleridge/"
                target="_blank"
                rel="noopener noreferrer">
                <LinkedinLogo />
              </a>
              <a href="mailto:kai@coleridge.dev" target="_blank" rel="noopener noreferrer">
                <MailIcon />
              </a>
            </div>
            <h1 className="md:text-7xl text-4xl font-extrabold md:mt-3 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-500">
              Hey I&apos;m, Kai ツ
            </h1>
            <p className="text-md line text-gray-600 dark:text-gray-400 mt-5">
              I&apos;m a 22 year old full stack developer and CS student from the UK. I&apos;m
              currently working on a few upcoming projects which I&apos;ll share soon. Other than
              coding I enjoy listening to music, watching films and travelling the world.
            </p>
            <h1 className="text-2xl font-bold">a deeper insight 💭</h1>
            <p className="text-md text-gray-600 dark:text-gray-400 mt-2">
              I have a dedication to technology from as far as I can remember, being curious
              from a young age on how technology works leading into designing and building
              meaningful applications for users. I&apos;m constantly trying to improve and expand my
              knowledge in the tech industry, and I&apos;m always looking for new opportunities to
              learn and grow.
            </p>
            <h1 className="text-2xl font-bold">my tech stack 💻</h1>
            <p className="text-md text-gray-600 dark:text-gray-400 mt-2">
              I have a diverse set of technology tools in my stack that I utilize for development
              purposes. These tools are instrumental in helping me create robust and functional
              applications. Here is a comprehensive list of the tools that make up my development
              stack.
            </p>
            <div className="w-full flex flex-wrap flex-row justify-center grid grid-cols-4 gap-8 p-5 mt-3 m-5 ">
              <JavascriptLogo />
              <TypescriptLogo />
              <VSCodeLogo />
              <ReactLogo />
              <SwiftIcon />
              <TailWindIcon />
              <NextJsIcon />
              <GitIcon />
              <NodeJsIcon />
              <AWSIcon />
              <MongoIcon />
              <DockerIcon />
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
