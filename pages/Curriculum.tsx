'use client'

import React from "react";
import Image from "next/image";

import gsap from "gsap/dist/gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import supabase from '@/lib/client'


/**
 * Componente per la sezione Curriculum
 *
 * Questo componente visualizza una sezione con un titolo,
 * un testo descrittivo e un pulsante per aprire il curriculum vitae
 * in formato PDF. Utilizza GSAP per animazioni di scorrimento.
 *
 * @returns {JSX.Element} Componente per la sezione Curriculum
 */
export default function Curriculum() {
  // Registra i plugin di GSAP
  gsap.registerPlugin(ScrollTrigger, useGSAP);

  /**
   * Funzione asincrona per ottenere l'URL pubblico del curriculum vitae
   * e aprirlo in una nuova scheda del browser.
   */
  const downloadCv = async () => {
    const { data } = await supabase.storage.from('curriculum').getPublicUrl('cv.pdf');
    window.open(data.publicUrl, '_blank');
  }

  const mm = gsap.matchMedia();

  // Configura l'animazione di scorrimento per la sezione curriculum
  useGSAP(() => {
    mm.add("(min-width: 769px)", () => {
      gsap.from(".curriculum", {
        scrollTrigger: {
          trigger: ".curriculum",
          start: "top center",
          end: "bottom center",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        duration: 2,
        ease: "slow(0.7,1,false)",
        x: -600,
      });
    });
  });

  return (
    <section className="curriculum flex items-center justify-center md:pb-40 md:pt-60 py-12">
      <div className="px-3">
        {/* Titolo della sezione */}
        <h1 className="text-emerald-400 md:text-4xl text-2xl py-4">
          Sono stato convincente?
        </h1>
        {/* Testo descrittivo */}
        <p className="md:text-3xl text-xl pb-5">
          (spero di si) ad ogni modo per scoprire le mie esperienze lavorative{" "}
          <br />
          puoi trovare il mio curriculum
        </p>
        {/* Pulsante per aprire il curriculum */}
        <button className="relative inline-flex items-center justify-start px-5 py-3 overflow-hidden font-bold rounded-lg group" onClick={() => downloadCv()}>
          <span className="w-32 h-32 rotate-45 translate-x-14 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>{" "}
          {/* Sfondo animazione */}
          <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-2"></span>
          {/* scritta Pulsante */}
          <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900">
            Cliccando qui :D
          </span>
          <span className="absolute inset-0 border-2 border-white rounded-lg"></span>{" "}
          {/* Pulsante statico*/}
        </button>
      </div>
      {/* Immagine di un computer */}
      <Image
        src="/pc.png"
        width="512"
        height="512"
        alt="me in pc"
        className="hidden md:block"
      />
    </section>
  );
}
