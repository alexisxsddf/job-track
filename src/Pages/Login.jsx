import { FaUserAlt, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { motion } from "framer-motion";
import { Link, useLocation, useNavigate } from "react-router";
import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";

// Motion variants
const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            when: "beforeChildren",
            staggerChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};

const Login = () => {
    const [email, setEmail] = useState("");
    // const [showPassword, setShowPassword] = useState(false);
    const { signIn, googleSignIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const redirectPath = location.state || "/";

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(() => {
                toast.success("You've successfully logged in!");
                navigate(redirectPath);
            })
            .catch((error) => {
                const errorCode = error.code;
                let message = "Something went wrong.";

                switch (errorCode) {
                    case "auth/user-not-found":
                        message = "No account found with this email.";
                        break;
                    case "auth/wrong-password":
                        message = "Incorrect password. Please try again.";
                        break;
                    case "auth/invalid-email":
                        message = "Please enter a valid email address.";
                        break;
                    case "auth/invalid-credential":
                        message = "Invalid email or password.";
                        break;
                    case "auth/too-many-requests":
                        message = "Too many login attempts. Try again later.";
                        break;
                    default:
                        message = "Login failed. Please check your credentials.";
                }

                toast.error(message);
            });
    };

    const handleGoogleLogin = () => {
        googleSignIn()
            .then(() => {
                toast.success("You've successfully logged in!");
                navigate(redirectPath);
            })
            .catch((error) => {
                toast.error(`Google sign-in failed: ${error.message}`);
            });
    };

    return (
        <>
            <Helmet>
                <title>Login | JobTrack</title>
            </Helmet>
            <div className="bg-base-200 flex items-center justify-center p-6 min-h-[calc(100vh-64px)]">
                <motion.div
                    className="bg-base-100 shadow-2xl rounded-2xl p-8 w-full max-w-md"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.h2
                        className="text-3xl font-bold text-center mb-6 text-primary"
                        variants={itemVariants}
                    >
                        Please Login
                    </motion.h2>

                    <motion.form className="space-y-4" onSubmit={handleLogin} variants={itemVariants}>
                        <label className="input input-bordered flex items-center gap-2 w-full">
                            <FaUserAlt className="text-primary" />
                            <input
                                type="text"
                                className="grow"
                                placeholder="Username or Email"
                                name="email"
                                value={email}
                                required
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </label>

                        <label className="input input-bordered flex items-center gap-2 w-full relative">
                            <FaLock className="text-primary" />
                            <input
                                type="password"
                                className="grow pr-10"
                                placeholder="Password"
                                name="password"
                                required
                            />
                            {/* <span
                                className="absolute right-4 text-lg text-primary cursor-pointer"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </span> */}
                        </label>

                        <div className="flex justify-between text-sm mt-2">
                            <label className="label cursor-pointer">
                                <input type="checkbox" className="checkbox checkbox-primary mr-2" />
                                Remember me
                            </label>
                            <Link
                                to="/auth/forgotPassword"
                                state={{ email }}
                                className="link link-hover text-primary"
                            >
                                Forgot Password?
                            </Link>
                        </div>

                        <motion.button
                            type="submit"
                            className="btn btn-primary w-full mt-4"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Login
                        </motion.button>
                    </motion.form>

                    <motion.div className="divider text-sm mt-6" variants={itemVariants}>
                        OR
                    </motion.div>

                    <motion.button
                        onClick={handleGoogleLogin}
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.95 }}
                        className="btn btn-outline btn-primary flex items-center justify-center gap-2 w-full"
                        variants={itemVariants}
                    >
                        <FcGoogle className="text-xl" />
                        Continue with Google
                    </motion.button>

                    <motion.div className="text-center mt-6 text-sm" variants={itemVariants}>
                        Don’t have an account?{" "}
                        <Link
                            to="/auth/register"
                            state={redirectPath}
                            className="link link-primary font-semibold"
                        >
                            Register
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </>
    );
};

export default Login;
