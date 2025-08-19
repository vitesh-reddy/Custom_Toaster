import React from 'react';
import { customToast } from '../utils/CustomToast';

const APIReference = () => {
  const copyCode = (code) => {
    navigator.clipboard.writeText(code);
    customToast.success('Code copied to clipboard!');
  };

  const MethodCard = ({ method, description, syntax, example, returnType }) => (
    <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-semibold text-gray-900">{method}</h3>
        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
          {returnType}
        </span>
      </div>
      
      <p className="text-gray-600 mb-4">{description}</p>
      
      <div className="space-y-4">
        <div>
          <h4 className="font-semibold text-gray-700 mb-2">Syntax</h4>
          <div className="bg-gray-900 rounded-lg p-3 relative">
            <code className="text-green-400 text-sm">{syntax}</code>
            <button
              onClick={() => copyCode(syntax)}
              className="absolute top-2 right-2 bg-gray-700 hover:bg-gray-600 text-white px-2 py-1 rounded text-xs transition-colors duration-200"
            >
              Copy
            </button>
          </div>
        </div>
        
        <div>
          <h4 className="font-semibold text-gray-700 mb-2">Example</h4>
          <div className="bg-gray-900 rounded-lg p-3 relative">
            <code className="text-blue-400 text-sm">{example}</code>
            <button
              onClick={() => copyCode(example)}
              className="absolute top-2 right-2 bg-gray-700 hover:bg-gray-600 text-white px-2 py-1 rounded text-xs transition-colors duration-200"
            >
              Copy
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const methods = [
    {
      method: 'customToast.success()',
      description: 'Displays a success toast notification with green styling.',
      syntax: 'customToast.success(message: string)',
      example: "customToast.success('Data saved successfully!');",
      returnType: 'string'
    },
    {
      method: 'customToast.error()',
      description: 'Displays an error toast notification with red styling.',
      syntax: 'customToast.error(message: string)',
      example: "customToast.error('Failed to save data!');",
      returnType: 'string'
    },
    {
      method: 'customToast.loading()',
      description: 'Displays a loading toast notification with blue styling and spinner.',
      syntax: 'customToast.loading(message: string)',
      example: "customToast.loading('Processing request...');",
      returnType: 'string'
    },
    {
      method: 'customToast.dismiss()',
      description: 'Dismisses all currently active toast notifications.',
      syntax: 'customToast.dismiss()',
      example: 'customToast.dismiss();',
      returnType: 'void'
    },
    {
      method: 'customToast.endLoadAndSuccess()',
      description: 'Dismisses all current toasts and shows a success message.',
      syntax: 'customToast.endLoadAndSuccess(message: string)',
      example: "customToast.endLoadAndSuccess('Operation completed!');",
      returnType: 'string'
    },
    {
      method: 'customToast.endLoadAndError()',
      description: 'Dismisses all current toasts and shows an error message.',
      syntax: 'customToast.endLoadAndError(message: string)',
      example: "customToast.endLoadAndError('Operation failed!');",
      returnType: 'string'
    },
    {
      method: 'customToast.promise()',
      description: 'Automatically handles promise states with loading, success, and error messages.',
      syntax: 'customToast.promise(promise: Promise, messages: {loading: string, success: string, error: string})',
      example: `customToast.promise(
  fetchData(),
  {
    loading: 'Fetching data...',
    success: 'Data loaded!',
    error: 'Failed to load data'
  }
);`,
      returnType: 'Promise'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">API Reference</h1>
        <p className="text-xl text-gray-600">
          Complete documentation for all CustomToast methods and their usage
        </p>
      </div>

      <div className="mb-8">
        <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-xl p-6 border border-indigo-200">
          <h2 className="text-2xl font-semibold text-indigo-800 mb-4">Quick Import</h2>
          <div className="bg-white rounded-lg p-4 border border-indigo-100">
            <div className="bg-gray-900 rounded-lg p-3 relative">
              <code className="text-green-400">
                import {`{ customToast }`} from './utils/CustomToast';
              </code>
              <button
                onClick={() => copyCode("import { customToast } from './utils/CustomToast';")}
                className="absolute top-2 right-2 bg-gray-700 hover:bg-gray-600 text-white px-2 py-1 rounded text-xs transition-colors duration-200"
              >
                Copy
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-1 xl:grid-cols-2 mb-12">
        {methods.map((method, index) => (
          <MethodCard key={index} {...method} />
        ))}
      </div>

      <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200 mb-8">
        <h2 className="text-2xl font-semibold mb-6">Configuration Options</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">CustomToaster Props</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="py-3 px-4 font-semibold text-gray-700">Property</th>
                    <th className="py-3 px-4 font-semibold text-gray-700">Type</th>
                    <th className="py-3 px-4 font-semibold text-gray-700">Default</th>
                    <th className="py-3 px-4 font-semibold text-gray-700">Description</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4 font-mono text-blue-600">position</td>
                    <td className="py-3 px-4">string</td>
                    <td className="py-3 px-4 font-mono">'top-center'</td>
                    <td className="py-3 px-4">Toast position on screen</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4 font-mono text-blue-600">duration</td>
                    <td className="py-3 px-4">number</td>
                    <td className="py-3 px-4 font-mono">4000</td>
                    <td className="py-3 px-4">Default duration in milliseconds</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4 font-mono text-blue-600">style</td>
                    <td className="py-3 px-4">object</td>
                    <td className="py-3 px-4">Custom</td>
                    <td className="py-3 px-4">Base styling for all toasts</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Toast Variants</h3>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                <div className="font-semibold text-green-800">Success</div>
                <div className="text-green-600 text-sm">Light green background</div>
              </div>
              <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                <div className="font-semibold text-red-800">Error</div>
                <div className="text-red-600 text-sm">Light red background</div>
              </div>
              <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <div className="font-semibold text-blue-800">Loading</div>
                <div className="text-blue-600 text-sm">Light blue background</div>
              </div>
              <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <div className="font-semibold text-yellow-800">Warning</div>
                <div className="text-yellow-600 text-sm">Light yellow background</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-8 border border-purple-200">
        <h2 className="text-2xl font-semibold text-purple-800 mb-4">Need Help?</h2>
        <p className="text-purple-700 mb-4">
          If you have questions or need assistance with CustomToast, feel free to reach out!
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={() => customToast.success('Thanks for using CustomToast! 💜')}
            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-200"
          >
            Say Thanks
          </button>
          <button
            onClick={() => customToast.success('Created with ❤️ by KL Vitesh Reddy')}
            className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-200"
          >
            About Creator
          </button>
        </div>
      </div>
    </div>
  );
};

export default APIReference;
