import { useEffect } from 'react'
import { IconContext } from 'react-icons';

import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { MdAlternateEmail } from "react-icons/md";


export default function Contatti(): JSX.Element {
    useEffect(() => {
        document.title = 'Contatti'
    })

    const style = 'flex gap-2 items-center';
    return (
        <main>
            <h2 className='flex py-10 justify-center text-3xl sm:text-4xl'>Chi cerca, trova! &#128064;</h2>
            <div className='flex flex-row justify-center'>
                
                <IconContext.Provider value={ {size: '19px'} }>
                    <div className='flex flex-col'>
                        <div className={style}>
                            <FaLinkedinIn />
                            <a href='https://linkedin.com/in/lc-raffaele' target='_blank'>LC-Raffaele</a>
                        </div>

                        <div className={style}>
                            <MdAlternateEmail />
                            <a href='mailto:raffaele.la.cerra@outlook.it?subject=Offerta%20di%20lavoro&body=Egregio%20Sig.%20Raffaele%20Leonardo%20La%20Cerra%0D%0Asiamo%20interessati%20ad%20assumerla%20come%20Web%20Developer%20presso%20la%20nostra%20Stimata%20azienda%20%5Binserire%20nome%20azienda%5D'>raffaele.la.cerra@outlook.it</a>
                        </div>

                        <div className={style}>
                            <FaPhone />
                            <a href='tel:3519525599'> 351 952 5599</a>
                        </div>

                        <div className={style}>
                            <FaGithub />
                            <a href='https://github.com/LRaffDev' target='_blank'>LRaffDev</a>
                        </div>
                    </div>

                </IconContext.Provider>
            </div>      
        </main>
    )
}