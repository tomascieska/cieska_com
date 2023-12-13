/* eslint-disable react/no-unknown-property */
import { Canvas } from '@react-three/fiber'
import MainScene from './MainScene'
import { OrbitControls } from '@react-three/drei'






function App() {
  
  return (
    
     
  <Canvas shadows camera={{fov: 75, near: 0.1, far: 1000, position:[0,1,10]}}>
    <OrbitControls />
    <MainScene/>
  </Canvas>
    
    )
  
}

export default App

