import React from 'react';
import { FaReact, FaMobile, FaGitAlt, FaGithub, FaNpm, FaBootstrap } from "react-icons/fa";
import { DiNodejs, DiJavascript1 } from "react-icons/di";
import { SiExpress, SiMongodb, SiPostman, SiVercel, SiMysql, SiGooglemaps, SiMui, SiTypescript, SiRedux, SiTailwindcss,SiAuth0 } from "react-icons/si";

const Skills = ({ skill }) => {
  const icon = {
    'React-Native': <FaMobile />,
    Postman: <SiPostman />,
    React: <FaReact />,
    Javascript: <DiJavascript1 />,
    Node: <DiNodejs />,
    Express: <SiExpress />,
    MongoDb: <SiMongodb />,
    Git: <FaGitAlt />,
    Github: <FaGithub />,
    Npm: <FaNpm />,
    sql: <SiMysql />,
    Bootstrap: <FaBootstrap />,
    Vercel: <SiVercel />,
    GMap: <SiGooglemaps />,
    "Google-Map": <SiGooglemaps />,
    MUI: <SiMui />,
    TypeScript: <SiTypescript />,
    Redux: <SiRedux />,
    Tailwind: <SiTailwindcss />,
    "Authetication/ Authorization": <SiAuth0 />,
  }

  return (
    <div title={skill} className='SkillBox'>
      {icon[skill]}
    </div>
  )
}

export default Skills
