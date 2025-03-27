'use client'
import { handleRegister } from "@/app/firebase/config";
import { useState } from "react";

export default function Rgform({ onBackClick }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleRegister(email, password);
  };

  return (
    <div className="p-10 rounded-lg bg-white w-full max-w-md">
      {/* Botón de volver atrás */}
      <button 
        onClick={onBackClick}
        className="mb-4 text-sm text-[#0d0c22] hover:underline flex items-center"
      >
        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Back
      </button>
      
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Sign Up to Dribbble</h2>
      
      <form onSubmit={handleFormSubmit} className="space-y-4">
        <div className="flex space-x-4">
          <div className="w-1/2">
            <input
              type="text"
              placeholder="Name"
              className="w-full py-4 px-8 border border-gray-300 rounded-3xl focus:outline-none focus:ring focus:ring-blue-200 text-sm"
            />
          </div>
          <div className="w-1/2">
            <input
              type="text"
              placeholder="Username"
              className="w-full py-4 px-8 border border-gray-300 rounded-3xl focus:outline-none focus:ring focus:ring-blue-200 text-sm"
            />
          </div>
        </div>
        
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="w-full py-4 px-8 border border-gray-300 rounded-3xl focus:outline-none focus:ring focus:ring-blue-200 text-sm"
        />
        
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="6+ characters"
          className="w-full py-4 px-8 border border-gray-300 rounded-3xl focus:outline-none focus:ring focus:ring-blue-200 text-sm"
        />
        
        <div className="flex items-center">
          <input
            id="terms"
            type="checkbox"
            className="h-6 w-6 text-pink-500 border-gray-300 rounded focus:ring-pink-500"
          />
          <label htmlFor="terms" className="ml-2 text-xs text-gray-600">
            I agree with Dribbble's <span className="underline text-[#0d0c22]">Terms of Service</span>,{' '}
            <span className="underline text-[#0d0c22]">Privacy Policy</span>, and default{' '}
            <span className="underline text-[#0d0c22]">Notification Settings</span>.
          </label>
        </div>
        
        <button
          type="submit"
          className="w-full py-4 px-8 text-white text-md bg-[#0d0c22] rounded-3xl hover:bg-[#565564] focus:outline-none focus:ring focus:ring-blue-200"
        >
          Create Account
        </button>
      </form>
      
      <p className="text-sm text-center text-gray-600 mt-8">
        Already have an account? <a href="Login" className="underline text-[#0d0c22]">Sign In</a>
      </p>
    </div>
  );
}