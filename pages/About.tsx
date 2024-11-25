'use client'

import React from "react";
import Image from "next/image";

import gsap from "gsap/dist/gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";


import { FaStar, FaStarHalfStroke, FaRegStar } from "react-icons/fa6";

export default function About() {
    gsap.registerPlugin(ScrollTrigger);
  const mm = gsap.matchMedia();
  useGSAP(() => {
    mm.add("(min-width: 769px)", () => {
      gsap.from(".ptesto", {
        opacity: 0,
        duration: 1,
        ease: "slow(0.7,1,false)",
        x: -200,
        delay: 3,
      });

      gsap.from(".stack", {
        scrollTrigger: {
          trigger: ".stack",
          start: "top center",
          end: "bottom center",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        duration: 2,
        ease: "slow(0.7,1,false)",
        y: -200,
      });
    });
  });

  return (
    <section className="flex flex-col mx-5 md:mx-40">
      <h1 className="ptesto text-2xl md:text-4xl text-emerald-400">
        Piacere di conoscerti &#128075;
      </h1>
      <p className="ptesto text-xl md:text-3xl py-4">
        Sono Raffaele Leonardo La Cerra, un giovane Web Developer con tanta
        voglia di mettersi in gioco e con una forte passione per lo sviluppo di
        siti web. <br />
        Nel 2023 ho conseguito il diploma in Informatica presso l&apos;I.T.C.G
        Masullo-Theti. Alla fine del percorso scolastico, ho intrapreso vari
        percorsi di apprendimento autonomo imparando: ReactJS, NextJS, WordPress
        e TailwindCSS. <br /> Sono di natura un perfezionista, amo l&apos;ordine
        e <del>non me la prendo a male se il codice non funziona</del> nel tempo
        libero rimango aggiornato sulle ultime tecnologie
      </p>

      <h3 className="stack text-center gap-4 text-2xl md:text-4xl pt-10 pb-12 md:pt-40 md:pb-20">
        Il mio Stack Tecnologico
      </h3>
      <div className="stack grid grid-cols-3 md:grid-cols-4 gap-10 ">
        {[
          { name: "HTML", src: "/HTML5.svg", stars: 5 },
          { name: "CSS", src: "/css.svg", stars: 4.5 },
          { name: "JavaScript", src: "/javascript.svg", stars: 3.5 },
          { name: "React.JS", src: "/react.svg", stars: 3.5 },
          { name: "Next.JS", src: "/nextjs.svg", stars: 3 },
          { name: "TypeScript", src: "/typescript.svg", stars: 3 },
          { name: "TailwindCSS", src: "/tailwindcss.svg", stars: 4 },
          { name: "WordPress", src: "/wordpress.svg", stars: 3 },
          { name: "Java", src: "/Java.svg", stars: 2 },
          { name: "MaterialUI", src: "/materialui.svg", stars: 4 },
          { name: "animate.css", src: "/animatecss.png", stars: 5 },
          { name: "MySql", src: "/mysql.svg", stars: 4 },
          { name: "Microsoft SQL Server", src: "/microsoft-sql-server.svg", stars: 2 },
        ].map(({ name, src, stars: rating }) => (
          <div key={name} className="flex flex-col items-center">
            <Image src={src} width="60" height="60" alt={name} />
            <h4>{name}</h4>
            <div className="flex gap-0.5">
              {[...Array(Math.floor(rating))].map((_, i) => (
                <FaStar key={i} className="text-yellow-400" />
              ))}
              {rating % 1 !== 0 && (
                <FaStarHalfStroke className="text-yellow-400" />
              )}
              {[...Array(5 - Math.ceil(rating))].map((_, i) => (
                <FaRegStar key={i} className="text-yellow-400" />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
