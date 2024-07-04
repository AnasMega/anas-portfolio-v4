import React from 'react';
import Lottie from "lottie-react";
import SpaceBoy from "../LottieFiles/SpaceBoy.json";
import Typed from "./Typed.js";
import Tilt from 'react-parallax-tilt';
import Avatar from '../images/Avatar.png';
import { BsFillCupHotFill } from "react-icons/bs";


const Home = () => {
  return (
    <div >
      <div className='HomePage'>

        <div className='HomeText'>
          <h1>Assalam Alikom!</h1>
          <h1>I'M <b>Anas Hussain</b></h1>
          <Typed />
        </div>

        <Lottie
          className="illustration"
          animationData={SpaceBoy}
          loop={true}
        />

      </div>

      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading'>Brief <b>introduction</b></h1>
          <p>
            I love the process of changing a raw idea with problem into a solution with UI or a product
            that impacts lives and Business.
            I want to do work that challenges me as a developer & work that I can
            be proud of and enjoy that.<br /><br />
            I am fluent in <b>React.js, Next.js, Node.js, React Native</b> and know a bit of <b>Python</b> and I have worked on a number of
            projects in the <b>MERN</b> stack.<br /> and I developed and deployed more than<b> 4 Mobile Apps</b> on Play Store / App Store<br />
            I plan to learn <b>Supervised Learing Models</b>, <b>Generative AI</b> and<b> Computer Vision</b> in the near future. <br /><br />
            Also, I love <b>tea</b> <BsFillCupHotFill style={{ scale: "1.5", rotate: "15deg" }} />
          </p>
        </div>
        <Tilt>
          <img className='Avatar' src={Avatar} alt="" />
        </Tilt>
      </div>
    </div>
  )
}

export default Home