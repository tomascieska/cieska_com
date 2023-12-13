import { useGLTF } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useMemo, useRef } from "react"



const ISS = () => {
    const memoizedISS = useMemo(() => {
        return useGLTF('/ISSModel/ISS_stationary.gltf')
    })
    const issRef = useRef()
    const xAxis = 2

    useFrame(({clock}) => {
        //Orbit rotation
        issRef.current.position.x = Math.sin(clock.getElapsedTime() * 0.8) * xAxis
        issRef.current.position.z = Math.cos(clock.getElapsedTime() * 0.8) * xAxis
        //Axis rotation
        issRef.current.rotation.y += 0.005
    })

  return (
    <mesh 
        ref={issRef}
    >
        <primitive object={memoizedISS.scene} position={[2, 0, 0,]} scale={0.005}/>
    </mesh>
  )
}

export default ISS