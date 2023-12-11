import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
// import { WireframeMaterial } from '@react-three/drei/materials/WireframeMaterial'

// import { useEffect, useRef } from 'react'
import Geometry from './Geometry.jsx'



function App() {
  return (
    <>
     <div className='text'>cieska.com</div>
     
  <Canvas>
    <ambientLight intensity={1}/>
    <pointLight position={[0, 5, 0]} intensity={1} color='white'/>
    <directionalLight  intensity={2} position={[1, 20, 10]}/>
    <Geometry args={[2, 2, 2]} color={'white'}/>
  <OrbitControls />
  </Canvas>
    </>
    )
  
}

export default App

