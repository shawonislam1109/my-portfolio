import React from 'react';
import AboutMe from '../AboueMe/AboutMe';
import Blog from '../Blog/Blog';
import ContactMe from '../Contactme/Contactme';
import HeaderHome from '../HeaderHome/HeaderHome';
import Project from '../Project/Project';
import Skill from '../Skill/Skill';

const MainHome = () => {
    return (
        <div className=' md:w-9/12 mx-auto'>
            <HeaderHome />
            <Skill />
            <Project />
            <AboutMe />
            <Blog />
            <ContactMe />
        </div>
    );
};

export default MainHome;