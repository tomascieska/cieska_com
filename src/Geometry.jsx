/* eslint-disable react/no-unknown-property */
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Text3D } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import AnimatedStars from './AnimatedStars'


const Geometry = () => {

    const ref = useRef()
    useFrame((state, delta) => {
      ref.current.rotation.x += delta /50
      ref.current.position.z = Math.sin(state.clock.elapsedTime) /20
      ref.current.rotation.y += delta /20
    })
    
  return (
    <>

      <AnimatedStars/>
    
  <mesh ref={ref} scale={3}>

  <Text3D  font="./fonts/helvetiker_regular.typeface.json">
    Cieska.com
  <meshNormalMaterial wireframe/>
  </Text3D>

    <boxGeometry args={[50, 50, 10, 10, 60, 50]} />
    <meshToonMaterial wireframe/>
    
  </mesh>
  <Perf/>
    </>
  )}

  export default Geometry