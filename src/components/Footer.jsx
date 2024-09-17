import React from 'react'
import { FaFacebook, FaGoogle, FaInstagram, FaPhone, FaTelegram } from 'react-icons/fa'
import { FaMapLocation } from 'react-icons/fa6'
import Cards from "../assets/credit-cards.webp"
import { motion } from 'framer-motion'

export default function Footer() {
    return (
        <footer className='bg-primary pt-12 pb-8 text-white'>
            <div className="container">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {/* company details section */}
                    <motion.div 
                    initial={{ opacity: 0, y: 100}}
                    whileInView={{ opacity: 1, y: 0}}
                    transition={{
                        delay: 0.2,
                        duration: 0.6,
                    }}
                    className='space-y-6'>
                        <h1 className='text-3xl font-bold uppercase'>Playing</h1>
                        <p className='text-sm max-w-[300px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, autem corrupti! Itaque obcaecati aliquid quam quis praesentium, maiores unde libero mollitia, excepturi optio necessitatibus, autem eum natus voluptatem doloribus laborum.</p>
                        <div>
                            <p className='flex items-center gap-2'>
                                <FaPhone />
                                +1 (123) 456-789
                            </p>
                            <p className='flex items-center gap-2 mt-2'>
                                <FaMapLocation />
                                Noida, Uttar Pradesh
                            </p>
                        </div>
                    </motion.div>
                    {/* footer link section */}
                    <motion.div 
                    initial={{ opacity: 0, y: 100}}
                    whileInView={{ opacity: 1, y: 0}}
                    transition={{
                        delay: 0.4,
                        duration: 0.6,
                    }}
                    className='space-y-6'>
                        <h1 className='text-3xl font-bold'>Quick Links</h1>
                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
                            <div >
                                <ul className='space-y-2'>
                                    <li>Home</li>
                                    <li>About</li>
                                    <li>Contact Us</li>
                                    <li>Privacy Policy</li>
                                </ul>
                            </div>
                            <div >
                                <ul className='space-y-2'>
                                    <li>Home</li>
                                    <li>About</li>
                                    <li>Contact Us</li>
                                    <li>Privacy Policy</li>
                                </ul>
                            </div>
                        </div>
                    </motion.div>
                    {/* social link section */}
                    <motion.div 
                    initial={{ opacity: 0, y: 100}}
                    whileInView={{ opacity: 1, y: 0}}
                    transition={{
                        delay: 0.6,
                        duration: 0.6,
                    }}
                    className='space-y-6'>
                        <h1 className='text-3xl font-bold'>Follow Us</h1>
                        <div className='flex items-center gap-3'>
                            <FaFacebook className='text-3xl hover:scale-105 duration-300'/>
                            <FaInstagram className='text-3xl hover:scale-105 duration-300'/>
                            <FaTelegram className='text-3xl hover:scale-105 duration-300'/>
                            <FaGoogle className='text-3xl hover:scale-105 duration-300'/>
                        </div>
                        <div className='space-y-2'>
                            <p>Payment Methods</p>
                            <img src={Cards} alt="" className='w-[80%]'/>
                        </div>
                    </motion.div>
                    {/* copyright section */}
                </div>
            </div>
        </footer>
    )
}
