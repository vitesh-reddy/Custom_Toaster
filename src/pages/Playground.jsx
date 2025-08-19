import React from 'react';
import { customToast } from '../utils/CustomToast';

const Playground = () => {
  const handlePromiseDemo = () => {
    const demoPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        Math.random() > 0.5 
          ? resolve("Data fetched successfully!") 
          : reject("Network error occurred");
      }, 2500);
    });

    customToast.promise(demoPromise, {
      loading: "Fetching user data...",
      success: "Profile loaded successfully",
      error: "Connection failed",
    });
  };

  const handleSequentialSuccess = () => {
    customToast.loading("Processing payment...");
    setTimeout(() => {
      customToast.endLoadAndSuccess("Payment completed successfully");
    }, 3000);
  };

  const handleSequentialError = () => {
    customToast.loading("Uploading image...");
    setTimeout(() => {
      customToast.endLoadAndError("Upload failed - file too large");
    }, 2000);
  };

  const ToastButton = ({ onClick, className, icon, title, description }) => (
    <div className="group">
      <button
        onClick={onClick}
        className={`w-full p-6 rounded-2xl font-semibold text-white shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 ${className}`}
      >
        <div className="text-3xl mb-3">{icon}</div>
        <div className="text-lg mb-2">{title}</div>
        <div className="text-sm opacity-90 font-normal">{description}</div>
      </button>
    </div>
  );

  return (
    <div className="max-w-5xl mx-auto space-y-16 font-serif">
      <div className="text-center space-y-6">
        <h1 className="text-5xl font-black bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
          Playground
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
          Experiment with all toast types and see them in action
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <ToastButton
          onClick={() => customToast.success("Operation completed successfully")}
          className="bg-gradient-to-br from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700"
          icon="✅"
          title="Success Toast"
          description="Perfect for confirmations"
        />

        <ToastButton
          onClick={() => customToast.error("Something went wrong")}
          className="bg-gradient-to-br from-red-500 to-rose-600 hover:from-red-600 hover:to-rose-700"
          icon="❌"
          title="Error Toast"
          description="Handle errors gracefully"
        />

        <ToastButton
          onClick={() => customToast.loading("Processing request...")}
          className="bg-gradient-to-br from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700"
          icon="⏳"
          title="Loading Toast"
          description="Show progress to users"
        />

        <ToastButton
          onClick={handleSequentialSuccess}
          className="bg-gradient-to-br from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600"
          icon="🎯"
          title="Sequential Success"
          description="Loading → Success flow"
        />

        <ToastButton
          onClick={handleSequentialError}
          className="bg-gradient-to-br from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700"
          icon="⚠️"
          title="Sequential Error"
          description="Loading → Error flow"
        />

        <ToastButton
          onClick={handlePromiseDemo}
          className="bg-gradient-to-br from-indigo-500 to-blue-600 hover:from-indigo-600 hover:to-blue-700"
          icon="🔄"
          title="Promise Handler"
          description="Automatic state management"
        />
      </div>

      <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 border border-gray-200">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Utilities</h2>
            <p className="text-gray-600 font-light">Control and customize your toast experience</p>
          </div>
          <button
            onClick={() => customToast.dismiss()}
            className="mt-4 sm:mt-0 bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white px-6 py-3 rounded-xl font-medium transition-all duration-200 transform hover:scale-105"
          >
            Clear All Toasts
          </button>
        </div>
        
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <button
            onClick={() => {
              customToast.success("First toast");
              setTimeout(() => customToast.success("Second toast"), 500);
              setTimeout(() => customToast.success("Third toast"), 1000);
            }}
            className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-4 py-3 rounded-xl font-medium transition-all duration-200"
          >
            Multiple Toasts
          </button>
          
          <button
            onClick={() => customToast.success("This will stay for 10 seconds", { duration: 10000 })}
            className="bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-white px-4 py-3 rounded-xl font-medium transition-all duration-200"
          >
            Long Duration
          </button>
          
          <button
            onClick={() => customToast.success("Quick toast", { duration: 1000 })}
            className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white px-4 py-3 rounded-xl font-medium transition-all duration-200"
          >
            Quick Toast
          </button>
          
          <button
            onClick={() => {
              customToast.loading("Step 1 of 3...");
              setTimeout(() => customToast.endLoadAndSuccess("Process completed"), 2500);
            }}
            className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-4 py-3 rounded-xl font-medium transition-all duration-200"
          >
            Multi-Step Process
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-6 border border-emerald-200">
          <h3 className="text-xl font-bold text-emerald-900 mb-4">When to use endLoad methods</h3>
          <div className="space-y-3 text-emerald-700">
            <p className="flex items-start font-light">
              <span className="text-emerald-500 mr-2">•</span>
              <span className="text-sm">Form submissions with validation</span>
            </p>
            <p className="flex items-start font-light">
              <span className="text-emerald-500 mr-2">•</span>
              <span className="text-sm">File upload progress and results</span>
            </p>
            <p className="flex items-start font-light">
              <span className="text-emerald-500 mr-2">•</span>
              <span className="text-sm">Multi-step operations</span>
            </p>
            <p className="flex items-start font-light">
              <span className="text-emerald-500 mr-2">•</span>
              <span className="text-sm">Payment processing flows</span>
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-200">
          <h3 className="text-xl font-bold text-blue-900 mb-4">Promise vs endLoad methods</h3>
          <div className="space-y-3 text-blue-700">
            <p className="flex items-start font-light">
              <span className="text-blue-500 mr-2">•</span>
              <span className="text-sm"><strong>Promise:</strong> Automatic handling for async functions</span>
            </p>
            <p className="flex items-start font-light">
              <span className="text-blue-500 mr-2">•</span>
              <span className="text-sm"><strong>endLoad:</strong> Manual control over timing and messages</span>
            </p>
            <p className="flex items-start font-light">
              <span className="text-blue-500 mr-2">•</span>
              <span className="text-sm">Choose based on your specific use case</span>
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-orange-100 to-red-100 rounded-3xl p-8 border border-orange-200 text-center">
        <h2 className="text-3xl font-bold text-orange-900 mb-4">Enjoying CustomToast?</h2>
        <p className="text-orange-700 text-lg mb-6 font-light">
          Beautiful notifications for your React apps with zero configuration needed
        </p>
        <button
          onClick={() => customToast.success('Thanks for trying CustomToast!\n Made by KL Vitesh Reddy')}
          className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-3 rounded-2xl font-semibold transition-all duration-200 transform hover:scale-105"
        >
          Show Appreciation
        </button>
      </div>
    </div>
  );
};

export default Playground;