import { useEffect, useState } from "react";

const ProjectCard = () => {
    const projects = [
        { id: 1, title: "Proyecto 1", img: "https://i0.wp.com/netlightsystems.com/blog/wp-content/uploads/2020/06/your-website.jpg?fit=441%2C291&ssl=1", desc: "deleniti eaque eum animi exercitationem corrupti, numquam, magni facilis obcaecati quas et nesciunt nihil.", category: "frontend" },
        { id: 2, title: "Proyecto 2", img: "https://i0.wp.com/netlightsystems.com/blog/wp-content/uploads/2020/06/your-website.jpg?fit=441%2C291&ssl=1", desc: "deleniti eaque eum animi exercitationem corrupti, numquam, magni facilis obcaecati quas et nesciunt nihil.", category: "frontend" },
        { id: 3, title: "Proyecto 3", img: "https://i0.wp.com/netlightsystems.com/blog/wp-content/uploads/2020/06/your-website.jpg?fit=441%2C291&ssl=1", desc: "deleniti eaque eum animi exercitationem corrupti, numquam, magni facilis obcaecati quas et nesciunt nihil.", category: "backend" },
        { id: 4, title: "Proyecto 4", img: "https://i0.wp.com/netlightsystems.com/blog/wp-content/uploads/2020/06/your-website.jpg?fit=441%2C291&ssl=1", desc: "deleniti eaque eum animi exercitationem corrupti, numquam, magni facilis obcaecati quas et nesciunt nihil.", category: "backend" },
        { id: 5, title: "Proyecto 5", img: "https://i0.wp.com/netlightsystems.com/blog/wp-content/uploads/2020/06/your-website.jpg?fit=441%2C291&ssl=1", desc: "deleniti eaque eum animi exercitationem corrupti, numquam, magni facilis obcaecati quas et nesciunt nihil.", category: "softskills" },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const next = () => {
        setCurrentIndex((prev) => (prev + 1) % filteredProjects.length);
    };

    const prev = () => {
        setCurrentIndex((prev) =>
            prev === 0 ? filteredProjects.length - 1 : prev - 1
        );
    };

    const [filter, setFilter] = useState('all');

    useEffect(()=>{
        setCurrentIndex(0);
    },[filter])

    const filteredProjects = filter === 'all' ? projects : projects.filter(project => project.category === filter);

    // posición de cada tarjeta
    const getPosition = (index) => {
        if (index === currentIndex) {
            // MAIN
            return "z-20 scale-100 opacity-100 [transform:translateX(0)_rotateY(0deg)]";
        }
        if (index === (currentIndex - 1 + filteredProjects.length) % filteredProjects.length) {
            // LEFT
            return "z-10 opacity-80 scale-90 -translate-x-32 [transform:perspective(600px)_rotateY(15deg)]";
        }
        if (index === (currentIndex + 1) % filteredProjects.length) {
            // RIGHT
            return "z-10 opacity-80 scale-90 translate-x-32 [transform:perspective(600px)_rotateY(-15deg)]";
        }
        // Ocultos
        return "opacity-0 scale-75";
    };

    return (
        <div id="projects" className="h-dvh w-dvw flex flex-col items-center justify-between text-black">
            {/* filtros */}
            <div className="h-1/5 flex gap-2 justify-center items-end">
                <button onClick={()=> setFilter('all')}>
                    <div className="border-2 p-2 bg-white cursor-pointer hover:scale-105">All</div>
                </button>
                <button onClick={()=> setFilter('backend')}>
                    <div className="border-2 p-2 bg-white cursor-pointer hover:scale-105">Back-End</div>
                </button>
                <button onClick={()=> setFilter('softskills')}>
                    <div className="border-2 p-2 bg-white cursor-pointer hover:scale-105">Soft Skills</div>
                </button>
                <button onClick={()=> setFilter('frontend')}>
                    <div className="border-2 p-2 bg-white cursor-pointer hover:scale-105">Front-End</div>
                </button>
            </div>

            {/* carrusel */}
            <div className="relative h-3/5 w-full flex justify-center items-center overflow-hidden perspective-[1000px]">
                {filteredProjects.map((project, i) => (
                    <div
                        key={project.id}
                        className={`absolute flex flex-col text-center items-center justify-center border-2 border-black bg-white h-2/3 w-1/2 md:w-1/3 transition-all duration-700 ease-in-out ${getPosition(
                            i
                        )}`}
                    >
                        <h1 className="text-xl">{project.title}</h1>
                        <img src={project.img} alt="" className="w-1/2" />
                        <p className="text-sm md:text-lg mx-3">{project.desc}</p>
                    </div>
                ))}
            </div>

            {/* controles */}
            <div className="h-1/5 flex justify-center items-start gap-4">
                <button
                    onClick={prev}
                    className="border-2 bg-white rounded-full p-2 border-black hover:scale-105 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 16.811c0 .864-.933 1.406-1.683.977l-7.108-4.061a1.125 1.125 0 0 1 0-1.954l7.108-4.061A1.125 1.125 0 0 1 21 8.689v8.122ZM11.25 16.811c0 .864-.933 1.406-1.683.977l-7.108-4.061a1.125 1.125 0 0 1 0-1.954l7.108-4.061a1.125 1.125 0 0 1 1.683.977v8.122Z" />
                    </svg>
                </button>
                <button
                    onClick={next}
                    className="border-2 bg-white rounded-full p-2 border-black hover:scale-105 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061A1.125 1.125 0 0 1 3 16.811V8.69ZM12.75 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061a1.125 1.125 0 0 1-1.683-.977V8.69Z" />
                    </svg>

                </button>
            </div>
        </div>
    );
};

export default ProjectCard;
