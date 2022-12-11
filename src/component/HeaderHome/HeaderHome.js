import React from 'react';
import Navbar from '../Navbar/Navbar';
import Partical from '../ParticalBackground/Partical';
import { useLottie } from "lottie-react";
import lottieFile from './84154-computer-science.json'
import { FaFacebook, FaFilePdf, FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const HeaderHome = () => {
    const options = {
        animationData: lottieFile,
        loop: true
    };
    const { View } = useLottie(options);

    return (
        <div>
            <Partical />
            <Navbar />
            <div className='flex justify-center items-center md:mt-28 mt-20'>
                <div data-aos="fade-up"
                    data-aos-duration="3000"
                    className='w-52 h-52 md:w-96 md:h-96'>
                    {View}
                </div>
                <div data-aos="fade-up"
                    data-aos-duration="3000"
                    className='ml-5 md:ml-10'>
                    <h1 className='text-xl md:text-2xl text-left font-serif  text-white'>Rabiyul Islam</h1>
                    <h1 className='text-3xl lg:text-5xl text-left  text-white font-serif'> I'm font-end-developer</h1>
                    <p className='text-2xl  font-serif border-2 mt-3 flex justify-center items-center border-white w-36 p-1 rounded-tl-3xl shadow-lg'><FaFilePdf className='text-white mr-3'></FaFilePdf><a href="https://drive.google.com/file/d/1fPuidaS_mkXCuiOFxGWvuGcBTGwtZRE8/view?usp=share_link">  Resume</a></p>
                    <div data-aos="fade-up"
                        data-aos-duration="3000"
                        className='flex  mt-8 text-xl  md:text-3xl  text-white'>
                        <a href="https://github.com/shawonislam1109"><FaGithub className='ml-3 hover:text-5xl duration-300 animate-spin' /></a>
                        <a href="https://www.linkedin.com/in/rabiyul-islam/"> <FaLinkedinIn className='ml-3 hover:text-5xl duration-300' /></a>
                        <a href="https://twitter.com/"><FaTwitter className='ml-3 hover:text-5xl duration-300' /></a>
                        <a href="https://www.facebook.com/rs.shawon.5623/">  <FaFacebook className='ml-3 hover:text-5xl duration-300' /></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderHome;