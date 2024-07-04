import React from 'react';
import ProjectBox from './ProjectBox';
import galaxy from '../images/galaxy.png';
import uplpasban from '../images/uplpasban.png';
import uplMobile from '../images/4.png';
import fleetmanagement from '../images/fleetmanagement.png';
import galaxyMobileApp from '../images/5.png';
import NajmWebApp from '../images/6.png';
import clockApp from '../images/7.png';
 import MGMobileApp from '../images/9.png';


const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
        <ProjectBox projectPhoto={fleetmanagement} projectName="Fleet-Management" />
        <ProjectBox projectPhoto={galaxy} projectName="Galaxy-Worldwide" />
        <ProjectBox projectPhoto={uplpasban} projectName="UPL-Pasban" />
        <ProjectBox projectPhoto={NajmWebApp} projectName="Najm-Wep-Portal" />
        <ProjectBox projectPhoto={clockApp} projectName="Inventory-Stock-App" />
        <ProjectBox projectPhoto={uplMobile} projectName="UPL-Mobile-App" />
        <ProjectBox projectPhoto={galaxyMobileApp} projectName="Galaxy-Mobile-App" />
        <ProjectBox projectPhoto={MGMobileApp} projectName="Megatech-Tracking-App" />
      </div>

    </div>
  )
}

export default Projects