import React from 'react';
import emailjs from 'emailjs-com'
import { FaEnvelope, FaFacebook, FaGithub, FaLinkedinIn, FaPhoneAlt, FaTwitter } from 'react-icons/fa';
import { toast } from 'react-hot-toast';

const ContactMe = () => {

    const sendEmail = (e) => {

        e.preventDefault();
        emailjs.sendForm('service_pkioywn', 'template_88ckscs', e.target, 'AQtCHvz8hJZPzVBGg')
            .then((result) => {
                console.log(result.text);
                toast.success('Email send SuccessFully')
                e.target.reset();
            }, (error) => {
                console.log(error.text);
            });
    }
    return (
        <div id='contact' className='my-16 px-10 lg:px-0'>
            <h1 data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                data-aos-duration="1500"
                className='text-end font-mono text-3xl md:text-5xl '>Contact Me</h1>
            <h1 data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                data-aos-duration="1500"
                className='text-start font-mono text-3xl md:text-5xl '>Get In Touch</h1>
            <div data-aos="fade-up"
                data-aos-anchor-placement="center-bottom"
                data-aos-duration="1500"
                className='lg:grid grid-cols-2 gap-5'>
                <div className='mt-16'>
                    <form onSubmit={sendEmail}>
                        <input type="text" name='name' placeholder="Your name" className="input input-bordered input-error w-full max-w-2xl mt-3 text-2xl text-slate-100 bg-none" />
                        <br />
                        <input type="text" name='user_email' placeholder="Your Email" className="input input-bordered input-error w-full max-w-2xl mt-3 text-2xl text-slate-100" />
                        <br />
                        <textarea name='message' className="textarea text-2xl text-slate-100 textarea-error mt-3 h-60 w-full max-w-2xl" placeholder="Message "></textarea>
                        <input type="submit" value="Submit" className='bg-slate-200 text-black p-2 mt-2 text-xl font-serif rounded-md cursor-pointer' />
                    </form>
                </div>
                <div className='mt-20 ml-16'>
                    <a className='text-xl md:text-3xl  text-white flex cursor-pointer ' href="https://github.com/shawonislam1109"><FaGithub /><span className='ml-3'>shawonislam1109</span></a>
                    <a className='text-xl md:text-3xl  mt-3 text-white flex cursor-pointer' href="https://www.linkedin.com/in/rabiyul-islam/"><FaLinkedinIn /><span className='ml-3'> Rabiyul islam</span></a>

                    <a className='text-xl md:text-3xl -3xl mt-3 text-white flex cursor-pointer' href="https://www.facebook.com/rs.shawon.5623/"><FaFacebook /><span className='ml-3'> rs.shawon.5623 </span></a>

                    <a className='text-xl md:text-3xl  mt-3 text-white flex cursor-pointer' href="https://twitter.com/"><FaTwitter /><span className='ml-3'>Twitter</span></a>

                    <a className=' text-xl md:text-3xl  mt-3 text-white flex cursor-pointer' href="https://mail.google.com/mail/u/0/#inbox?compose=new"><FaEnvelope /><span className='ml-3'> shawonislam1109@gmail </span></a>

                    <p className='text-xl md:text-3xl  mt-3 text-white flex cursor-pointer' ><FaPhoneAlt /> <span className='ml-3'> +8801703881408</span></p>
                </div>
            </div>
            <footer data-aos="fade-up"
                data-aos-anchor-placement="center-bottom"
                data-aos-duration="1500"
                className='text-center mt-9'>
                <h1 className='text-4xl font-mono '>MD. RABIYUL ISLAM</h1>
                <p className='text-2xl font-mono '> RABI © All CopyRights Reserved 2022</p>
            </footer>
        </div >
    );
};

export default ContactMe;