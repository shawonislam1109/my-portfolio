import React from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import protImage from './my-bg.png'
const AboutMe = () => {
    return (
        <div className='my-16'>
            <h1 data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                data-aos-duration="1500"
                className='text-3xl md:text-5xl font-mono text-center'>ABOUT ME</h1>
            <div className='mt-16 lg:flex justify-around '>
                <div className='flex justify-center items-center'>
                    <img data-aos="fade-right"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine"
                        data-aos-duration="1500" className='w-64 h-64 md:h-80 md:w-80' src={protImage} alt="" />
                </div>
                <div data-aos="fade-left"
                    data-aos-anchor="#example-anchor"
                    data-aos-offset="500"
                    data-aos-duration="1500"
                    className=' w-2/3 mx-auto ml-5'>

                    <p className=' font-serif text-3xl mt-5'>Hello i'am Rabiyul Islam , Creative Web Developer </p>
                    <p className='font-mono  text-xl mt-10'>I'm a Frontend Web Developer building the Front-end of Websites and Web Applications that leads to the success of the overall product.I'm an expert with React Js, JavaScript, ES6, REST API, Firebase, Node Js, MongoDB, Stripe Payment Integration, React Query, React Router 6 React Bootstrap, Bootstrap, HTML5, CSS3, SASS, Tailwind CSS, Daisy UI, Material UI, and Headless UI to create various features for client websites.</p>
                    <div>
                        <p className=' font-mono flex justify-start items-center text-2xl  mt-5'> <span className='mr-2'><FaEnvelope /></span> shawonislam1109@gmail.com </p>
                        <p className=' font-mono flex justify-start items-center text-2xl  mt-5'> <span className='mr-2'><FaPhoneAlt /></span> +8801703881408 </p>
                        <p className=' font-mono flex justify-start items-center text-2xl  mt-5'> <span className='mr-2'><FaMapMarkerAlt /></span> Dhaka Tangail </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;