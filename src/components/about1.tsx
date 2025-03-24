import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

import { AnimatedTitle } from "./animated-title";

gsap.registerPlugin(ScrollTrigger);

export const About = () => {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });

    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });
  });

  return (
    <div id="about" className="min-h-screen w-screen">
      <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
        <p className="font-general text-sm uppercase md:text-[10px]">
        </p>

        <AnimatedTitle containerClass="mt-5 !text-black text-center">
          {
            "<b>Discover</b> <b>the</b> <b>world</b> <b>of</b> <br /><b>Internet</b> <b>of</b> <b>things</b>"

          }
        </AnimatedTitle>

        <div className="about-subtext">
          {/*<p>The Game of Games begins-your life, now an epic MMORPG</p>
          <p>Zentry unites every player from countless games and platforms</p>*/}
        </div>
      </div>

      <div className="h-dvh w-screen" id="clip">
        <div className="mask-clip-path about-image">
          <img
            src="/img/about1.jpg"
            alt="Background"
            className="absolute left-0 top-0 size-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};


