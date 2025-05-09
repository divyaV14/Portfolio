// import { useFrame } from "@react-three/fiber";
// import { useRef, useMemo } from "react";
// import * as THREE from "three";

// export const OrbitingParticles = () => {
//   const groupRef = useRef();

//   const particles = useMemo(() => {
//     const count = 100;
//     const temp = [];
//     for (let i = 0; i < count; i++) {
//       const angle = Math.random() * 2 * Math.PI;
//       const radius = 2 + Math.random() * 1.5;
//       const speed = 0.01 + Math.random() * 0.01;
//       temp.push({ angle, radius, speed });
//     }
//     return temp;
//   }, []);

//   useFrame(() => {
//     if (groupRef.current) {
//       particles.forEach((p, i) => {
//         p.angle += p.speed;
//         const x = Math.cos(p.angle) * p.radius;
//         const y = Math.sin(p.angle) * p.radius;
//         groupRef.current.children[i].position.set(x, y, 0);
//       });
//     }
//   });

//   return (
//     <group ref={groupRef}>
//       {particles.map((_, i) => (
//         <mesh key={i}>
//           <sphereGeometry args={[0.05, 8, 8]} />
//           <meshStandardMaterial color="#61dafb" />
//         </mesh>
//       ))}
//     </group>
//   );
// };
