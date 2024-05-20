import { useEffect, useState } from 'react'

import { FaGithub, FaPhone } from 'react-icons/fa6'
import { MdAlternateEmail } from 'react-icons/md'
import { FaFileDownload, FaCheckCircle } from "react-icons/fa";


export default function Curriculum(): JSX.Element {
    useEffect(() => {
        document.title ='Curriculum Vitae'
    }
    )

    const [buttonColor, setButtonColor] = useState('bg-blue-700')
    const [buttonHoverColor, setButtonHoverColor] = useState('hover:bg-blue-900')
    const [buttonText, setButtonText] = useState('scarica il CV!')
    const [Icon , setIcon] = useState(<FaFileDownload className='fill-current w-4 h-4 mr-2 bg-transparent'/>)

    const handleButton = () => {
        setButtonColor('bg-green-700')
        setButtonHoverColor('hover:bg-green-900')
        setIcon(<FaCheckCircle className='fill-current w-4 h-4 mr-2 bg-transparent' />)
        setButtonText('CV Scaricato!')
        window.location.href = 'https://dub.sh/raffaelelacerra-cv'
        setTimeout(() => {
            setButtonColor('bg-blue-700')
            setIcon(<FaFileDownload className='fill-current w-4 h-4 mr-2 bg-transparent'/>)
            setButtonHoverColor('hover:bg-blue-900')
            setButtonText('Scarica il CV!')
        }, 3000)
    }
    return (
        <main>
            <div className='flex px-4 flex-col'>
                <h1 className='flex justify-center text-3xl sm:text-5xl pt-5 pb-3 '>Curriculum Vitae &#128221;</h1>

                {/* TITOLO */}
                <div className='flex flex-col text-xl sm:text-3xl py-4 items-center'>
                    <h2> RAFFAELE LEONARDO</h2>
                    <h2>LA CERRA</h2>
                </div>

                { /* SOCIALS */ }
                <div className='flex flex-col items-center justify-center gap-2 sm:flex-row'>
                    <MdAlternateEmail />
                    <a href='mailto:raffaele.la.cerra@outlook.it?subject=Offerta%20di%20lavoro&body=Egregio%20Sig.%20Raffaele%20Leonardo%20La%20Cerra%0D%0Asiamo%20interessati%20ad%20assumerla%20come%20Web%20Developer%20presso%20la%20nostra%20Stimata%20azienda%20%5Binserire%20nome%20azienda%5D'>raffaele.la.cerra@outlook.it</a>

                    <FaPhone />
                    <a href='tel:3519525599'>351 952 5599</a>

                    <FaGithub />
                    <a target='_blank' href='https://github.com/LRaffDev'>LRaffDev</a>
                </div>

                {/* ISTRUZIONE */}
                <div className="inline-flex items-center justify-center w-full px-4">
                        <hr className="w-screen h-px my-8  border-0 bg-gray-700" />
                        <span className="absolute px-3 font-medium text-white -translate-x-1/2 left-1/2 ">Istruzione</span>
                </div>

                <div className='flex items-start flex-col px-4'>
                    <h5>I.T.C.G Masullo - Theti</h5>
                    <i>Diploma di Perito Informatico </i>
                </div>

                { /* ESPERIENZE LAVORATIVE */}
                <div className="inline-flex items-center justify-center w-full px-4">
                        <hr className="w-screen h-px my-8  border-0 bg-gray-700" />
                        <span className="absolute px-3 font-medium text-white -translate-x-1/2 left-1/2 ">Esperienze Lavorative</span>
                </div>

                <div className='flex justify-between'>
                    <h6>CE.FOR.M SRL</h6>
                    <h5>2023 - 2024</h5>
                </div>

                <h6 className='pb-1'>Responsabile Help Desk</h6>
                <p>Ho svolto la mansione di Help Desk presso CE.FOR.M SRL, specializzata nella fornitura di soluzioni ERP per la gestione aziendale. Mi sono occupato di</p>
                <p>Idnetificare e risolvere i problemi tecnici degli utenti, seguendo procedure di troubleshooting e utilizzando strumenti di diagnostica appropriati.</p>
                <p>Utilizzato il programma Microsoft SQL Server per eseguire query e fornire supporto specifico sulla gestione dei dati all&apos;interno del programma ERP</p>

                {/* SKILLS */}
                <div className="inline-flex items-center justify-center w-full px-4">
                        <hr className="w-screen h-px my-8  border-0 bg-gray-700" />
                        <span className="absolute px-3 font-medium text-white -translate-x-1/2 left-1/2 ">Skills</span>
                </div>

                <h6 className='font-bold'>Competenza in diversi linguaggi di programmazione</h6>
                <p className='pb-2'>La mia formazione accademica mi ha fornito una solida base nelle lingua di programmazione, quali HTML, CSS, JavaScript, Java e del framework ReactJS. Attraverso un percorso di studio autonomo, ho approfondito le mie competenze acquisendo familiarit&aacute; con il cms WordPress</p>

                <h6 className='font-bold'>Sete di conoscenza</h6>
                <p className='pb-2'>Sono un individuo proattivo e orientato all&apos;apprendimento continuo. La mia attitudine positiva e la volont&aacute; di affrontare nuove sfide mi rendono sempre pronto ad acquisire nuove competenze</p>

                <h6 className='font-bold'>Lavoro di Squadra</h6>
                <p className='pb-2'>Mi considero un elemento collaborativo e socievole, capace di lavorare efficacemente all&apos;interno di un team</p>

                <h6 className='font-bold'>Capacit&aacute; di Problem Solving</h6>
                <p className='pb-2'>Sono abile nel risolvere problemi in modo efficace e efficiente, valutando le situazioni in modo critico e proponendo soluzioni innovative. La mia attitudine organizzativa mi consente di gestire progetti in modo strutturato, garantendo il rispetto delle scadenze e il raggiungimento degli obiettivi prefissati</p>

                {/* CERTIFICAZIONI */}
                <div className="inline-flex items-center justify-center w-full px-4">
                        <hr className="w-screen h-px my-8  border-0 bg-gray-700" />
                        <span className="absolute px-3 font-medium text-white -translate-x-1/2 left-1/2 ">Certificazioni</span>
                </div>

                <p>2018 Cambridge Assessment English Flyers Level</p>
                <p>2018 European Informatics PASSport Moduli 7 User</p>
            </div>
           

            <div className='flex justify-center pt-5'>
                <button type='button' className={`${buttonHoverColor} font-bold py-2 px-4 rounded inline-flex items-center ${buttonColor}`} onClick={handleButton}>
                    {Icon}
                    <span className='bg-transparent'>{buttonText}</span>
                </button>
            </div>
        </main>
    )
}