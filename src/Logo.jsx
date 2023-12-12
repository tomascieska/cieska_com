/* eslint-disable react/no-unknown-property */
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Text3D } from '@react-three/drei'




const Logo = () => {

    const ref = useRef()
    useFrame((state, delta) => {
      ref.current.rotation.x += delta /50
      ref.current.position.z = Math.sin(state.clock.elapsedTime) /20
      ref.current.rotation.y += delta /20
    })
    
  return (
    <>
    <Text3D position={[-3,3,5]} ref={ref} font="./fonts/helvetiker_regular.typeface.json">
      Cieska.com
    <meshNormalMaterial wireframe/>
    </Text3D>


    </>
  )}

  export default Logo