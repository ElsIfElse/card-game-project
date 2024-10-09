interface CardProps{
    quizQuestion?:string,
    scale?:number,
    style?:any,
}


const QuizCard:React.FC<CardProps> = ({quizQuestion,scale}) => {
    return ( 
        <div className={`border-2 border-slate-100 h-[375px] w-[600px] bg-slate-500 rounded-lg flex flex-col items-center justify-center p-10 transform scale-${scale} z-10`} >
            <h2 className="text-slate-200 text-3xl">{quizQuestion}</h2>
        </div>
     );
}
 
export default QuizCard;