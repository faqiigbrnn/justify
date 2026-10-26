import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logoImg from '../assets/images/logo.png';

function Login({ onNavigateToRegister }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login submitted:', { email, password, rememberMe });
  };

  return (
    <div className="w-screen min-h-screen lg:h-screen flex">
      <div className="flex flex-col lg:flex-row w-full min-h-screen lg:h-screen overflow-hidden">

        {/* Panel kiri */}
        <div className="flex-1 lg:flex-[0.9] bg-[#cfe2eb] flex flex-col justify-center items-center p-6 sm:p-10">
          <div className="flex items-center justify-center w-full">
            <Link to="/">
              <img
                src={logoImg}
                alt="Justify Logo"
                className="max-w-[320px] sm:max-w-[420px] lg:max-w-[500px] w-full h-auto object-contain"
              />
            </Link>
          </div>
        </div>

        {/* Panel kanan */}
        <div className="flex-1 lg:flex-[1.1] bg-white px-6 py-8 sm:px-12 lg:px-[60px] lg:pt-[35px] lg:pb-[24px] flex flex-col justify-between items-center lg:rounded-bl-[50px] min-h-screen lg:h-screen overflow-y-auto w-full box-border">
          <div className="max-w-[380px] w-full my-auto">

            <h1 className="text-[28px] lg:text-[32px] font-bold text-black mb-1.5 lg:mb-2.5">Welcome Back!</h1>
            <h2 className="text-[20px] lg:text-[22px] font-semibold text-gray-900 mb-1 lg:mb-2">Log in to Your Account</h2>
            <p className="text-[12px] lg:text-[13px] font-normal text-gray-500 mb-5 lg:mb-7">
              Welcome back! Choose your preferred sign-in method.
            </p>

            <form onSubmit={handleSubmit}>
              <div className="mb-4 lg:mb-5">
                <label htmlFor="email" className="block text-[12.5px] font-semibold text-gray-700 mb-2">Email</label>
                <div className="relative flex items-center">
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full border border-gray-300 rounded-[6px] px-[15px] py-3 text-[14px] text-gray-800 outline-none bg-white transition duration-200 placeholder:text-gray-400 focus:border-[#2071a3] focus:ring-3 focus:ring-[#2071a3]/15"
                  />
                </div>
              </div>
              <div className="mb-4 lg:mb-5">
                <label htmlFor="password" className="block text-[12.5px] font-semibold text-gray-700 mb-2">Password</label>
                <div className="relative flex items-center">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    placeholder="Enter your Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-full border border-gray-300 rounded-[6px] px-[15px] py-3 pr-10 text-[14px] text-gray-800 outline-none bg-white transition duration-200 placeholder:text-gray-400 focus:border-[#2071a3] focus:ring-3 focus:ring-[#2071a3]/15 [&::-ms-reveal]:hidden [&::-ms-clear]:hidden"
                  />
                  <button
                    type="button"
                    className="absolute right-3 bg-transparent border-none text-gray-600 hover:text-gray-900 cursor-pointer flex items-center justify-center p-1 rounded transition duration-200 active:scale-90"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={showPassword ? "Sembunyikan password" : "Tampilkan password"}
                  >
                    {showPassword ? (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>
                    ) : (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M2 10.5C5.5 15.5 12 16 12 16s6.5-.5 10-5.5"></path>
                        <path d="M12 16v4"></path>
                        <path d="M4.5 12.5L2 15.5"></path>
                        <path d="M19.5 12.5l2.5 3"></path>
                        <path d="M8 14.5l-1.5 3.5"></path>
                        <path d="M16 14.5l1.5 3.5"></path>
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              <div className="flex justify-between items-center text-[11.5px] mt-1.5 mb-6">
                <label className="flex items-center gap-2 text-gray-600 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="w-3.5 h-3.5 accent-[#2071a3] cursor-pointer"
                  />
                  <span>Remember me for 30 days</span>
                </label>

                <a href="#forgot" className="text-[#2071a3] font-medium flex items-center gap-1 hover:underline text-[12px]">
                  Forgot password? <span>›</span>
                </a>
              </div>

              <button type="submit" className="w-full bg-[#2071a3] hover:bg-[#185a82] text-white py-[11px] px-5 rounded-[6px] text-[13.5px] font-medium cursor-pointer transition duration-200">
                Sign In
              </button>
            </form>

            <div className="flex items-center text-center my-5 text-gray-400 text-[11px] before:flex-1 before:border-b before:border-gray-200 after:flex-1 after:border-b after:border-gray-200">
              <span className="px-3">or</span>
            </div>

            {/* logo pusingg */}
            <div className="flex justify-center gap-4">
              <button type="button" className="w-10 h-10 rounded-full border border-gray-200 bg-white flex items-center justify-center cursor-pointer shadow-xs transition duration-200 hover:-translate-y-0.5 hover:shadow-md" aria-label="Sign in with Google">
                <svg width="20" height="20" viewBox="0 0 48 48">
                  <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
                  <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
                  <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
                  <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
                </svg>
              </button>

              <button type="button" className="w-10 h-10 rounded-full border border-black bg-black flex items-center justify-center cursor-pointer shadow-xs transition duration-200 hover:-translate-y-0.5 hover:shadow-md" aria-label="Sign in with Apple">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.53 4.08zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                </svg>
              </button>
            </div>

          </div>

          <p className="text-center text-[12px] text-gray-500 pt-3">
            New here? Create an account 👉{" "}
            <a
              href="#signup"
              onClick={(e) => {
                e.preventDefault();
                if (onNavigateToRegister) onNavigateToRegister();
                else navigate('/register');
              }}
              className="text-[#2071a3] font-medium hover:underline cursor-pointer"
            >
              Sign up
            </a>
          </p>
        </div>

      </div>
    </div>
  );
}

export default Login;