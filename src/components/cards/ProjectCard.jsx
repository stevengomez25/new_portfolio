
const ProjectCard = () => {
    return (
        <div id="projects" className="h-dvh justify-end md:justify-normal w-dvw flex grow items-center md:p-3 flex-col-reverse md:flex-col text-white">
            <div className="h-1/5 w-full  bg-white text-black flex justify-center items-end">
                <div className="border-2 mb-2 border-black hover:scale-105 cursor-pointer bg-white p-2">First option</div>
                <div className="border-2 mb-2 border-black hover:scale-105 cursor-pointer bg-white p-2">Second option</div>
                <div className="border-2 mb-2 border-black hover:scale-105 cursor-pointer bg-white p-2">Third option</div>

            </div>
            <div className="h-3/5 w-full  bg-white text-black flex justify-center items-center">
                <div className="h-full border-2 border-black w-1/10 mx-2 transform-flat flex justify-center items-center bg-white [transform:perspective(300px)_rotateY(15deg)] ">left-showers</div>
                <div className="h-full border-2 border-black w-1/10 mx-2 transform-flat flex justify-center items-center bg-white [transform:perspective(300px)_rotateY(15deg)]">left-showers</div>
                <div className="h-full border-2 border-black w-1/10 mx-2 transform-flat flex justify-center items-center bg-white [transform:perspective(300px)_rotateY(15deg)]">left-showers</div>
                <div className="h-full border-2 border-black w-1/3 flex justify-center items-center bg-white">main-shower</div>
                <div className="h-full border-2 border-black w-1/10 mx-2 transform-flat flex justify-center items-center bg-white [transform:perspective(300px)_rotateY(-15deg)]">right-showers</div>
                <div className="h-full border-2 border-black w-1/10 mx-2 transform-flat flex justify-center items-center bg-white [transform:perspective(300px)_rotateY(-15deg)]">right-showers</div>
                <div className="h-full border-2 border-black w-1/10 mx-2 transform-flat flex justify-center items-center bg-white [transform:perspective(300px)_rotateY(-15deg)]">right-showers</div>
            </div>
            <div className="h-1/5 w-full bg-white text-black flex justify-center items-start">
                <div className="border-2 rounded-full m-2 p-2 border-black hover:scale-105 cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 16.811c0 .864-.933 1.406-1.683.977l-7.108-4.061a1.125 1.125 0 0 1 0-1.954l7.108-4.061A1.125 1.125 0 0 1 21 8.689v8.122ZM11.25 16.811c0 .864-.933 1.406-1.683.977l-7.108-4.061a1.125 1.125 0 0 1 0-1.954l7.108-4.061a1.125 1.125 0 0 1 1.683.977v8.122Z" />
                </svg>
                </div>
                <div className="border-2 rounded-full m-2 p-2 border-black hover:scale-105 cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5V18M15 7.5V18M3 16.811V8.69c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061A1.125 1.125 0 0 1 3 16.811Z" />
                </svg>
                </div>
                <div className="border-2 rounded-full m-2 p-2 border-black hover:scale-105 cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061A1.125 1.125 0 0 1 3 16.811V8.69ZM12.75 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061a1.125 1.125 0 0 1-1.683-.977V8.69Z" />
                </svg>
                </div>
                
            </div>
            
        </div>
    )

}

export default ProjectCard;