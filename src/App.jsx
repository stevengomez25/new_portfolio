// @ts-nocheck
import './App.css';
import NavBar from './components/NavBar';
import HeroCard from './components/cards/HeroCard';
import Loader from './components/Loader';
import ProjectCard from './components/cards/ProjectCard';

function App() {


  return (
    <div className='font-mono flex flex-col h-auto w-full justify-center items-center bg-gradient-to-b from-blue-600 via-blue-900 to-black '>
      <Loader />
      <NavBar/>
      <HeroCard/>
      <ProjectCard/>
      <div className='text-white text-center text-xs sm:text-lg fixed bottom-0'>
        Developed by StevenGDeveloper 2025©. All rights reserved.
      </div>
    </div>
  )
}

export default App
