import React from 'react';
import Skills from './Skills.js';
import Tilt from 'react-parallax-tilt';
import Lottie from "lottie-react"
import Coder from '../LottieFiles/coder.json';


const About = () => {

  return (
    <>
      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading' >Get to <b>know</b> me!</h1>
          <p>
            Hi, my name is <b>Anas Hussain</b> and I am from Karachi, Pakistan.
            I'm a <b>MERN stack web developer</b> and <b>React Native mobile app developer</b>a Masters student pursuing <b>Data Science from NED Karachi</b>. <br /><br />
            I am working as developer since last 2.8 years with Software Houses <b>(Evolligence / Axpert Solutions / Nabi Qasim)</b> and corporate Megatech Trackers.
            I love to create dynamic projects with beautiful and creative ideas and designs, you can check out some of my work in the projects section.<br /><br />
            I am <b>open</b> to new collaborations or work where I can contribute and grow. Feel free to connect with me, links are in the footer.<br />
            Apart from coding I love to do filmakking video content creation, you can check out some of my videos here <a href="https://www.youtube.com/@MrRumiOfficial/videos" target='_blank'>Youtube</a>
          </p>
        </div>

        <div>
          <Tilt>
            <Lottie
              className="illustration"
              animationData={Coder}
              loop={true}
            />
          </Tilt>
        </div>

      </div>

      <h1 className='SkillsHeading'>Professional Skillset</h1>
      <div className='skills'>

        <Skills skill='React' />
        <Skills skill='Node' />
        <Skills skill='Express' />
        <Skills skill='MongoDb' />
        <Skills skill='Git' />
        <Skills skill='Github' />
        <Skills skill='Javascript' />
        <Skills skill='React-Native' />
        <Skills skill='Postman' />
        <Skills skill='sql' />
        <Skills skill='Vercel' />
        <Skills skill='Npm' />
        <Skills skill='Bootstrap' />
        <Skills skill='Google-Map' />
        <Skills skill='MUI' />
        <Skills skill='TypeScript' />
        <Skills skill='Redux' />
        <Skills skill='Tailwind' />
        <Skills skill='Authetication/ Authorization' />

      </div>
    </>
  )
}

export default About