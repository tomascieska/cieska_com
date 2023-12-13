/* eslint-disable react/no-unknown-property */
import { useTexture } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useRef } from "react"
import Moon from "./Moon"
import ISS from "./ISS.JSX"


// eslint-disable-next-line react/prop-types
const Earth = ({ displacementScale }) => {

    const [earthTexture, earthNormalMap, earthSpecularMap, earthDisplacementMap] = useTexture([
        '/assets/earth_day.jpg',
        '/assets/earth_normal_map.jpg',
        '/assets/earth_specular_map.jpg',
        '/assets/earth_displacement_map.jpg'
    ])

    const rotateRef = useRef()
    useFrame(() => {
        rotateRef.current.rotation.y += 0.005
    })

  return (
    <group>
        
        <mesh 
            receiveShadow
            position={[0, 0, 0]}
            ref={rotateRef}>
        {/* Radius, X-axis, Y-axis */}
        <sphereGeometry args={[1, 32, 32]}/>
        <meshPhongMaterial 
            map={earthTexture}
            normalMap={earthNormalMap}
            specularMap={earthSpecularMap}
            shininess={300}
            displacementMap={earthDisplacementMap}
            displacementScale={displacementScale}
            />
     </mesh>
     <ISS/>
     <Moon/>
    </group>
  )
}

export default Earth