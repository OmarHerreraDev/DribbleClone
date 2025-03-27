'use client'
import { FcGoogle } from "react-icons/fc";

export default function Rg({ onContinueClick }) {
  return (
    <div className="p-10 rounded-lg bg-white w-full max-w-md">
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Sign Up to Dribble</h2>
      
      <button className="flex items-center justify-center w-full py-4 px-8 mb-6 text-md font-medium text-white borde bg-[#0d0c22] rounded-3xl hover:bg-[#565564]">
        <FcGoogle className="mr-2 text-2xl" /> Sign up with Google
      </button>
      
      <div className="text-center text-gray-500 text-sm mb-6">or</div>
      
      <button
        onClick={onContinueClick}
        className="w-full py-4 px-8 text-black text-md bg-white border border-gray-300 rounded-3xl focus:outline-none focus:ring focus:ring-blue-200"
      >
        Continue With Our Email
      </button>
      
      <p className="text-xs text-center text-gray-600 mt-16">
        By creating an account you agree with our <span className="underline text-[#0d0c22]">Terms of Service</span>, <span className="underline text-[#0d0c22]">Privacy Policy</span>, and our default <span className="underline text-[#0d0c22]">Notification Settings</span>.
      </p>
      
      <p className="text-sm text-center text-gray-600 mt-8">
        Already have an account? <a href="Login" className="underline text-[#0d0c22]">Sign In</a>
      </p>
    </div>
  );
}