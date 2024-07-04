import React from 'react';
import { FaGithub } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";


const ProjectBox = ({ projectPhoto, projectName }) => {
  const desc = {
    TindogDesc: "This website is a landing page of Tinder but for dogs. It is a responsive website which was made to understand Bootstrap. I also learned how to host my project on Github and then how to deploy that project using Github pages.",
    TindogGithub: "https://github.com/DevanshSahni/tindog",
    TindogWebsite: "https://devanshsahni.github.io/tindog/",

    "UPL-PasbanDesc": "A vehicle tracking solutions with various reports some analytics report with sql database and Next.js UI",
    "UPL-PasbanGithub": "",
    "UPL-PasbanWebsite": "https://uplpasban.com/",

    'Galaxy-WorldwideDesc': "A Vehicle Inport Export Web Application consist of Import whole user/ admin dahsboard with some intermediate level Analytics with highcharts and some mongoDB Aggregate pipeline.",
    'Galaxy-WorldwideGithub': "",
    'Galaxy-WorldwideWebsite': "https://galaxyshipping.com/",

    "Fleet-ManagementDesc": " Developed with React.js MUI and Tailwind CSS for Frontend and .Net Code and SQL Server for Backend to improve Fleet Management · Load Monitoring · Vehicle Maintenance · Driver Behavior · Supplychain Management. Manage supplychain by defining routes and fences.",
    "Fleet-ManagementGithub": "",
    "Fleet-ManagementWebsite": "http://fleetv2.megatechfleetmanagement.com/login",

    "Najm-Wep-PortalDesc": "A Complex Web ortal with Qlik Integration Iqama dealing internally in Riyadh Saudia Arabia UI Written in React.js and Backend APi in Node.js with SQL Server",
    "Najm-Wep-PortalGithub": "",
    "Najm-Wep-PortalWebsite": "https://najm.sa/sites/en/home",

    "UPL-Mobile-AppDesc": " Mobile App developed in React Native  available on App store and Play Store for Vehicle Live Tracking, tracking History, Fuel Management Vehicle Maintenance and custom Report Google map Integrated.",
    "UPL-Mobile-AppGithub": "",
    "UPL-Mobile-AppWebsite": "https://play.google.com/store/apps/details?id=com.unilever.uplpasban&hl=en_US",

    "Galaxy-Mobile-AppDesc": "Mobile App developed in React Native  available on App store and Play Store for Admin and user side vehile Import and Export managmenet with Google map and payment SDK integrations.",
    "Galaxy-Mobile-AppGithub": "",
    "Galaxy-Mobile-AppWebsite": "https://play.google.com/store/apps/details?id=com.galaxyshipping&hl=en",


    "Inventory-Stock-AppDesc": "An Inventory Management Solution with two cities integration of live stock uppdate for a clock manufecturing factory written in React.js and MongoDB with Node.js and Express Framework",
    "Inventory-Stock-AppGithub": "",
    "Inventory-Stock-AppWebsite": "https://hitco.pk/",
  }

  let show = '';
  if (desc[projectName + 'Github'] === "") {
    show = "none";
  }

  return (
    <div className='projectBox'>
      <img className='projectPhoto' src={projectPhoto} alt="Project display" />
      <div>
        <br />
        <h3>{projectName}</h3>
        <br />
        {desc[projectName + 'Desc']}
        <br />

        <a style={{ display: show }} href={desc[projectName + 'Github']} target='_blank'>
          <button className='projectbtn'><FaGithub /> Github</button>
        </a>

        <a href={desc[projectName + 'Website']} target='_blank'>
          <button className='projectbtn'><CgFileDocument /> Visit</button>
        </a>
      </div>
    </div>
  )
}

export default ProjectBox