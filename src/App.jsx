import './App.css';
import NavBar from './components/navbar';
import HeroCard from './components/cards/herocard';
import Loader from './components/Loader';

function App() {


  return (
    <div className='font-mono flex flex-col h-dvh w-full justify-center items-center bg-gradient-to-b from-blue-600 via-blue-900 to-black '>
      <Loader />
      <NavBar/>
      <HeroCard/>
      <div className='text-white text-center text-xs sm:text-lg'>
        Developed by StevenGDeveloper 2025©. All rights reserved.
      </div>
    </div>
  )
}

export default App
