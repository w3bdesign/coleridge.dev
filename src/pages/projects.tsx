import { GitHubIcon } from "@/Icons";

const ProjectData = [
  {
    id: 0,
    title: "coleridge.dev",
    description:
      "This website you are currently on. Built with Next.js, TailwindCSS, and TypeScript.",
    href: "https://github.com/kaicoleridge/coleridge.dev"
  },

  {
    id: 1,
    title: "VecTor",
    description: "a multi-purpose Discord bot for my server 🤖",
    href: "https://github.com/kaicoleridge/VecTor"
  },

  {
    id: 2,
    title: "DoIt",
    description: "a very minimal task app for iOS 📝",
    href: "https://github.com/kaicoleridge/DoIt"
  }
];

export default function Projects() {
  return (
    <div data-aos="zoom-in">
      <div className="container mx-auto flex flex-col items-start justify-start max-w-3xl">
        <div className="flex flex-col items-start justify-start leading-7 m-10">
          <h1 className="md:text-5xl font-bold">Projects</h1>
          <div className="text-md line text-gray-400 mt-5">
            Here are a couple of projects I&apos;ve worked on and am currently working on. This list
            will be updated as I work on more projects.
            {ProjectData.map(({ id, title, description, href }) => (
              <div
                className="flex flex-col items-start justify-start text-md font-semibold px-5 py-4 mt-5 dark:bg-[#12181d]/60 border-2 border-b-gray-400 rounded-lg transform transition duration-300 hover:scale-105"
                key={id}
              >
                <p className="md:text-xl font-bold text-white">{title}</p>
                <p className="font-normal">{description}</p>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-indigo-500 mt-2 flex inline"
                >
                  <GitHubIcon /> <span className="px-2 mb-1 font-bold">View on GitHub</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
