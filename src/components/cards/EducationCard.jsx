const EducationCard = () => {
    return (
        <div className="h-dvh w-full flex flex-col">

            <div id="education" className="md:pt-2 text-3xl h-5/6 w-full flex flex-col  md:grid md:grid-cols-2 md:gap-x-2 place-items-center ">
                <div className="h-2/3 w-9/10 bg-sky-900 shadow-2xl shadow-white text-white hover:scale-105 hover:text-shadow-lg/30 flex flex-col items-start justify-center border-2 border-black rounded-md">
                    <h4 className="px-3 text-xs md:text-sm">Bachelor's degree</h4>
                    <h2 className="px-3 text-sm md:text-base">Colegio Técnico Industrial José Elías Puyana</h2>
                    <p className="px-3 text-base md:text-4xl">Técnico en dibujo arquitectónico</p>
                    <p className="px-3 text-sm md:text-base">2013-2020</p>
                </div>
                <div className="h-2/3 w-9/10 bg-sky-900 shadow-2xl shadow-white text-white hover:scale-105 hover:text-shadow-lg/30 flex flex-col items-start justify-center border-2 border-black rounded-md">
                    <h4 className="px-3 text-xs md:text-sm">Analist and software developer</h4>
                    <h2 className="px-3 text-sm md:text-base">Servicio Nacional de Aprendizaje</h2>
                    <p className="px-3 text-base md:text-4xl text-clip">Tecnología en análisis y </p>
                    <p className="px-3 text-base md:text-4xl text-clip">desarrollo de software </p>
                    <p className="px-3 text-sm md:text-base">2024 - ongoing</p>
                </div><div className="h-2/3 w-9/10 bg-sky-900 shadow-2xl shadow-white text-white hover:scale-105 hover:text-shadow-lg/30 flex flex-col items-start justify-center border-2 border-black rounded-md">
                    <h4 className="px-3 text-xs md:text-sm">Online Courses</h4>
                    <h2 className="px-3 text-sm md:text-base">Plataforma de Aprendizaje Udemy</h2>
                    <p className="px-3 text-base md:text-4xl">HTML, CSS5, Javascript (avanzado)</p>
                    <p className="px-3 text-sm md:text-base">2021 - ongoing</p>
                </div><div className="h-2/3 w-9/10 bg-sky-900 shadow-2xl shadow-white text-white hover:scale-105 hover:text-shadow-lg/30 flex flex-col items-start justify-center border-2 border-black rounded-md">
                    <h4 className="px-3 text-xs md:text-sm">Youtube resources</h4>
                    <h2 className="px-3 text-sm md:text-base">SoyDalto/Fazt/MiduDev</h2>
                    <p className="px-3 text-base md:text-4xl">Arquitectura de software - SQL/noSQL - dirección de proyectos - planificación, desarrollo y ejecución</p>
                    <p className="px-3 text-sm md:text-base">2021 - ongoing</p>
                </div>
            </div>
            <p className="text-xs text-white text-center flex justify-center items-center md:grow">If you would like to check any certificate, please reach out to me or send an email to stevengdeveloper@gmail.com!</p>
        </div>
    )
}

export default EducationCard;