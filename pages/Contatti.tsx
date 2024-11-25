'use client'

import React from "react";
import Image from "next/image";
import { FaLinkedinIn, FaGithub } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import gsap from "gsap/dist/gsap";
import { useGSAP } from "@gsap/react";
export default function Contatti() {
    gsap.registerPlugin(ScrollTrigger, useGSAP);
  const mm = gsap.matchMedia();
  useGSAP(() => {
    mm.add("(min-width: 769px)", () => {
      gsap.from(".contatti", {
        scrollTrigger: {
          trigger: ".contatti",
          start: "top center",
          end: "center center",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        duration: 2,
        ease: "slow(0.7,1,false)",
        x: 400,
      });
    });
  });
  return (
    <section className="contatti flex items-center justify-center md:py-52 py-4">
      <Image
        src="/telephone.png"
        width="256"
        height="256"
        alt="telefono"
        className="hidden md:block"
      />
      <div className="pl-16">
        <h1 className="text-emerald-400 md:text-4xl text-2xl pb-3">
          Rimaniamo in Contatto
        </h1>
        <p className="text-xl md:text-3xl">
          Puoi contattarmi mandandomi un email o collegandoti alla mia rete su
          LinkedIn
        </p>
        <div className="flex flex-col items-start md:text-3xl text-xl pt-4">
          <button
            type="button"
            onClick={() => {
              window.open("https://linkedin.com/in/lc-raffaele", "_blank");
            }}
            className="flex gap-2 items-center"
          >
            <FaLinkedinIn />
            LC-Raffaele
          </button>
          <button
            onClick={() => {
              window.open("https://github.com/LRaffDev", "_blank");
            }}
            className="flex gap-2 items-center"
          >
            <FaGithub />
            LRaffDev
          </button>
          <button onClick={() => {}} className="flex gap-2 items-center">
            <MdEmail />
            raffaele.la.cerra@outlook.it
          </button>
        </div>
      </div>
    </section>
  );
}
