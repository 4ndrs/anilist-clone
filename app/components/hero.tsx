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
  <section className="mb-[4.4rem] w-full bg-slate-900 px-10 pb-[1.9rem] pt-[4.4rem] text-slate-100">
    <h1 className="mb-5 text-center text-[2rem] font-bold leading-[2.6rem]">
      The next-generation anime platform
    </h1>
    <p className="mx-auto max-w-[23.39rem] text-center text-[1.312rem] font-medium leading-[1.864rem] text-blue-300">
      Track, share, and discover your favorite anime and manga with AniList.
    </p>

    <ul className="mx-auto mb-[5.63rem] mt-[4.4rem] grid max-w-lg grid-flow-row gap-y-14">
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

    <Link href="#">Join Now</Link>
  </section>
);

export default Hero;
