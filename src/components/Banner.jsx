import React from 'react';
import { motion } from 'framer-motion';
import bannerImage from '../assets/bannerImage.jpg';

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.3,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            type: 'spring',
            damping: 18,
            stiffness: 100,
        },
    },
};

const Banner = ({ onFindJobsClick }) => {
    return (
        <section className="relative overflow-hidden min-h-[calc(100vh-64px)] flex items-center">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src={bannerImage}
                    alt="Hero Background"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent backdrop-blur-[1px]"></div>
            </div>

            {/* Main Content */}
            <div className="w-11/12 mx-auto py-20 relative z-10">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="md:w-2/3"
                >
                    <motion.h1
                        variants={itemVariants}
                        className="text-4xl md:text-5xl xl:text-7xl lg:w-3/4 font-extrabold text-gray-900 leading-tight mb-6"
                    >
                        Build Your Career with <span className="text-blue-600">JobTrack</span>
                    </motion.h1>

                    <motion.p
                        variants={itemVariants}
                        className="text-lg md:text-xl text-gray-800 mb-10 max-w-2xl"
                    >
                        Discover top-tier job openings, stay organized with intuitive tracking, and take charge of your job search journey — all in one powerful platform.
                    </motion.p>

                    <motion.div
                        variants={itemVariants}
                        className="flex flex-col sm:flex-row gap-4"
                    >
                        <button
                            onClick={onFindJobsClick}
                            id="top-companies"
                            className="px-8 py-3 bg-blue-600 text-white text-lg rounded-lg hover:bg-blue-700 transition-all font-medium shadow-md hover:shadow-xl"
                        >
                            🔍 Explore Opportunities
                        </button>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Banner;
