"use client";
import { useEffect, useState } from "react";
import gsap from "gsap/dist/gsap";
import { useGSAP } from "@gsap/react";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
import { IoCloseSharp } from "react-icons/io5";
import { MdOutlineMenu } from 'react-icons/md';

/**
 * Funzione per creare un componente di navigazione mobile e desktop
 * La funzione crea un menu hamburger per dispositivi mobili e un menu a barra per dispositivi desktop
 * Il menu hamburger esce fuori da sinistra e si chiude premendo il pulsante x
 * Il menu a barra appare sopra la sezione "About" e si muove verso l'alto quando si scende nella pagina
 * @returns un componente JSX con il menu hamburger e il menu a barra
 */
export default function Navbar() {
  // Registra i plugin di GSAP
  gsap.registerPlugin(ScrollToPlugin, useGSAP);

  // Funzione per determinare se il dispositivo è mobile
  const mobile = () => {
    if (typeof window != undefined) {
      return (
        window.navigator.userAgent.includes("iPhone") ||
        window.navigator.userAgent.includes("Android") &&
        window.innerWidth < 769
      );
    }
  };

  // Stato per la visibilità della barra laterale
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const mm = gsap.matchMedia();

  // Funzione per il contenuto della barra laterale
  const contentSidebar = (ulStyle?: string, aStyle?: string) => {
    return (
      <>
        <div className="flex justify-between">
          <h1 className="flex text-2xl font-bold md:hidden">Menu</h1>
          <IoCloseSharp
            className="text-4xl md:hidden"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          />
        </div>
        <ul className={`${ulStyle} my-5 cursor-pointer text-lg md:fixed md:inset-x-0 md:top-0 md:z-30 md:mx-auto md:w-full max-w-screen-md md:border md:shadow md:backdrop-blur-lg md:rounded-full md:py-3 md:left-0`}>
          <li>
            <a
              onClick={() => {
                setIsSidebarOpen(false);
                gsap.to(window, { duration: 1, scrollTo: "a[id='about']" });
              }}
              className={`${aStyle} md:inline-block hover:text-indigo-500`}
            >
              About
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                setIsSidebarOpen(false);
                gsap.to(window, { duration: 1, scrollTo: "a[id='portfolio']" });
              }}
              className={`${aStyle} md:inline-block hover:text-indigo-500`}
            >
              Portfolio
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                setIsSidebarOpen(false);
                gsap.to(window, { duration: 1, scrollTo: "a[id='curriculum']" });
              }}
              className={`${aStyle} md:inline-block hover:text-indigo-500`}
            >
              Curriculum
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                setIsSidebarOpen(false);
                gsap.to(window, { duration: 1, scrollTo: "a[id='contatti']" });
              }}
              className={`${aStyle} md:inline-block hover:text-indigo-500`}
            >
              Contatti
            </a>
          </li>
        </ul>
      </>
    );
  };

  // useEffect per gestire l'apertura e chiusura della barra laterale
  useEffect(() => {
    const sidebar = document.getElementById("sidebar");
    const openSidebarButton = document.getElementById("open-sidebar");
    openSidebarButton!.addEventListener("click", (e) => {
      setIsSidebarOpen(!isSidebarOpen);
      e.stopPropagation();
      sidebar!.classList.toggle("-translate-x-full");
    });
  });

  // Configura l'animazione per la barra di navigazione
  useGSAP(() => {
    mm.add("(min-width: 769px)", () => {
      gsap.from(".navbar", {
        opacity: 0,
        duration: 2,
        ease: "slow(0.7,1,false)",
        y: -400,
        scrollTrigger: {
          trigger: '.navbar',
          start: 'top center',
          end: 'bottom center',
          toggleActions: 'play none none reverse',
        }
      });
    });
  });

  // Renderizza il componente Navbar
  return (
    <section>
      <div className="flex overflow-hidden">
        {/* <!-- Sidebar --> */}
        <div
          className={`absolute top-0 left-0 h-full w-full bg-gray-800 text-white transition-transform duration-300 ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } z-50`}
          id="sidebar"
        >
          {/* <!-- Sidebar Content --> */}
          <div className="p-4">{contentSidebar("", "block")}</div>
        </div>

        {/* <!-- Content --> */}
        <div className="flex-1 flex overflow-hidden">
          {/* <!-- Navbar --> */}
          <div className="container mx-auto">
            <div className="flex py-4 px-2">
              <button
                className="text-gray-500 hover:text-gray-600 md:hidden"
                id="open-sidebar"
              >
                <MdOutlineMenu className="w-6 h-6 text-white"/>
              </button>
              {window.innerWidth < 768 && mobile() ? (
                <h1 className="flex-1 justify-between text-center">
                  Raffaele Leonardo La Cerra
                </h1>
              ) : (
                contentSidebar(
                  "navbar flex flex-row gap-5 pt-9 w-screen justify-center",
                  ""
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
