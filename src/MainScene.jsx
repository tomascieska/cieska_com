/* eslint-disable react/no-unknown-property */
import { useHelper } from '@react-three/drei'
import { useRef } from 'react'
import * as THREE from 'three'
import { Perf } from 'r3f-perf'


import AnimatedStars from './AnimatedStars'
import Earth from './Earth'
import Logo from './Logo'


const MainScene = () => {
    const directionalLightRef = useRef()
    const directionalLightRefTwo = useRef()

    useHelper(directionalLightRef, THREE.DirectionalLightHelper, 1, 'hotpink')
    useHelper(directionalLightRefTwo, THREE.DirectionalLightHelper, 1, 'hotpink')

  return (
    <>
        {/* <directionalLight 
            ref={directionalLightRef}
            position={[0,0,10]}
            intensity={3} 
        />
        <directionalLight 
            ref={directionalLightRefTwo}
            position={[0,0,-10]}
            intensity={3}
        /> */}
        <ambientLight intensity={3}/>

        <AnimatedStars/>
        <Earth />
        <Logo args={[2, 20, 2]}/>
        <Perf/>
    </>
  )
}

export default MainScene