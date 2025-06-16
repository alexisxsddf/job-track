import { Link } from "react-router";
import { FaArrowLeft } from "react-icons/fa";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            when: "beforeChildren",
            staggerChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
};

export default function ErrorPage() {
    return (
        <>
            <Helmet>
                <title>404 | Page Not Found</title>
            </Helmet>

            <motion.div
                className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-blue-50 p-6 relative overflow-hidden"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >

                <motion.div
                    className="absolute top-0 left-0 w-[300px] h-[300px] bg-blue-200 rounded-full opacity-30 blur-3xl"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1.5 }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-blue-300 rounded-full opacity-20 blur-2xl"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1.3 }}
                    transition={{ duration: 2.5, ease: "easeInOut" }}
                />

                <motion.div
                    className="bg-white shadow-2xl rounded-3xl px-8 py-16 max-w-xl w-full text-center z-10"
                    variants={itemVariants}
                >
                    <motion.h1
                        className="text-9xl font-extrabold text-blue-600 drop-shadow mb-4"
                        variants={itemVariants}
                    >
                        404
                    </motion.h1>

                    <motion.h2
                        className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
                        variants={itemVariants}
                    >
                        Oops! Page Not Found
                    </motion.h2>

                    <motion.p
                        className="text-gray-600 text-lg mb-8 leading-relaxed"
                        variants={itemVariants}
                    >
                        The page you're looking for doesn’t exist, was moved, or removed. But don’t worry — we’ll help you get back on track!
                    </motion.p>

                    <motion.div variants={itemVariants}>
                        <Link
                            to="/"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold text-lg rounded-full shadow-md hover:bg-blue-700 transition"
                        >
                            <FaArrowLeft />
                            Back to Home
                        </Link>
                    </motion.div>
                </motion.div>
            </motion.div>
        </>
    );
}
