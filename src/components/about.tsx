// src/components/about.tsx
import React from 'react';

const About: React.FC = () => {
  return (
    <section
      id="About"
      className="flex flex-col items-center bg-black text-white"
    >
      <div>
        <div>
          <h1 className="font-extrabold border-b-4 text-6xl border-b-[#9BEC00] pt-12 sm:hidden">
            About Me
          </h1>
        </div>
      </div>

      <div className="py-10 mx-6 max-w-[370px] sm:max-w-none flex flex-col sm:flex-row sm:mx-0 sm:w-full sm:py-0">
        <div className="flex-1">
          <img
            className="rounded-t-3xl sm:rounded-none sm:h-full object-cover"
            src="./atha-about.png"
            alt="Athallahariq M. H"
          />
        </div>

        <div className="px-6 py-4 bg-[#393939] flex flex-col rounded-b-3xl flex-1 grow-[2] sm:rounded-none justify-center">
          <h2 className="font-bold text-[24px] lg:text-[32px]">Hello World I'm</h2>
          <h1 className="text-[32px] font-bold text-[#9BEC00] lg:text-[48px]">
            Athallahariq M. H
          </h1>
          <p className="max-w-[300px] text-lg sm:max-w-[600px] lg:text-2xl">
            I'm a passionate student blending art, web design, and game development with a love for coding.
            I strive to create immersive digital experiences and push the boundaries of creativity and technology.
            Join me on my journey as I explore and innovate in the world of digital design and development.
          </p>
          <div className="lg:mt-5">
            <a
              className="text-2xl sm:pt-5 font-bold border-b-4 border-b-[#9BEC00] cursor-pointer"
              id="cvBtn"
              href="/path-to-your-cv.pdf" // Update this URL to your actual CV path
              target="_blank"
              rel="noopener noreferrer"
            >
              View CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
