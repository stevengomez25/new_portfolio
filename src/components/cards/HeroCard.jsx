import { useState, useEffect } from "react";
import imagen from '../images/heropic.png';
import js from '../icons/js.png';
import next from '../icons/next.png';
import node from '../icons/node.png';
import css from '../icons/css.png';
import postman from '../icons/postman.png';
import html from '../icons/html.png';
import vs from '../icons/vs.png';
import pandas from '../icons/pandas.png';
import api from '../icons/api.png';
import terminal from '../icons/terminal.png';
import python from '../icons/python.png';
import express from '../icons/express.png';
import json from '../icons/json.png';
import github from '../icons/github.png';
import whatsapp from '../icons/whatsapp.png';
import linkedin from '../icons/linkedin.png';
import gmail from '../icons/gmail.png';



const HeroCard = () => {
    return (
        <div id="about_me" className="h-dvh justify-end md:justify-normal w-dvw flex grow items-center md:p-3 flex-col-reverse md:flex-col text-white">
            <div className="flex flex-col justify-center md:h-full items-center md:p-3 md:flex-row">
                <div className="pl-1 w-full h-full md:w-2/3 flex flex-col justify-center">
                    <h1 className="text-3xl lg:text-6xl md:p-2">Steven Gomez</h1>
                    <h2 className="text-2xl lg:text-4xl md:p-2">The best <i><b><u>Professional</u></b></i> you can get!</h2>
                    <p className="text-xs lg:p-2 md:text-2xl">I'm a passionate and results-driven developer from Colombia, blending creativity with code to build web applications that are clean, functional, and user-focused. By day, I work as a BTS Support and Customer Care Specialist, where I solve technical problems and support clients with precision and empathy. By night (and any spare moment), I dive deep into full stack development.</p>
                    <h3 className="text-s md:text-3xl md:p-2">Contact me!</h3>
                    <div className="flex pl-2">
                        <a className='flex w-15 h-10 pr-3 ' target="blank" href="https://github.com/stevengomez25">
                            <img src={github} className="hover:scale-105 hover:bg-white rounded-full" alt="" />
                        </a>
                        <a className='flex w-15 h-10 pr-3 ' target="blank" href="https://wa.link/yamu6s">
                            <img src={whatsapp} className="hover:scale-105 hover:bg-white rounded-full" alt="" />
                        </a>
                        <a className='flex w-15 h-10 pr-3 ' target="blank" href="https://www.linkedin.com/in/steven-gómez-49aa87236">
                            <img src={linkedin} className="hover:scale-105 hover:bg-white rounded-full" alt="" />
                        </a>
                        <a className='flex w-15 h-10 pr-3 ' href="https://mail.google.com/mail/?view=cm&fs=1&to=stevengdeveloper@gmail.com&su=Hiring%20Dev%20Services%20-%20JOB%20OFFER&body=Dear+Steven%2C%0D%0A%0D%0AI+hope+this+email+finds+you+well%2C+I+would+like+to+hire+you+for+an+amazing+and+powerful+project%21%0D%0A%0D%0APlease%2C+reply+to+this+email+if+you+would+like+more+details.%0D%0A%0D%0AThank+you." target="blank">
                            <img src={gmail} className="hover:scale-105 hover:bg-white rounded-full" alt="" />
                        </a>
                    </div>
                    <h1 className="text-md md:text-3xl md:p-2">"Not everyone can become a great artist, but a great artist can come from anywhere."</h1>
                    <h1 className="text-xs md:text-2xl md:pl-2"><i>-Anton Ego</i></h1>
                </div>
                <div className="w-1/2 md:w-1/3 overflow-hidden shadow-2xl  animate-atommorph">
                    <img src={imagen} alt="heropic" className="w-full h-full  object-cover"/>
                </div>
            </div>
            <div className="mt-2 md:mt-0 bg-gradient-to-r from-transparent via-gray-400 to-transparent rounded-full w-full md:h-20 overflow-hidden flex items-center">
                <div className="flex w-full gap-10 will-change-transform
      animate-[marquee_20s_linear_infinite]
      group-hover:[animation-play-state:paused]
      motion-reduce:animate-none">
                    <img src={js} className="h-10 md:h-18 bg-white hover:scale-105 w-auto rounded-full" alt="js" />
                    <img src={next} className="h-10 md:h-18 bg-white hover:scale-105 w-auto rounded-full" alt="next" />
                    <img src={node} className="h-10 md:h-18 bg-white hover:scale-105 w-auto rounded-full" alt="node" />
                    <img src={postman} className="h-10 md:h-18 bg-white hover:scale-105 w-auto rounded-full" alt="postman" />
                    <img src={css} className="h-10 md:h-18 bg-white hover:scale-105 w-auto rounded-full" alt="css" />
                    <img src={html} className="h-10 md:h-18 bg-white hover:scale-105 w-auto rounded-full" alt="html" />
                    <img src={vs} className="h-10 md:h-18 bg-white hover:scale-105 w-auto rounded-full" alt="vs" />
                    <img src={pandas} className="h-10 md:h-18 bg-white hover:scale-105 w-auto rounded-full" alt="pandas" />
                    <img src={api} className="h-10 md:h-18 bg-white hover:scale-105 w-auto rounded-full" alt="api" />
                    <img src={terminal} className="h-10 md:h-18 bg-white hover:scale-105 w-auto rounded-full" alt="terminal" />
                    <img src={json} className="h-10 md:h-18 bg-white hover:scale-105 w-auto rounded-full" alt="json" />
                    <img src={python} className="h-10 md:h-18 bg-white hover:scale-105 w-auto rounded-full" alt="python" />
                    <img src={express} className="h-10 md:h-18 bg-white hover:scale-105 w-auto rounded-full" alt="express" />

                    {/* duplicate icons for seamless loop */}
                    <img src={js} className="h-10 md:h-18 bg-white hover:scale-105 w-auto rounded-full" alt="js" />
                    <img src={next} className="h-10 md:h-18 bg-white hover:scale-105 w-auto rounded-full" alt="next" />
                    <img src={node} className="h-10 md:h-18 bg-white hover:scale-105 w-auto rounded-full" alt="node" />
                    <img src={postman} className="h-10 md:h-18 bg-white hover:scale-105 w-auto rounded-full" alt="postman" />
                    <img src={css} className="h-10 md:h-18 bg-white hover:scale-105 w-auto rounded-full" alt="css" />
                    <img src={html} className="h-10 md:h-18 bg-white hover:scale-105 w-auto rounded-full" alt="html" />
                    <img src={vs} className="h-10 md:h-18 bg-white hover:scale-105 w-auto rounded-full" alt="vs" />
                    <img src={pandas} className="h-10 md:h-18 bg-white hover:scale-105 w-auto rounded-full" alt="pandas" />
                    <img src={api} className="h-10 md:h-18 bg-white hover:scale-105 w-auto rounded-full" alt="api" />
                    <img src={terminal} className="h-10 md:h-18 bg-white hover:scale-105 w-auto rounded-full" alt="terminal" />
                    <img src={json} className="h-10 md:h-18 bg-white hover:scale-105 w-auto rounded-full" alt="json" />
                    <img src={python} className="h-10 md:h-18 bg-white hover:scale-105 w-auto rounded-full" alt="python" />
                    <img src={express} className="h-10 md:h-18 bg-white hover:scale-105 w-auto rounded-full" alt="express" />
                </div>
            </div>

        </div>
    )
};


export default HeroCard;