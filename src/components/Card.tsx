import { animated,useSpring } from "@react-spring/web";



interface CardProps{
    number: number | null,
    pos:string

}



const Card:React.FC<CardProps> = ({number,pos}) => {

    const cardAnim = useSpring({
        from:{transform:'translateY(0px)'},
        to:{transform:`translateY(${pos}px)`},
        config:{mass:2}
    })

    return ( 
        <animated.div style={cardAnim} className="h-[400px] w-[250px] bg-slate-200 rounded-lg flex flex-col items-center justify-center">
            <h2 className="text-black text-5xl">{number}</h2>
        </animated.div>
     );
}
 
export default Card;