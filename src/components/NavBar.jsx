export default function NavBar (){
    return(
        <div className="flex fixed bottom-6 md:bottom-auto md:top-0 justify-end w-full p-3 h-12 md:h-auto z-3">
            <div className="flex w-full md:w-1/2 sm:w1/3 shadow-[7px_7px_0px_0px_rgba(0,0,0,0.4)]">
                <a className="text-xs md:text-lg sm:text-lg hover:scale-105 bg-white border-black w-1/4 border-1 flex justify-center" href="#about_me">About me</a>
                <a className="text-xs md:text-lg sm:text-lg hover:scale-105 bg-white border-black w-1/4 border-1 flex justify-center" href="#projects">Projects</a>
                <a className="text-xs md:text-lg sm:text-lg hover:scale-105 bg-white border-black w-1/4 border-1 flex justify-center" href="#education">Education</a>
                <a className="text-xs md:text-lg sm:text-lg hover:scale-105 bg-white border-black w-1/4 border-1 flex justify-center" href="#experience">Experience</a>
            </div>
        </div>
    )
}
