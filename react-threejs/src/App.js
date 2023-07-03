import './App.css';
import baffle from 'baffle'
import {useEffect} from 'react'
import {ScrollControls, Scroll, Stars} from '@react-three/drei';
import { Model as Starfighter } from './components/Starfighter';


function App() {

  useEffect(()=> {
    const target = baffle('.title')
    target.set({
      characters: 'S▞t▚a▞r▚f▞i▚g▞h▚t▞e▚r',
      speed: 100
    })
    target.start()
    target.reveal(1000,1000)
  })


  return (
    <>
    <color attach="background" args={['#1A2830']} />
    <ambientLight intensity={0.2} />
      <spotLight position={[0, 25, 0]} angle={1.3} penumbra={1} castShadow intensity={2} shadow-bias={-0.0001} />


    <ScrollControls pages={3} damping={0.1} >

    < Starfighter scale={1.3}/>
    <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
  
    <Scroll>
     
                
    </Scroll>

    <Scroll html style={{width: '100%'}}>

      
          <h1 className='title' style={{ color: '#cdcbca',position: 'absolute', top: `25vh`,textAlign: 'center', left: '50%', fontSize: '6em', transform: `translate(-50%,-50%)` }}>N-1 Starfighter</h1>
          
          <div className='row' style={{ position: 'absolute', top: `60vh`}}>
            <h2>A Starfighter Like No Other</h2>
            <p style={{ maxWidth: '400px' }}>The N-1 starfighter, was a sleek single-pilot craft used by the Naboo and demonstrated the marriage of art and function present in Naboo technology. Buffed chromium finishes on the craft's forward surfaces glinted in the sun for fly-bys and parades, and represented the royalty of Naboo, complementing the Royal Starship. The N-1's chromium stood in stark contrast to its overall yellow finish.</p>
            <div class="button-container">
            <a href="https://starwars.fandom.com/wiki/N-1_starfighter">
              <button>Read More</button>
            </a>
            </div>
          </div>

          <div className='row' style={{ position: 'absolute', top: `100vh`}}>
            <div className='col' style={{ position: 'absolute', right: `40px`, width: "540px"}}>
              <h2 style={{ maxWidth: "440px" }}>Sleek and Deadly</h2>
              <p style={{ maxWidth: '440px' }}>The N1 Starfighter is a legendary spacecraft known for its sleek and futuristic design. It was prominently featured in the Star Wars universe and gained popularity among fans for its unique and eye-catching appearance.</p>                
              <div class="button-container">
              <a href="https://starwars.fandom.com/wiki/N-1_starfighter">
              <button>Read More</button>
            </a>
            </div>
            </div>
          </div>
          
          <h2 style={{ position: 'absolute', top: '180vh', left: '50%', transform: `translate(-50%,-50%)` }}>Unravel the Secrets of the Legendary N1 Starfighter</h2>              
          
          <a href="https://sketchfab.com/3d-models/the-mandalorian-lego-n-1-starfighter-7681f18c7a6a4e5b860ece879bcb612c">
            <button style={{ position: 'absolute', top: '270vh', left: '50%', transform: 'translate(-50%,-50%)' }}>
              See the 3D Model
            </button>
          </a>
        </Scroll>
  </ScrollControls>
</>
)
}

export default App;
