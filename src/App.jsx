/* eslint-disable react/no-unknown-property */
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { KeyboardControls } from "@react-three/drei"

import Geometry from './Geometry.jsx'




function App() {
  return (
    <KeyboardControls
    map={[
      { name: "forward", keys: ["ArrowUp", "w", "W"] },
      { name: "backward", keys: ["ArrowDown", "s", "S"] },
      { name: "left", keys: ["ArrowLeft", "a", "A"] },
      { name: "right", keys: ["ArrowRight", "d", "D"] },
      { name: "jump", keys: ["Space"] },
    ]}>

     
  <Canvas>
    <ambientLight intensity={1}/>
    <pointLight position={[0, 5, 0]} intensity={1} color='white'/>
    <directionalLight  intensity={2} position={[1, 20, 10]}/>
    <Geometry args={[2, 20, 2]} />

  

  <OrbitControls />
  {/* <axesHelper args={[5]} />  */}
  </Canvas>
    </KeyboardControls>
    
    )
  
}

export default App

