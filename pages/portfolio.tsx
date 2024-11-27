
'use client';

import supabase from '@/lib/client';
import React, { useState, useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap/dist/gsap';
import { PortType } from '@/types/porttype';
import Card from '../components/Card';

/**
 * Componente per la sezione Portfolio.
 *
 * Questo componente recupera i dati del portfolio dal database e li visualizza
 * come una griglia di progetti. Utilizza GSAP per configurare le animazioni di
 * scorrimento per migliorare l'esperienza visiva.
 *
 * @returns {JSX.Element} Componente per la sezione Portfolio
 */
export default function Portfolio() {
  // Registra i plugin di GSAP
  gsap.registerPlugin(useGSAP);

  // Stato per memorizzare i dati del portfolio
  const [portfolio, setPortfolio] = useState<PortType[]>([]);
  const mm = gsap.matchMedia();

  // useEffect per recuperare dati dal database
  useEffect(() => {
    const fetcher = async () => {
      const { data, error } = await supabase.from('portfolio').select('*');
      if (error) {
        console.error('ERRORE', error);
      } else {
        setPortfolio(data);
      }
    }
    fetcher();
  }, []);

  // Configura l'animazione di scorrimento per la sezione portfolio
  useGSAP(() => {
    mm.add("(min-width: 769px)", () => {
      gsap.from('.portfolio', {
        scrollTrigger: {
          trigger: ".portfolio",
          start: "start center",
          end: "bottom center",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        duration: 2,
        ease: "slow(0.7,1,false)",
        x: -400,
      });
    });
  });

  // Renderizza la sezione portfolio
  return (
    <section className='portfolio md:pb-60 md:pt-24 py-8 items-center flex flex-col'>
      {/* Titolo della sezione */}
      <p className='my-7 text-3xl flex justify-center text-emerald-400'>I Miei Progetti</p>
      {/* Descrizione della sezione */}
      <p className='text-xl flex justify-center pb-6'>Buona parte del mio tempo lo passo a creare nuovi progetti e sperimentare nuovi modi di sviluppo</p>
      {/* Griglia di progetti */}
      <div className='grid grid-cols-2 gap-4 items-center'>
        {portfolio.map((progetto) => <Card portfolio={progetto} key={progetto.id} />)}
      </div>
    </section>
  );
}
