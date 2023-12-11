import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'



const Geometry = () => {

    const ref = useRef()
    useFrame((state, delta) => {
      ref.current.rotation.x += delta /5
      ref.current.position.z = Math.sin(state.clock.elapsedTime) /5
      ref.current.rotation.y += delta /5
    })
    
  return (
    <>
   
  <mesh ref={ref} position={[10,10,0]}>
        <boxGeometry args={[50, 50, 10, 10, 60, 50]} />
        <meshToonMaterial wireframe/>
  </mesh>
    </>
  )}

  export default Geometry