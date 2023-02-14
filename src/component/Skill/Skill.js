import React from 'react';
import javaScript from './image/javaScript.png'
import react from './image/React.png'
import hTml from './image/Html .png'
import csS from './image/css.webp'
import Bootsrtap from './image/Bootstrap.jpeg'
import tailwind from './image/Tailwind.jpeg'
import figma from './image/Figma.jpg'
import SkillPart2 from './SkillPart2';
import node from './image/node-js.png'
import mongobd from './image/mongobd.jpg'
import express from './image/expressjs.jpg'
import firebase from  './image/firbase.png'



const Skill = () => {
    const skillDAta = [
        {
            id: 1,
            image: javaScript,
            name: 'javaScript'

        },
        {
            id: 2,
            image: react,
            name: 'React',

        },
        {
            id: 3,
            image: node,
            name: 'Node js ',

        },
        {
            id: 4,
            image: mongobd,
            name: 'MongoDB',

        },
        {
            id: 5,
            image: hTml,
            name: 'Html '

        },
        {
            id: 6,
            image: csS,
            name: 'Css'

        },
        {
            id: 7,
            image: Bootsrtap,
            name: 'Bootstrap'

        },
        {
            id: 8,
            image: tailwind,
            name: 'Tailwind'

        },
        {
            id: 9,
            image: figma,
            name: 'Figma'

        },
        {
            id: 10,
            image: express,
            name: 'Express JS'

        },
        {
            id: 11,
            image: firebase,
            name: 'Firebase'

        },
    ]
    return (
        <div className='ml-10 mt-16 lg:mt-20 md:ml-0 mb-10'>
            <h1 data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500" className='text-2xl lg:text-3xl font-serif text-white'>Skill</h1>
            <h1 data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500" className='text-3xl lg:text-5xl font-mono mt-3'>My Top Skills</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-10/12 mx-auto mt-10 gap-5'>
                {
                    skillDAta.map(data => <SkillPart2 key={data.id} data={data}></SkillPart2>)
                }

            </div>
        </div>
    );
};

export default Skill;