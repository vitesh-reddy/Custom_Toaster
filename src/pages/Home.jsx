import React from 'react';
import { Link } from 'react-router-dom';
import { customToast } from '../utils/CustomToast';

const Home = () => {
  return (
    <div className="space-y-20 font-serif">
      <div className="text-center space-y-8">
        <div className="relative">
          <h1 className="text-6xl sm:text-8xl font-black mb-4 font-serif">
            <span className="bg-gradient-to-br from-orange-500 via-red-500 to-pink-600 bg-clip-text text-transparent">
              Custom
            </span>
            <br/>
            <span className="bg-gradient-to-br from-amber-500 via-orange-500 to-red-500 bg-clip-text text-transparent">
              Toast
            </span>
          </h1>
          <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full animate-bounce opacity-60"></div>
          <div className="absolute -bottom-2 -left-8 w-12 h-12 bg-gradient-to-br from-orange-400 to-red-400 rounded-full animate-pulse opacity-50"></div>
        </div>
        
        <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed font-light">
          Beautiful, customizable toast notifications with seamless promise handling 
          and elegant animations
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            to="/guide"
            className="group px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Get Started
            <div className="w-0 group-hover:w-full h-0.5 bg-white/30 rounded-full transition-all duration-300"></div>
          </Link>
          
          <Link
            to="/playground"
            className="px-8 py-4 bg-white/80 backdrop-blur text-gray-700 rounded-2xl font-semibold text-lg border border-orange-200 hover:bg-white hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            Try Live Demo
          </Link>
          
          <button
            onClick={() => customToast.success('Welcome to CustomToast!')}
            className="px-8 py-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Try Now
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="group p-8 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl border border-blue-200/50 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
          <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">✨</div>
          <h3 className="text-2xl font-bold text-blue-900 mb-4">Stunning Design</h3>
          <p className="text-blue-700 leading-relaxed font-light">
            Carefully crafted with beautiful gradients, smooth animations, and perfect typography
          </p>
        </div>
        
        <div className="group p-8 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl border border-emerald-200/50 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
          <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">⚡</div>
          <h3 className="text-2xl font-bold text-emerald-900 mb-4">Super Simple</h3>
          <p className="text-emerald-700 leading-relaxed font-light">
            One-line implementation with intuitive API that makes notifications effortless
          </p>
        </div>
        
        <div className="group p-8 bg-gradient-to-br from-orange-50 to-red-50 rounded-3xl border border-orange-200/50 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
          <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">🔄</div>
          <h3 className="text-2xl font-bold text-orange-900 mb-4">Promise Magic</h3>
          <p className="text-orange-700 leading-relaxed font-light">
            Automatically handles async operations with loading states and result notifications
          </p>
        </div>
      </div>

      <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 sm:p-12 overflow-hidden">
        <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-full blur-2xl"></div>
        
        <div className="relative z-10">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            See it in Action
          </h2>
          <div className="bg-gray-800 rounded-2xl p-6 font-mono text-sm overflow-x-auto">
            <div className="text-gray-400 mb-2">// Import and use</div>
            <div className="text-cyan-400">
              <span className="text-orange-400">import</span> {`{ customToast }`} <span className="text-orange-400">from</span> <span className="text-green-400">'./utils/CustomToast'</span>
            </div>
            <div className="mt-4 text-gray-400">// Show beautiful notifications</div>
            <div className="text-yellow-400">customToast<span className="text-white">.</span><span className="text-green-400">success</span><span className="text-white">(</span><span className="text-green-400">'Data saved successfully!'</span><span className="text-white">)</span></div>
            <div className="mt-2 text-yellow-400">customToast<span className="text-white">.</span><span className="text-red-400">error</span><span className="text-white">(</span><span className="text-green-400">'Something went wrong'</span><span className="text-white">)</span></div>
            <div className="mt-4 text-gray-400">// Handle promises automatically</div>
            <div className="text-yellow-400">customToast<span className="text-white">.</span><span className="text-blue-400">promise</span><span className="text-white">(</span>fetchData<span className="text-white">(), {`{`}</span></div>
            <div className="text-white ml-4">loading<span className="text-white">:</span> <span className="text-green-400">'Loading...'</span>,</div>
            <div className="text-white ml-4">success<span className="text-white">:</span> <span className="text-green-400">'Success!'</span>,</div>
            <div className="text-white ml-4">error<span className="text-white">:</span> <span className="text-green-400">'Failed!'</span></div>
            <div className="text-white">{`}`}<span className="text-white">)</span></div>
          </div>
        </div>
      </div>

      <div className="text-center bg-gradient-to-r from-orange-100 to-red-100 rounded-3xl p-12 border border-orange-200/50">
        <h2 className="text-3xl font-bold text-orange-900 mb-4">
          Created with Love 🧡
        </h2>
        <p className="text-orange-700 text-lg mb-2">
          <span className="font-bold">KL Vitesh Reddy</span>
        </p>
        <p className="text-orange-600 font-light">
          Full Stack Developer
        </p>
      </div>
    </div>
  );
};

export default Home;
