import { Link } from "react-router-dom";

const MainPage = () => {
    return ( 
        <div className="flex justify-center items-center flex-col w-screen h-screen ">
            <div className="flex-col grid justify-center items-center h-[400px]">
                <Link className="text-3xl link" to={'/game'}>Card Game</Link>
                <Link className="text-3xl link" to={'/flashcardspull'}>Flash Cards</Link>
            </div>
        </div>
     );
}
 
export default MainPage;