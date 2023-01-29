import React from 'react'
import './App.css';
import albert from './Assets/images/albert.jpg';
import {ImLocation2} from 'react-icons/im'
import {IoIosCall} from 'react-icons/io'
import {MdAttachEmail} from 'react-icons/md'
import {TbWorld} from 'react-icons/tb'


function App() {
  return ( 
  
    <div className='app'>
    <body>
    <div className='section1'>
    <img className='img' src={albert} alt='profile_image'/>
    <div className='objective'>
    <span className='objectives'>
      <h1>OBJECTIVE</h1> 
      <hr/>
      <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Beatae optio nulla enim ut tempora assumenda ipsam ex hic 
      accusamus quos provident cum voluptas quo nesciunt tempore 
      natus quas rerum distinctio atque minima, inventore doloribus 
      architecto nam? Exercitationem hic iure doloremque, saepe 
      officia ea eaque eius molestias libero autem esse commodi
     </p>
    </span>
    </div>
    </div>

    <div className='section2'>
    <div className='section2s'>
    <div className='add'>
    <ImLocation2 className='icons'/>
    <p>1008 Dawson driveLouisville, KY 40299</p>
    </div>

    <div className='tel'>
    <IoIosCall className='icons'/>
    <p>(502) 210-6397</p>
    </div>

    <div className='email'>
    <MdAttachEmail className='icons'/>
    <p>christiana@gmail.com</p>
    </div>

    <div className='web'>
    <TbWorld className='icons'/>
    <p>christina.com</p>
    </div>
    </div>
    </div>

    <div className='section3'>
      <div className='profile'>
      <div className='profiles'>
        <div className='nameWork'>
          <h1 className='name'>christina j murphy</h1>
          <h5 className='name'>certified nurse</h5>
        </div>
        <div className='education'>
          <h3>education</h3>
        <hr/>
          <h2>Bachelor's Degree in Licensed Practical Nursing, 2012</h2>
          <p>Lynn University, Boca Raton, FL</p>
        </div>
        <div className='hobbies'>
          <h3>hobbies</h3>
        <hr/>
        <p className='hr'>Reading Books</p>
        <p className='hr'>Swimming</p>
        <p className='hr'>Travelling</p>
        <p className='hr'>Blogging</p>
        <p className='hr'>Singing</p>
        <p className='hr'>Sleeping</p>
        <p>Eating</p>
        </div>
      </div>
      </div>


      <div className='skills'>
        <h1>RELEVANT SKILLS</h1>
        <hr/>
        <ul>
        <li>Lorem, ipsum dolor sit amet consectetur 
          adipisicing elit. Sunt accusantium consectetur 
          molestiae corrupti exercitationem sit minima!</li>
        <li>Lorem, ipsum dolor sit amet consectetur 
          adipisicing elit. Sunt accusantium consectetur 
          molestiae corrupti exercitationem sit minima!</li>
        <li>Lorem, ipsum dolor sit amet consectetur 
          adipisicing elit. Sunt accusantium consectetur 
          molestiae corrupti exercitationem sit minima!</li>
        <li>Lorem, ipsum dolor sit amet consectetur 
          adipisicing elit. Sunt accusantium consectetur 
          molestiae corrupti exercitationem sit minima!</li>
        <li>Lorem, ipsum dolor sit amet consectetur 
          adipisicing elit. Sunt accusantium consectetur 
          molestiae corrupti exercitationem sit minima!</li>
        <li>Lorem, ipsum dolor sit amet consectetur 
          adipisicing elit. Sunt accusantium consectetur 
          molestiae corrupti exercitationem sit minima!</li>
    </ul>
      </div>
    </div>
    </body>
    </div>
    
  

   
   
  );
}

export default App;
