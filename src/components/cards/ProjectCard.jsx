// @ts-nocheck
import { useEffect, useState } from "react";
import Images from "../images/Images";
import Modal from "../ImageModal";

const ProjectCard = () => {
    const projects = [
        { id: 1, title: "Professional Portfolio", img: Images.img2 , desc: "dPortafolio web creado con React y Styled Components para un profesional del fitness. El sitio muestra servicios y galerías con un diseño personalizado, moderno y completamente responsivo.", category: "frontend", linkto: "https://alexcontreras.netlify.app" },
        { id: 2, title: "Proyecto 2", img: Images.img3, desc: "Bosquejo de una página web estática para una veterinaria, creada con HTML, CSS y JavaScript puro. Es un diseño simple y de una sola página, ideal para presentar los servicios y contacto de forma clara.", category: "frontend", linkto: "https://pelucandog.netlify.app    " },
        { id: 3, title: "Log-in system", img: Images.img1, desc: "Sistema de login seguro con stack MERN. Usando JWT para autenticación y autorización, el proyecto gestiona el registro y el inicio de sesión, permitiendo acceso a rutas protegidas solo a usuarios verificados.", category: "backend", linkto: "https://saifsena.netlify.app/" },
        { id: 4, title: "Pharmacy Inventory Management", img: Images.img4, desc: "Backend robusto con stack MERN para la gestión de una farmacia. La API RESTful maneja productos y órdenes, usando JWT para una autenticación segura. El sistema está construido con Node.js, Express.js y MongoDB.", category: "backend", linkto: "https://saifsena.netlify.app/" },
        { id: 5, title: "Arquitectura de software", img: Images.img5, desc: "Basándome en el diseño del equipo, creé maquetas y estructuré el software usando Balsamiq. Esto definió claramente la distribución de componentes y estilos, asegurando una visión unificada del proyecto antes del desarrollo.", category: "softskills", linkto: "https://pharmacylanding.netlify.app" },
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

    useEffect(() => {
        setCurrentIndex(0);
    }, [filter])

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

    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = (imgUrl) => {
        setModalImage(imgUrl);
        setIsModalOpen(true);
    };

    const [modalImage, setModalImage] = useState('');

    const closeModal = () => {
        setIsModalOpen(false);
        setModalImage('');
    };

    return (
        <div id="projects" className="h-dvh w-dvw flex flex-col items-center justify-between text-black">
            {/* filtros */}
            <div className="h-1/5 flex gap-2 justify-center items-end">
                <button onClick={() => setFilter('all')}>
                    <div className="border-2 p-2 bg-white cursor-pointer hover:scale-105">All</div>
                </button>
                <button onClick={() => setFilter('backend')}>
                    <div className="border-2 p-2 bg-white cursor-pointer hover:scale-105">Back-End</div>
                </button>
                <button onClick={() => setFilter('softskills')}>
                    <div className="border-2 p-2 bg-white cursor-pointer hover:scale-105">Soft Skills</div>
                </button>
                <button onClick={() => setFilter('frontend')}>
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
                        <img
                            src={project.img}
                            alt=""
                            className="w-1/2 cursor-pointer transition-transform duration-300 hover:scale-105"
                            onClick={() => openModal(project.img)}
                        />
                        <p className="text-xs md:text-md mx-3">{project.desc}</p>
                        <button className="bg-blue-600 text-white hover:scale-105 p-2">
                            <a href={project.linkto} target="blank">Go to project!</a>
                        </button>
                    </div>
                ))}

                {isModalOpen && (
                    <Modal
                        imageUrl={modalImage}
                        onClose={closeModal}
                    />
                )}
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
