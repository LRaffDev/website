"use client";

import Image from "next/image";
import gsap from "gsap/dist/gsap";
import { useGSAP } from "@gsap/react";

import About from "../pages/About";
import Curriculum from "../pages/Curriculum";
import Contatti from "../pages/Contatti";
import Portfolio from "../pages/portfolio";

/**
 * Componente principale dell'applicazione, contiene la sezione di presentazione
 * con un'animazione che fa apparire il mio nome e la mia professione.
 * Inoltre contiene i link per saltare ai vari componenti della pagina.
 *
 * @returns {JSX.Element} Componente principale dell'applicazione
 */
export default function Home() {
  const mm = gsap.matchMedia();

  // Registra i plugin di GSAP
  gsap.registerPlugin(useGSAP);

  // Configura l'animazione per la sezione di presentazione
  useGSAP(() => {
    mm.add("(min-width: 769px)", () => {
      // Anima l'opacit  della sezione di presentazione
      gsap.from(".presentazione", {
        opacity: 0,
        duration: 1,
        ease: "slow(0.7,1,false)",
        y: -150,
      });

      // Anima l'opacit  dell'immagine
      gsap.from(".immagine", {
        opacity: 0,
        duration: 1,
        ease: "slow(0.7,1,false)",
        delay: 1.5,
        x: 200,
      });
    });
  });


  return (
    <section className="flex flex-col justify-center">
      <div className="flex w-screen justify-center items-center md:flex-row flex-col md:px-5">
        {/* Sezione di presentazione */}
        <div className="presentazione flex flex-col">
          <h1 className="text-xl text-center md:text-3xl lg:text-6xl text-white md:ml-10 lg:ml-[0px]">
            Ciao!, sono Raffaele <br />
            Leonardo La Cerra
          </h1>
          <h2
            className="ml-[130px] lg:ml-[0px] relative w-[max-content] font-mono
         before:absolute before:inset-0 before:animate-typewriter before:bg-[#0a0a0a]
          after:absolute after:inset-0 after:w-[0.125em] after:animate-caret after:bg-white text-lg md:text-xl text-emerald-500 lg:text-4xl"
          >
            Junior Front End Web Developer
          </h2>
        </div>
        <Image
          src="/Wave.png"
          width="512"
          height="512"
          alt="emoji che saluta"
          className="immagine md:mr-10"
        />
      </div>
      {/* Link per saltare ai vari componenti della pagina */}
      <a id="about">
        <About />
      </a>

      <a id="portfolio">
        <Portfolio />
      </a>

      <a id="curriculum">
        <Curriculum />
      </a>

      <a id="contatti">
        <Contatti />
      </a>
    </section>
  );
}
