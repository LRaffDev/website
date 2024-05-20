import AvatarImg from '../assets/avatar.png'
import HtmlImg from '../assets/html.png'
import CssImg from '../assets/css.png'
import JavaScriptImg from '../assets/javascript.png'
import JavaImg from '../assets/java.png'
import WordpressImg from '../assets/wordpress.png'
import ReactImg from '../assets/react.png'
import TailwindImg from '../assets/tailwind.png'
import MaterialImg from '../assets/materialui.png'

import '../index.css'

export default function About(): JSX.Element {

    return (
        <main>
            <h1 className='mt-4 text-6xl flex justify-center'>Ciao! &#128075;</h1>
            <div className='flex flex-col mx-5 my-7 justify-center sm:flex-row'>
                    
                    <img className='flex items-center sm:mt-3 object-scale-down' src={AvatarImg} alt='My Face' width='150px' height='150px' />
                    <div className='text-xl mx-3 my-4'>
                        <p>Benvenuti nel mio sito! sono Raffaele Leonardo La Cerra, un giovane Napoletano con una forte passione per lo sviluppo di siti web.</p>

                        <p>Ho passato interi anni a padroneggiare i migliori strumenti di sviluppo imparando ReactJS, tailwindCSS e WordPress.</p>

                        <p>Sono un perfezionista, per questo, passo la maggior parte dei miei tempi ad espandere il mio bagaglio di conoscenze.</p>

                        <p>Nel tempo libero mi godo qualche meme sui gattini. Se mi trovate interessante non esitate a contattarmi!</p>

                    </div>
            </div>

            <div className='sm:flex sm:flex-row sm:justify-center grid justify-items-center gap-10 grid-cols-3 mx-3'>
                
                <div className="group cursor-pointer relative inline-block text-center"><img src={HtmlImg} alt='HTML Logo' width='60px' height='60px' />
                    <div className="opacity-0 w-19 bg-slate-700 text-white text-center text-xs rounded-lg py-2 absolute group-hover:opacity-100 bottom-full -ml-0.5 px-3 pointer-events-none">
                        HTML5
                    </div>
                </div>

                <div className="group cursor-pointer relative inline-block text-center"><img src={CssImg} alt='CSS Logo' width='60px' height='60px' />
                    <div className="opacity-0 w-19 bg-slate-700 text-white text-center text-xs rounded-lg py-2 absolute group-hover:opacity-100 bottom-full ml-0.5 px-3 pointer-events-none">
                        CSS3
                    </div>
                </div>

                <div className="group cursor-pointer relative inline-block text-center"><img src={JavaScriptImg} alt='JavaScript Logo' width='60px' height='60px'/>
                    <div className="opacity-0 w-19 bg-slate-700  text-white text-center text-xs rounded-lg py-2 absolute group-hover:opacity-100 bottom-full -ml-3 px-3 pointer-events-none">
                        JavaScript
                    </div>
                </div>

                <div className="group cursor-pointer relative inline-block text-center"><img src={JavaImg} alt='Java Logo' width='60px' height='60px'/>
                    <div className="opacity-0 w-19 bg-slate-700 text-white text-center text-xs rounded-lg py-2 absolute  group-hover:opacity-100 bottom-full ml-1.5 px-3 pointer-events-none">
                        Java
                    </div>
                </div>


                <div className="group cursor-pointer relative inline-block text-center"><img src={WordpressImg} alt='WordPress Logo' width='60px' height='60px'/>
                    <div className="opacity-0 w-19 bg-slate-700 text-white text-center text-xs rounded-lg py-2 absolute group-hover:opacity-100 bottom-full -ml-3 px-3 pointer-events-none">
                        WordPress
                    </div>
                </div>

                <div className="group cursor-pointer relative inline-block text-center"><img src={ReactImg} alt='React Logo' width='60px' height='60px'/>
                    <div className="opacity-0 w-19 bg-slate-700 text-white text-center text-xs rounded-lg py-2 absolute group-hover:opacity-100 bottom-full -ml-1 px-3 pointer-events-none">
                        ReactJS
                    </div>
                </div>

                <div className="group cursor-pointer relative inline-block text-center"><img src={TailwindImg} alt='Tailwind Logo' width='60px' height='60px'/>
                    <div className="opacity-0 w-19 bg-slate-700 text-white text-center text-xs rounded-lg py-2 absolute group-hover:opacity-100 bottom-full -ml-3.5 px-3 pointer-events-none">
                        TailwindCSS
                    </div>
                </div>

                <div className="group cursor-pointer relative inline-block text-center"><img src={MaterialImg} alt='MaterialUI Logo' width='60px' height='60px'/>
                    <div className="opacity-0 w-19 bg-slate-700 text-white text-center text-xs rounded-lg py-2 absolute group-hover:opacity-100 bottom-full -ml-2.5 px-3 pointer-events-none">
                        MaterialUI
                    </div>
                </div>

            </div>

        </main>
    )
}