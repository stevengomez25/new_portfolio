import Images from "../images/Images";

const ExperienceCard = () => {
    return(
        <div id="experience" className="h-dvh w-full flex justify-evenly items-center">
            <div className="w-1/4 h-4/5 flex flex-col justify-evenly items-center bg-amber-600">
                <h1 className="text-3xl">FrontEnd</h1>
                <img src={Images.img6} alt="" />
                <div className="">Icons</div>
            </div>
        </div>
    )
};

export default ExperienceCard;