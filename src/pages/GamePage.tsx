import { Link } from "react-router-dom";
import Card from "../components/Card";
import { useEffect, useState } from "react";
import { useSpring,animated } from "@react-spring/web";



const GamePage = () => {

    const arr : number[] = [1,2,3,4,5,6,7,8,9,10,11,12]

    const [newNumber,setNewNumber] = useState<number | null>(0)
    const [playerSum,setPlayerSum] = useState<number>(0)
    const [enemyNum,setEnemyNum] = useState<number>(0)

    const [win,setWin] = useState<boolean | undefined>(undefined)
    const [gameOver,setGameOver] = useState<boolean>(false)

    const [winStreak,setWinStreak] = useState<number>(0)
    const [lossStreak,setLossStreak] = useState<number>(0)


    // Handling new number pulling and addition
    const addNumbers = function(){
        if(newNumber){
            setPlayerSum(playerSum+newNumber)
        }
    }

    const getRandomNum = function(){
        const num = Math.floor(Math.random() * arr.length);
        setNewNumber(arr[num])
    }

    useEffect(()=>{
        addNumbers()
    },[newNumber])

    // Enemy random number generating
    const randomEnemyNumber = function(){
        let arrr: number[] = [];
        for(var i = 0;i < 3;i++){
        arrr.push(Math.floor(Math.random() * arr.length))
        const sum = arrr.reduce((acc,curr)=>acc+curr)
        setEnemyNum(sum)  
        console.log('Enemy Num:',sum);             
    }
    }
    const handleStop = function(){
        setGameOver(true)
        if(enemyNum > 21){
            setWinStreak(winStreak+1)
            setLossStreak(0)
            return setWin(true)
        }
        if(playerSum > enemyNum){
            setWinStreak(winStreak+1)
            setLossStreak(0)
            setWin(true)

        }
        if(playerSum < enemyNum){
            setWin(false)
            setWinStreak(0)
            setLossStreak(lossStreak+1)
        } 
    }

   const endGameAnim = useSpring({
        transform: gameOver ? "translateY(-900px) scale(0.1)" : "translateY(0px) scale(1)",
        config:{mass:2,friction:20}
    })
    const gameAnim = useSpring({
        transform: gameOver ?   "translateY(-500px) scale(1)" : "translateY(900px) scale(5)",
        config:{mass:1}
    })

    const printGame = function(){
        return(
            <animated.div style={endGameAnim} className="flex flex-col items-center h-[700px] w-full">
                <Card pos="0" number={newNumber}/>
            <div className="flex flex-col items-center justify-between h-[220px] mt-[50px]">
                <button className="text-slate-100 text-2xl p-3 rounded-3xl bg-blue-300 hover:scale-110 hover:text-slate-800" onClick={getRandomNum}>Random Num</button>
                <button className="text-slate-100 text-2xl p-3 rounded-3xl bg-blue-300 hover:scale-110 hover:text-slate-800" onClick={handleStop}>Stop</button>
                <h1 className="text-4xl">Sum:{playerSum}</h1>
                <Link className="text-slate-100 text-xl p-3 rounded-3xl bg-blue-300 hover:scale-110 hover:text-slate-800" to={'/'}>Main Page</Link>
            </div>
            </animated.div>
        )
    }

    const printEndGame = function(){
        return(
            <animated.div style={gameAnim} className="flex flex-col items-center h-[300px] w-full justify-between">
                {win ? <p className="text-5xl">You Won!</p> : <p className="text-5xl">You Lost!</p>}
                <div className="flex flex-row justify-between items-center w-[450px]">
                    <p className="text-3xl">Your Num: {playerSum}</p>
                    <p>vs</p>
                    <p className="text-3xl">Enemy Num: {enemyNum}</p>
                </div>
                {win ? <p className="text-3xl">Win Streak: {winStreak}</p> : <p className="text-3xl">Loss Streak: {lossStreak}</p>}
                <button className="text-slate-100 text-3xl p-3 rounded-3xl bg-blue-300 hover:scale-110 hover:text-slate-800" onClick={handleNewGame}>New Game</button>
                <Link className="text-slate-100  text-xl p-3 bg-blue-300 rounded-3xl hover:scale-110 hover:text-slate-800" to={'/'}>Main Page</Link>
            </animated.div>
        )
    }

    

    const handleNewGame = function(){
        setPlayerSum(0)
        setEnemyNum(0)
        randomEnemyNumber()
        setGameOver(false)
        setWin(undefined)
        setNewNumber(null)
    }

    useEffect(()=>{
        randomEnemyNumber()
    },[])

    useEffect(()=>{
        if(playerSum > 21){
            setWinStreak(0)
            setLossStreak(lossStreak+1)
            setGameOver(true)
            setWin(false)
        }
    },[playerSum])

    useEffect(()=>{
        console.log(gameOver)
    },[gameOver])
    

    return ( 
        <div className="w-screen h-screen flex flex-col items-center">
            <div className="h-500px w-full flex flex-col items-center mt-[300px]">
                {printGame()}
                {printEndGame()}
            </div>
        </div>
     );
}
 
export default GamePage;