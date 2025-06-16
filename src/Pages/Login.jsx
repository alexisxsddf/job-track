import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

const Login = () => {
    const [email, setEmail] = useState("");
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
                toast.success("Logged in successfully!");
                navigate(redirectPath, { replace: true });
            })
            .catch((error) => {
                let message = "Login failed.";
                switch (error.code) {
                    case "auth/user-not-found":
                        message = "No account found.";
                        break;
                    case "auth/wrong-password":
                        message = "Wrong password.";
                        break;
                    case "auth/invalid-email":
                        message = "Invalid email.";
                        break;
                    case "auth/too-many-requests":
                        message = "Too many attempts. Try later.";
                        break;
                }
                toast.error(message);
            });
    };

    const handleGoogleLogin = () => {
        googleSignIn()
            .then(() => {
                toast.success("Google login successful!");
                navigate(redirectPath, { replace: true });
            })
            .catch((error) => {
                toast.error(`Google login failed: ${error.message}`);
            });
    };

    return (
        <>
            <Helmet>
                <title>Login | JobTrack</title>
            </Helmet>
            <div className="min-h-screen flex items-center justify-center bg-base-200 p-6">
                <motion.div
                    className="bg-base-100 p-8 rounded-2xl shadow-2xl max-w-md w-full"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl font-bold text-center text-primary mb-6">Please Login</h2>
                    <form onSubmit={handleLogin} className="space-y-4">
                        <label className="input input-bordered flex items-center gap-2 w-full">
                            <FaUserAlt className="text-primary" />
                            <input
                                type="text"
                                name="email"
                                placeholder="Email"
                                value={email}
                                required
                                onChange={(e) => setEmail(e.target.value)}
                                className="grow"
                            />
                        </label>
                        <label className="input input-bordered flex items-center gap-2 w-full">
                            <FaLock className="text-primary" />
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                required
                                className="grow"
                            />
                        </label>
                        <div className="flex justify-between text-sm">
                            <label>
                                <input type="checkbox" className="mr-2" />
                                Remember me
                            </label>
                            <Link to="/auth/forgotPassword" state={{ email }} className="link link-primary">
                                Forgot Password?
                            </Link>
                        </div>
                        <button type="submit" className="btn btn-primary w-full mt-2">Login</button>
                    </form>
                    <div className="divider">OR</div>
                    <button onClick={handleGoogleLogin} className="btn btn-outline w-full flex items-center gap-2">
                        <FcGoogle /> Continue with Google
                    </button>
                    <p className="text-sm text-center mt-4">
                        Don’t have an account?{" "}
                        <Link
                            to="/auth/register"
                            state={redirectPath}
                            className="link link-primary font-semibold"
                        >
                            Register
                        </Link>
                    </p>
                </motion.div>
            </div>
        </>
    );
};

export default Login;
