// src/components/hero.tsx
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section
      id="Home"
      className="bg-[url('/img/hero-img.png')] sm:bg-none sm:bg-black bg-cover relative"
    >
      {/* Background pattern image - shown on lg screens */}
      <img
        src="./bg-pattern.png"
        alt="logo"
        className="absolute h-screen hidden lg:block"
      />

            {/* New pattern shown only on mobile screens (below md) */}
      <img
        src="./bg-pattern-mobile.png"
        alt="mobile pattern"
        className="absolute h-screen block md:hidden"
      />

      <div className="flex flex-col pt-20 sm:pt-0 sm:justify-center text-white h-screen relative z-10">
        {/* Title and subtitle */}
        <div className="flex flex-col pl-10">
          <h2 className="text-[#9BEC00] font-extrabold text-[40px]">Atha's</h2>
          <h1 className="text-[#9BEC00] font-extrabold text-[96px] leading-4 pt-5 line">
            PORT
          </h1>
          <h1 className="text-[#9BEC00] font-extrabold text-[96px]">FOLIO</h1>
          <h3 className="flex text-[24px]">
            life is
            <p className="px-1 font-bold text-[#9BEC00]"> NOT </p>
            black and white
          </h3>
        </div>

        {/* Description text – hidden on small screens */}
        <div className="max-w-[800px] pl-10 pt-4 hidden md:block">
          <p className="text-[24px]">
            I am a creative and ambitious student with a strong passion for game
            development. I dream of becoming a game developer and am committed to
            turning that dream into reality. I am eager to learn, grow, and push my
            limits, always striving to improve my skills. With a dedication to
            hard work and a love for creative expression, I am ready to take on
            challenges and contribute to innovative projects in the gaming industry.
          </p>
        </div>

        {/* Contact Me link */}
        <div className="pl-10 pt-8 text-[24px] font-bold">
          <a href="#Contact" className="border-b-4 border-b-[#9BEC00]">
            Contact Me
          </a>
        </div>

        {/* Hero image – shown on small screens and up */}
        <img
          src="./hero-img.png"
          alt="hero-img"
          className="z-0 hidden sm:block h-screen aspect-[1/2] object-cover absolute sm:right-0"
        />
      </div>
    </section>
  );
};

export default Hero;
