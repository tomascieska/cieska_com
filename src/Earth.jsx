/* eslint-disable react/no-unknown-property */
import { useTexture } from "@react-three/drei"


const Earth = () => {
    const [earthTexture, earthNormalMap, earthSpecularMap, earthDisplacementMap] = useTexture([
        '/assets/earth_day.jpg',
        '/assets/earth_normal_map.jpg',
        '/assets/earth_specular_map.jpg',
        '/assets/earth_displacement_map.jpg'

        
    ])
  return (
    <mesh position={[0, 0, 0]}>
        {/* Radius, X-axis, Y-axis */}
        <sphereGeometry args={[1, 32, 32]}/>
        <meshPhongMaterial 
            map={earthTexture}
            normalMap={earthNormalMap}
            specularMap={earthSpecularMap}
            displacementMap={earthDisplacementMap}
            displacementScale={0.1}
        />
    </mesh>
  )
}

export default Earth