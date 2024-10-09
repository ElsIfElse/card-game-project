import { useEffect, useState } from "react";
import QuizCard from "../components/QuizCard";
import Questions from "../quizData/Questions.json"
import { useSpring,animated } from "@react-spring/web";
import { Link } from "react-router-dom";


interface Questions{
    question:string,
    answer:string
}

const FlashCardsPull = () => {

const [textOnCard,setTextOnCard] = useState<string>()
const [currentQuestion,setCurrentQuestion] = useState<Questions | null>()
const [pick,setPick] = useState<boolean | undefined>(false)



const drawCard = function(){
    const data:Questions[] = Questions
    const randomIndex = Math.floor(Math.random()*data.length)
    setCurrentQuestion(data[randomIndex])
    setPick(true)
}

useEffect(()=>{
    setTextOnCard(currentQuestion?.question)
},[currentQuestion])

const showAnswer = function(){
    setTextOnCard(currentQuestion?.answer)
    setPick(false)
}
const pickUp = useSpring({
    from: {transform: "scale(1) translateX(0px) translateY(0px) rotateY(180deg)"},
    to: async(next)=>{
        await next ( pick ? {transform: 'scale(2) translateX(175px) translateY(188px) rotateY(0deg)'} : {transform: "scale(1) translateX(0px) translateY(0px) rotateY(180deg)"})
        await next ({opacity: '0'})
        await next ({transform: "scale(1) translateX(0px) translateY(0px) rotateY(180deg)"})
        await next ({opacity: '1'})
    },
    
    config:{mass:1,friction:25}
})

// const drag =  function (e){
//    console.log('dragging',e.target.className);
//    e.target.className = 'bg-blue-800'
   
// }
// const onDrop = function(e){
//     e.target.classname = 'bg-blue-200'
// }

    return ( 
        <div className="h-screen grid flex-col w-screen justify-center bg-slate-800">
            <div className="w-full flex flex-col items-center">
                <div className="w-3/5 items-center flex flex-col">
                <button onClick={showAnswer} className="quizbtn z-20 translate-y-[200px] translate-x-[100px]">Show answer</button>
                    <div className=" mr-[700px] flex flex-col">

                    <div className={`border border-slate-100 h-[375px] w-[600px] bg-slate-500 rounded-lg flex flex-col p-10 transform scale-50 absolute`}>      
                    </div >
                    <div className={`border border-slate-100 h-[375px] w-[600px] bg-slate-500 rounded-lg flex flex-col p-10 transform scale-50 absolute rotate-1 translate-x-2`}>      
                    </div >
                    <div className={`border border-slate-100 h-[375px] w-[600px] bg-slate-500 rounded-lg flex flex-col p-10 transform scale-50 absolute rotate-2 translate-x-1`}>      
                    </div >
                    <div className={`border border-slate-100 h-[375px] w-[600px] bg-slate-500 rounded-lg flex flex-col p-10 transform scale-50 absolute -rotate-1 translate-x-4 -translate-y-1`}>  
                    </div >
                    <div className={`border border-slate-100 h-[375px] w-[600px] bg-slate-500 rounded-lg flex flex-col p-10 transform scale-50 absolute -rotate-2 -translate-x-1`}>  
                    </div >
                    <button onClick={drawCard} className={`border border-slate-100 h-[375px] w-[600px] bg-slate-500 rounded-lg flex flex-col p-10 transform scale-50 absolute rotate-2 -translate-y-1 translate-x-1 z-20  hover:border-2 hover:border-white`}>

                    </button>
                        <animated.div className={`backface`} style={pickUp}>
                            <QuizCard scale={50} quizQuestion={textOnCard}/>
                        </animated.div>
                    </div>

                    <div className="h-1/2 flex justify-center">
                        <QuizCard scale={100} quizQuestion={textOnCard}/>
                    </div>
                    <Link to={'/'} className="link mt-[100px]">Main Menu</Link>

                </div>  
            </div>
            {/* <div onDrag={(e)=>{drag(e)}} onDrop={(e)=>onDrop(e)} className="border-2 border-white w-50px h-50px bg-blue-200 hover:bg-black"> */}

            {/* </div> */}
        </div>
     );
}
 
export default FlashCardsPull;