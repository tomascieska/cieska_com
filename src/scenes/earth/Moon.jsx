/* eslint-disable react/no-unknown-property */
import { useTexture } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useRef } from "react"


const Moon = () => {

    const [moonTexture] = useTexture([
        '/assets/moon_map.jpg'
    ])
    const moonRef = useRef()
    const xAxis = 4

    useFrame(({clock}) => {
        //Orbit rotation
        moonRef.current.position.x = Math.sin(clock.getElapsedTime() * 0.8) * xAxis
        moonRef.current.position.z = Math.cos(clock.getElapsedTime() * 0.8) * xAxis
        //Axis rotation
        moonRef.current.rotation.y += 0.005
    })

  return (
    <mesh 
        castShadow
        position={[1, 0, 0]}
        ref={moonRef}>
        {/* Radius, X-axis, Y-axis */}
        <sphereGeometry args={[0.5, 32, 32]}/>
        <meshPhongMaterial 
            map={moonTexture}
        />
    </mesh>
  )
}

export default Moon