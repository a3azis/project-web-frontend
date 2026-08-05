import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

function KotakInteraktif() {
    const meshRef = useRef();
    const [hovered, setHovered] = useState(false);

    useFrame(() => {
        if (meshRef.current) {
            meshRef.current.rotation.x += 0.01;
            meshRef.current.rotation.y += 0.01;
        }
    });

    return (
        <mesh 
            ref={meshRef}
            onPointerOver={() => setHovered(true)}
            onPointerOut={() => setHovered(false)}
            >
            <boxGeometry args={[2,2,2]}/>
            <meshStandardMaterial color={hovered ? "fbbf24" : "10b981"}/>
        </mesh>
    );
}

function BoxThree() {
    return (
        <div className="w-full h-full bg-transparent rounded-2xl overflow-hidden shadow-lg border border-gray-700">
            <Canvas camera={{position: [0,0,5]}}>
                <ambientLight intensity={0.5}/>
                <directionalLight position={[5,5,5]} intensity={1}/>
                <KotakInteraktif/>
            </Canvas>
        </div>
    );
}

export default BoxThree;
