import Link from "next/link";
import Image from "next/image";

import Stats from "../assets/stats.svg";
import Apps from "../assets/apps.svg";
import Social from "../assets/social.svg";
import Custom from "../assets/custom.svg";

const features = [
  {
    title: "Discover your obsessions",
    description:
      "What are your highest rated genres or most watched voice actors? Follow your watching habits over time with in-depth statistics.",
    image: Stats,
  },
  {
    title: "Bring AniList anywhere",
    description:
      "Keep track of your progress on-the-go with one of many AniList app across iOS, Android, macOS, and Windows.",
    image: Apps,
  },
  {
    title: "Join the conversation",
    description:
      "Share your thoughts with our thriving community, make friends, socialize, and receive recommendations.",
    image: Social,
  },
  {
    title: "Tweak it to your liking",
    description:
      "Customize your scoring system, title format, color scheme, and much more! Also, we have a dark mode.",
    image: Custom,
  },
];

const Hero = () => (
  <section className="relative mb-[4.4rem] w-full bg-slate-900 px-[1.88rem] py-[4.38rem] text-slate-100">
    <h1 className="mb-5 text-center text-[2rem] font-bold leading-[2.6rem]">
      The next-generation anime platform
    </h1>
    <p className="mx-auto max-w-[23.39rem] text-center text-[1.312rem] font-medium leading-[1.864rem] text-blue-300">
      Track, share, and discover your favorite anime and manga with AniList.
    </p>

    <ul className="mx-auto mb-[5.63rem] mt-[4.4rem] grid max-w-lg grid-flow-row gap-y-[3.2rem]">
      {features.map((feature) => (
        <li
          key={feature.title}
          className="grid grid-flow-col grid-rows-[min-content_min-content] gap-x-10"
        >
          <Image
            alt=""
            width={80}
            src={feature.image}
            aria-hidden
            className="row-span-full"
          />
          <h2 className="mb-2 text-[1.13rem] font-semibold leading-[1.465rem] text-slate-100">
            {feature.title}
          </h2>
          <p className="text-sm text-blue-300">{feature.description}</p>
        </li>
      ))}
    </ul>

    <Link
      href="#"
      // TODO: add custom shadow to tailwind.config.js
      className="absolute bottom-0 right-1/2 flex h-[3.07rem] w-[12.5rem] translate-x-1/2 translate-y-1/2 items-center justify-center rounded-full bg-blue-500 shadow-xl shadow-slate-400 transition-shadow duration-300 hover:shadow-2xl hover:shadow-sky-600"
    >
      <span className="text-[1.125rem] font-extrabold">Join Now</span>
      <div className="absolute right-2 flex h-9 w-9 items-center justify-center rounded-full bg-gray-300">
        <svg aria-hidden viewBox="0 0 320 512" className="w-3 text-blue-500">
          <path
            fill="currentColor"
            d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"
          />
        </svg>
      </div>
    </Link>
  </section>
);

export default Hero;
