import React from 'react';
import { Link } from 'react-router-dom';
import { customToast } from '../utils/CustomToast';

const Home = () => {
  return (
    <div className="text-center">
      <div className="mb-12">
        <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6">
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            CustomToast
          </span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          A beautiful and customizable toast notification utility built on top of react-hot-toast. 
          Features elegant styling, multiple variants, and powerful promise handling.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            to="/installation"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
          >
            Get Started
          </Link>
          <Link
            to="/demo"
            className="bg-white hover:bg-gray-50 text-gray-700 px-8 py-3 rounded-lg font-semibold border border-gray-300 transition-colors duration-200"
          >
            View Demo
          </Link>
          <button
            onClick={() => customToast.success('Welcome to CustomToast! 🎉')}
            className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200"
          >
            Try It Now
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
          <div className="text-4xl mb-4">🎨</div>
          <h3 className="text-xl font-semibold mb-2">Beautiful Design</h3>
          <p className="text-gray-600">
            Custom styled toasts with different variants for success, error, loading, and warning states.
          </p>
        </div>
        
        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
          <div className="text-4xl mb-4">⚡</div>
          <h3 className="text-xl font-semibold mb-2">Easy to Use</h3>
          <p className="text-gray-600">
            Simple API that makes showing notifications effortless with just one line of code.
          </p>
        </div>
        
        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
          <div className="text-4xl mb-4">🔄</div>
          <h3 className="text-xl font-semibold mb-2">Promise Handling</h3>
          <p className="text-gray-600">
            Built-in promise support that automatically handles loading states and results.
          </p>
        </div>
      </div>

      <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
        <h2 className="text-2xl font-bold mb-6">Quick Preview</h2>
        <div className="bg-gray-900 rounded-lg p-6 text-left">
          <code className="text-green-400">
            <span className="text-blue-400">import</span> {`{ customToast }`} <span className="text-blue-400">from</span> <span className="text-yellow-300">'./utils/CustomToast'</span>;<br/><br/>
            <span className="text-gray-500">// Show success message</span><br/>
            <span className="text-purple-400">customToast</span>.<span className="text-green-400">success</span>(<span className="text-yellow-300">'Data saved successfully!'</span>);<br/><br/>
            <span className="text-gray-500">// Handle promises automatically</span><br/>
            <span className="text-purple-400">customToast</span>.<span className="text-green-400">promise</span>(fetchData(), {`{`}<br/>
            &nbsp;&nbsp;<span className="text-blue-400">loading</span>: <span className="text-yellow-300">'Fetching data...'</span>,<br/>
            &nbsp;&nbsp;<span className="text-blue-400">success</span>: <span className="text-yellow-300">'Data loaded!'</span>,<br/>
            &nbsp;&nbsp;<span className="text-blue-400">error</span>: <span className="text-yellow-300">'Failed to load data'</span><br/>
            {`}`});
          </code>
        </div>
      </div>

      <div className="mt-12 text-center">
        <p className="text-gray-600 mb-4">Created by</p>
        <h3 className="text-2xl font-bold text-gray-900">KL Vitesh Reddy</h3>
        <p className="text-gray-500">Full Stack Developer</p>
      </div>
    </div>
  );
};

export default Home;
