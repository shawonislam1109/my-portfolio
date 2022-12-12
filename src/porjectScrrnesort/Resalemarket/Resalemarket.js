import React from 'react';
import { FaFileArchive, FaGithub } from 'react-icons/fa';
import image1 from './Resalemarketimage/Screenshot (112).png'
import image2 from './Resalemarketimage/Screenshot (113).png'
import image3 from './Resalemarketimage/Screenshot (114).png'
import image4 from './Resalemarketimage/Screenshot (115).png'

const Resalemarket = () => {
    return (
        <div className=' px-5 md:px-0 md:w-2/4  mx-auto'>
            <h1 data-aos="fade-up"
                data-aos-duration="2000"
                className='text-center text-3xl md:text-5xl font-serif mt-5'>This is the Resale market web site</h1>

            <p data-aos="fade-up"
                data-aos-duration="2000" className='text-2xl font-mono mt-5 '>This project name is Niben r Diben
                this is Buyer and Seller ecommerce web site any one want to 3 category laptop can Buy and sale
                This web site use to React js , mongobd , Tailwind css framework , DaisyUi , React_router_Dom etc if you want to know this web site You can visit this web site link you see next line
                this web site use to 3 nav page home page, Blog page , Product page , Dashboard , and Dashboard have to use 4 route if you want know that you can visit this web site
                <br />
                Admin email and password holo :
                <br />
                Admin_Route
                <br />
                AdminEmail : pk40@gmail.com
                <br />
                AminPassword : !@#12AAaa</p>

            <div data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                data-aos-duration="2000" className='mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center text-center ml-10 md:ml-0 '>
                <p className='text-md bg-violet-600 flex justify-center items-center  p-2 w-40 mt-3 rounded-md text-center text-white cursor-pointer'><FaFileArchive className='mr-2' /><a href="https://resale-market-cb84e.firebaseapp.com/">  Project visit</a></p>

                <p className='text-md bg-violet-600 p-2 w-40 mt-3 rounded-md text-center text-white cursor-pointer flex justify-center items-center'><FaGithub /><a className='ml-2' href="https://github.com/shawonislam1109/Reasle-Market-client">GitHub Client</a></p>

                <p className='text-md bg-violet-600 p-2 w-40 mt-3 rounded-md text-center text-white cursor-pointer flex justify-center items-center'><FaGithub /><a className='ml-2' href="https://github.com/shawonislam1109/Resale-market-server">GitHub server</a></p>

            </div>

            <p className='text-3xl md:text-5xl font-serif text-center mt-10'>Project ScreenShort</p>
            <div className='my-10'>
                <img data-aos="fade-right"
                    data-aos-anchor-placement="bottom-bottom"
                    data-aos-duration="2000" className='mt-5 rounded-lg' src={image1} alt="" />
                <img data-aos="fade-down"
                    data-aos-anchor-placement="bottom-bottom"
                    data-aos-duration="2000" className='mt-5 rounded-lg' src={image2} alt="" />
                <img data-aos="fade-left"
                    data-aos-anchor-placement="bottom-bottom"
                    data-aos-duration="2000" className='mt-5 rounded-lg' src={image3} alt="" />
                <img data-aos="fade-up"
                    data-aos-anchor-placement="bottom-bottom"
                    data-aos-duration="2000" className='mt-5 rounded-lg' src={image4} alt="" />
            </div>

        </div>
    );
};

export default Resalemarket;