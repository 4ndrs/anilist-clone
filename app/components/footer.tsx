import Link from "next/link";

const Footer = () => (
  <footer className="mt-5 bg-slate-900 p-[1.9rem] text-slate-400">
    <div>
      <h1 className="mb-3 font-bold text-sky-400">Site Theme</h1>
      <ul className="flex gap-5">
        <li>
          <button
            aria-label="default"
            className="relative h-[1.57rem] w-[1.57rem] rounded-[3px] border-[2px] border-slate-500 bg-white text-slate-900"
          >
            <span className="absolute left-[0.15rem] top-[0.1rem]">A</span>
          </button>
        </li>
        <li>
          <button
            aria-label="Dark"
            className="relative h-[1.57rem] w-[1.57rem] rounded-[3px] border-[2px] border-slate-500 bg-slate-900 text-slate-400"
          >
            <span className="absolute left-[0.15rem] top-[0.1rem]">A</span>
          </button>
        </li>
        <li>
          <button
            aria-label="System Theme"
            className="relative h-[1.57rem] w-[1.57rem] overflow-hidden rounded-[3px] border-[2px] border-slate-500 bg-slate-900 text-slate-400"
          >
            <span className="absolute -inset-x-2 inset-y-0 -translate-y-1/3 translate-x-1/4 rotate-45 bg-white" />
            <span className="absolute left-[0.15rem] top-[0.1rem]">A</span>
          </button>
        </li>
      </ul>
    </div>

    <div className="mt-7 flex flex-col gap-7 [&_a:hover]:text-sky-400 [&_a]:block [&_a]:p-1.5 [&_a]:text-[0.94rem] [&_a]:font-semibold [&_a]:leading-[1.1rem] [&_menu]:flex [&_menu]:flex-col">
      <menu>
        <li>
          <Link href="#">Donate</Link>
        </li>
        <li>
          <a target="_blank" rel="noreferrer" href="https://anilist.co">
            AniList.co
          </a>
        </li>
        <li>
          <a target="_blank" rel="noreferrer" href="http://anichart.net">
            AniChart.net
          </a>
        </li>
      </menu>

      <menu>
        <li>
          <Link href="#">Apps</Link>
        </li>
        <li>
          <Link href="#">Site Stats</Link>
        </li>
        <li>
          <Link href="#">Recommendations</Link>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="http://github.com/AniList/ApiV2-GraphQL-Docs"
          >
            API
          </a>
        </li>
      </menu>

      <menu>
        <li>
          <a target="_blank" rel="noreferrer" href="https://discord.gg/TF428cr">
            Discord
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://twitter.com/AniListco"
          >
            Twitter
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.facebook.com/AniListco"
          >
            Facebook
          </a>
        </li>
        <li>
          <a target="_blank" rel="noreferrer" href="https://github.com/AniList">
            GitHub
          </a>
        </li>
      </menu>

      <menu>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://submission-manual.anilist.co"
          >
            Add Data
          </a>
        </li>
        <li>
          <Link href="#">Moderators</Link>
        </li>
        <li>
          <a href="mailto:contact@anilist.co">Contact</a>
        </li>
        <li>
          <Link href="#">Terms & Privacy</Link>
        </li>
        <li>
          <Link href="#">Site Map</Link>
        </li>
      </menu>
    </div>
  </footer>
);

export default Footer;
