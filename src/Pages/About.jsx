import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaUsers, FaGlobe } from 'react-icons/fa';
import { Helmet } from 'react-helmet-async';

const cardVariants = {
    hover: {
        scale: 1.05,
        boxShadow: '0 8px 30px rgba(0, 118, 255, 0.1)',
        transition: {
            type: 'spring',
            stiffness: 200,
            damping: 12,
        },
    },
};

const About = () => {
    return (
        <>
            <Helmet>
                <title>About | JobTrack</title>
            </Helmet>

            <motion.section
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-b from-white via-blue-50 to-blue-100 py-24"
            >
                <div className="w-11/12 max-w-7xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-20">
                        <h1 className="text-5xl font-extrabold text-gray-900 leading-tight mb-4">
                            Get to Know <span className="text-blue-600">JobTrack</span>
                        </h1>
                        <div className="w-24 h-1 bg-blue-500 mx-auto mb-6 rounded-full" />
                        <p className="text-gray-700 text-lg max-w-2xl mx-auto leading-relaxed">
                            Your intelligent job-hunting partner — empowering professionals to discover and organize career opportunities with confidence.
                        </p>
                    </div>

                    {/* Feature Cards */}
                    <div className="grid gap-10 md:grid-cols-3">
                        {/* Card 1 */}
                        <motion.div
                            variants={cardVariants}
                            whileHover="hover"
                            className="rounded-3xl p-8 bg-white border border-transparent hover:border-blue-200 shadow transition-all duration-300 text-center"
                        >
                            <FaBriefcase className="text-blue-600 text-6xl mx-auto mb-6" />
                            <h3 className="text-2xl font-semibold mb-3 text-gray-900">
                                Vast Job Market
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                Access thousands of high-quality job listings across multiple industries and locations.
                            </p>
                        </motion.div>

                        {/* Card 2 */}
                        <motion.div
                            variants={cardVariants}
                            whileHover="hover"
                            className="rounded-3xl p-8 bg-white border border-transparent hover:border-blue-200 shadow transition-all duration-300 text-center"
                        >
                            <FaUsers className="text-blue-600 text-6xl mx-auto mb-6" />
                            <h3 className="text-2xl font-semibold mb-3 text-gray-900">
                                For Every Talent
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                Whether you're new to the workforce or a seasoned pro, JobTrack personalizes your experience.
                            </p>
                        </motion.div>

                        {/* Card 3 */}
                        <motion.div
                            variants={cardVariants}
                            whileHover="hover"
                            className="rounded-3xl p-8 bg-white border border-transparent hover:border-blue-200 shadow transition-all duration-300 text-center"
                        >
                            <FaGlobe className="text-blue-600 text-6xl mx-auto mb-6" />
                            <h3 className="text-2xl font-semibold mb-3 text-gray-900">
                                Worldwide Access
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                From remote roles to global openings, discover job options no matter where you are.
                            </p>
                        </motion.div>
                    </div>

                    {/* CTA Footer */}
                    <div className="text-center mt-24">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Why Choose <span className="text-blue-600">JobTrack</span>?
                        </h2>
                        <p className="text-gray-700 text-lg max-w-3xl mx-auto leading-relaxed">
                            With smart filtering, beautiful design, and seamless workflows, JobTrack helps you land your next opportunity faster than ever.
                        </p>
                    </div>
                </div>
            </motion.section>
        </>
    );
};

export default About;
