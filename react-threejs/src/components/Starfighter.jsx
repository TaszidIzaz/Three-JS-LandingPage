/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.5 starfighter.glb --transform
Author: ChrisLee (https://sketchfab.com/chrisleeX)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/the-mandalorian-lego-n-1-starfighter-7681f18c7a6a4e5b860ece879bcb612c
Title: The Mandalorian - LEGO N 1 Starfighter
*/

import React, { useRef, useLayoutEffect } from 'react'
import { useGLTF, useScroll } from '@react-three/drei'
import gsap from 'gsap'
import {useFrame} from '@react-three/fiber'

export function Model(props) {
  const star = useRef();
  const scroll = useScroll();
  const tl = useRef();

  useFrame((state, delta)=>{
    tl.current.seek(scroll.offset * tl.current.duration())
  })

  useLayoutEffect(()=> {
    tl.current = gsap.timeline({defaults: {duration: 24, ease: 'power1.inOut'}})


    tl.current
    .to(star.current.rotation, {y: -1}, 8)
    .to(star.current.position, {x: 1}, 8)

    .to(star.current.rotation, {y: 1}, 24)   
    .to(star.current.position, {x: -1}, 24)

    .to(star.current.rotation, {y: 0}, 42)
    .to(star.current.rotation, {x: 1}, 42)
    .to(star.current.position, {x: 0}, 42)

    .to(star.current.rotation, {y: 0}, 50)
    .to(star.current.position, {x: -1}, 50)
    .to(star.current.position, {x: 0}, 50)

    .to(star.current.rotation, {y: 0}, 68)
    .to(star.current.rotation, {x: 0}, 68) 
    .to(star.current.position, {x: 0}, 68)    

    .to(star.current.rotation, {x: 0}, 84) 
    .to(star.current.position, {x: 0}, 84) 

  },[])
  


  const { nodes, materials } = useGLTF('./models/starfighter-transformed.glb')
  return (
    <group {...props} dispose={null} ref = { star } >
      {/* <mesh geometry={nodes.Cube003.geometry} material={materials.Metal} castShadow>
          <meshPhysicalMaterial 
            color="#aaa"  
            roughness={0.2}
            metalness={1}
            reflectivity={0.5}
            iridescence={0.3}
            iridescenceIOR={1}
            iridescenceThicknessRange={[100,1000]}           
          />
        </mesh> */}
      <mesh geometry={nodes['Object513_SOLID-LIGHT_GRAY_0'].geometry} material={materials.PaletteMaterial001} />
      <mesh geometry={nodes['Object669_SOLID-DARK_GRAY_0'].geometry} material={materials.PaletteMaterial001} />
      <mesh geometry={nodes['Object748_SOLID-DARK_GRAY_0'].geometry} material={materials.PaletteMaterial001} />
      <mesh geometry={nodes['Object405_SOLID-DARK_GRAY_0'].geometry} material={materials.PaletteMaterial001} position={[-0.032, 0.266, 0.681]} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes['Object658_TRANS-CLEAR_0'].geometry} material={materials.PaletteMaterial002} position={[-0.028, 0.771, 1.52]} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Object714_Sticker_Rund_0.geometry} material={materials.Sticker_Rund} position={[1.247, 0.451, -0.636]} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes['Object730_TRANS-RED_0'].geometry} material={materials.PaletteMaterial003} position={[-0.032, 0.353, 0.075]} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes['Mandalorian-Logo_Mandalorian-Logo_0'].geometry} material={materials['Mandalorian-Logo']} position={[0.392, 0.002, -1.402]} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Object001_sticker_3_0.geometry} material={materials.sticker_3} position={[-0.033, 0.683, 0]} rotation={[-Math.PI / 2, 0, 1.37]} scale={0.979} />
      <mesh geometry={nodes.Object002_sticker_4_0.geometry} material={materials.sticker_4} position={[-1.313, 0.659, -0.468]} rotation={[-Math.PI / 2, 0, 0]} />
    </group>
  )
}

useGLTF.preload('./models/starfighter-transformed.glb')