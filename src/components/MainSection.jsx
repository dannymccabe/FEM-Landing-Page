import React from 'react'
import mobile from "../images/image-hero-mobile.png";
import desktop from "../images/image-hero-desktop.png";
import audiophile from "../images/client-audiophile.svg";
import databiz from "../images/client-databiz.svg";
import maker from "../images/client-maker.svg";
import meet from "../images/client-meet.svg";

const MainSection = () => {
  return (
    <section className="flex flex-col-reverse py-20 md:grid md:gap-10 md:grid-cols-2 md:place-items-center max-w-4xl lg:max-w-5xl md:mx-auto">
        <article className="text-center md:text-left px-5 xl:px-0 mt-10 md:mt-0">
          <h1 className="font-bold text-4xl lg:text-7xl mb-5">
            Make remote work
          </h1>
          <p className="mb-5">
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar.
          </p>
          <button className="bg-black rounded-lg shadow text-white font-bold hover:opacity-75 transition-all duraction-150 pt-3 pb-2 px-6 cursor-pointer">
            Learn More
          </button>
          <ul className="grid grid-cols-4 gap-1 mt-10 place-items-center md:place-items-start">
            <li>
              <img src={databiz} alt="" className="w-16 md:w-24" />
            </li>
            <li>
              <img src={audiophile} alt="" className="w-16 md:w-24" />
            </li>
            <li>
              <img src={meet} alt="" className="w-16 md:w-24" />
            </li>
            <li>
              <img src={maker} alt="" className="w-16 md:w-24" />
            </li>
          </ul>
        </article>
        <article>
          <picture>
            <source media="(min-width: 768px)" srcSet={desktop} />
            <img src={mobile} className="w-full" />
          </picture>
        </article>
      </section>
  )
}

export default MainSection