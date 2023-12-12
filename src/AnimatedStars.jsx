import { Stars } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const AnimatedStars = () => {

const starsRef = useRef()
    
useFrame(()=>{
    starsRef.current.rotation.x += 0.0001
    starsRef.current.rotation.y += 0.0001
    starsRef.current.rotation.z += 0.0001
})
    return (
        <Stars radius={50} depth={50} count={7000} factor={4} saturation={10} fade speed={2} ref={starsRef} color='red'/>
    )
}


export default AnimatedStars