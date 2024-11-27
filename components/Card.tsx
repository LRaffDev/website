'use client'

import { PortType } from "@/types/porttype";
import Image from 'next/image';

/**
 * Componente che rappresenta un progetto all'interno della pagina Portfolio.
 * @param {{ portfolio: PortType }} props - Oggetto che contiene le informazioni del progetto
 * @returns {JSX.Element} Componente JSX che rappresenta il progetto
 */
const Card = ({ portfolio }: { portfolio: PortType }) => (
    <div
        key={portfolio.id}
        className='border border-solid rounded-lg cursor-pointer p-3 items-center'
        onClick={() => window.open(portfolio.url_progetto)}
    >
        <h1 className='text-center text-2xl'>{portfolio.nome}</h1>
        <Image
            src={portfolio.url_img}
            className='py-4 md:w-[600px] md:h-[300px] w-[200px] h-[140px]'
            alt={portfolio.nome}
            width={600}
            height={300}
        />
        <h3 className='text-center text-xl'>Stack: {portfolio.stack}</h3>
    </div>
);

export default Card;
