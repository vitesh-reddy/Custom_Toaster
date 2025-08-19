import React from 'react';
import { customToast } from '../utils/CustomToast';

const Demo = () => {
  const handlePromiseToast = () => {
    const demoPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        Math.random() > 0.5 
          ? resolve("Data fetched successfully!") 
          : reject("Failed to fetch data");
      }, 2000);
    });

    customToast.promise(demoPromise, {
      loading: "Fetching data...",
      success: "Successfully fetched!",
      error: "Something went wrong!",
    });
  };

  const handleSequentialLoading = () => {
    customToast.loading("Processing request...");
    
    setTimeout(() => {
      customToast.endLoadAndSuccess("Request completed successfully!");
    }, 3000);
  };

  const handleSequentialError = () => {
    customToast.loading("Attempting to connect...");
    
    setTimeout(() => {
      customToast.endLoadAndError("Connection failed!");
    }, 2500);
  };

  const demoButtons = [
    {
      label: "Success Toast",
      icon: "✅",
      action: () => customToast.success("This is a success message!"),
      className: "bg-green-500 hover:bg-green-600",
      description: "Shows a green success notification"
    },
    {
      label: "Error Toast",
      icon: "❌",
      action: () => customToast.error("This is an error message!"),
      className: "bg-red-500 hover:bg-red-600",
      description: "Shows a red error notification"
    },
    {
      label: "Loading Toast",
      icon: "⏳",
      action: () => customToast.loading("Loading..."),
      className: "bg-blue-500 hover:bg-blue-600",
      description: "Shows a blue loading notification"
    },
    {
      label: "Sequential Success",
      icon: "🎉",
      action: handleSequentialLoading,
      className: "bg-emerald-500 hover:bg-emerald-600",
      description: "Shows loading then success"
    },
    {
      label: "Sequential Error",
      icon: "⚠️",
      action: handleSequentialError,
      className: "bg-orange-500 hover:bg-orange-600",
      description: "Shows loading then error"
    },
    {
      label: "Promise Toast",
      icon: "🔄",
      action: handlePromiseToast,
      className: "bg-orange-500 hover:bg-orange-600",
      description: "Automatically handles promise states"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Interactive Demo
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Try out all the different toast types and see how they work
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-12">
        {demoButtons.map((button, index) => (
          <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-200">
            <div className="text-center">
              <div className="text-4xl mb-4">{button.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{button.label}</h3>
              <p className="text-gray-600 text-sm mb-4">{button.description}</p>
              <button
                onClick={button.action}
                className={`w-full px-4 py-2 rounded-lg text-white font-medium transition-colors duration-200 ${button.className}`}
              >
                Try It
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 border border-blue-200">
        <h2 className="text-2xl font-semibold text-blue-800 mb-4">💡 Pro Tips</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="bg-white rounded-lg p-4 border border-blue-100">
            <h3 className="font-semibold text-blue-700 mb-2">Promise Handling</h3>
            <p className="text-blue-600 text-sm">
              Use <code className="bg-blue-100 px-1 rounded">customToast.promise()</code> for automatic loading states with async operations.
            </p>
          </div>
          <div className="bg-white rounded-lg p-4 border border-blue-100">
            <h3 className="font-semibold text-blue-700 mb-2">Sequential Toasts</h3>
            <p className="text-blue-600 text-sm">
              Use <code className="bg-blue-100 px-1 rounded">endLoadAndSuccess()</code> or <code className="bg-blue-100 px-1 rounded">endLoadAndError()</code> for sequential notifications.
            </p>
          </div>
          <div className="bg-white rounded-lg p-4 border border-blue-100">
            <h3 className="font-semibold text-blue-700 mb-2">Dismiss Control</h3>
            <p className="text-blue-600 text-sm">
              Use <code className="bg-blue-100 px-1 rounded">customToast.dismiss()</code> to clear all active toasts programmatically.
            </p>
          </div>
          <div className="bg-white rounded-lg p-4 border border-blue-100">
            <h3 className="font-semibold text-blue-700 mb-2">Custom Styling</h3>
            <p className="text-blue-600 text-sm">
              All toast styles are customizable through the CustomToaster component configuration.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Demo;
