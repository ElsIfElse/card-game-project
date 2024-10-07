import { Link } from "react-router-dom";

const MainPage = () => {
    return ( 
        <div className="flex justify-center items-center w-screen h-screen">
            <Link className="text-slate-100 text-2xl p-3 rounded-3xl bg-blue-300 hover:scale-110 hover:text-slate-800" to={'/game'}>Game</Link>
        </div>
     );
}
 
export default MainPage;