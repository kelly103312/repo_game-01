import { useMemo } from "react"

export default function useMovements(){
    const MOVEMENTS = {
        forward : "forward",
        backward : "backward",
        leftward : "leftward",
        rightward : "rightward",
        left : "left",
        right : "right",
        jump : "jump",
        exit: "exit",
        run:"run"  
    }

    const map = useMemo(()=>{
        return [
            {name: MOVEMENTS.forward, keys: ["ArrowUp","keyW"]},
            {name: MOVEMENTS.backward, keys: ["ArrowDown","keyS"]},
            {name: MOVEMENTS.leftward, keys: ["ArrowUp","keyA"]},
            {name: MOVEMENTS.rightward, keys: ["ArrowUp","keyD"]},
            {name: MOVEMENTS.jump, keys: ["Space"]},
            {name: MOVEMENTS.exit, keys: ["Scape"]},
            {name: MOVEMENTS.run, keys: ["Shift"]},
        ]
    },[]);

    return map;
} 