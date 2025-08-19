import React from 'react';
import { customToast } from '../utils/CustomToast';

const Installation = () => {
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    customToast.success('Copied to clipboard!');
  };

  const CodeBlock = ({ children, title }) => (
    <div className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
      {title && (
        <div className="bg-gray-50 px-4 py-2 border-b border-gray-200">
          <h3 className="font-semibold text-gray-700">{title}</h3>
        </div>
      )}
      <div className="relative">
        <pre className="bg-gray-900 text-white p-4 overflow-x-auto">
          <code>{children}</code>
        </pre>
        <button
          onClick={() => copyToClipboard(children)}
          className="absolute top-2 right-2 bg-gray-700 hover:bg-gray-600 text-white px-3 py-1 rounded text-sm transition-colors duration-200"
        >
          Copy
        </button>
      </div>
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Installation Guide</h1>
        <p className="text-xl text-gray-600">
          Get up and running with CustomToast in just a few simple steps
        </p>
      </div>

      <div className="space-y-8">
        <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
          <h2 className="text-2xl font-semibold mb-6 flex items-center">
            <span className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">1</span>
            Install Dependencies
          </h2>
          <p className="text-gray-600 mb-4">
            First, install react-hot-toast if you haven't already:
          </p>
          <CodeBlock>npm install react-hot-toast</CodeBlock>
        </div>

        <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
          <h2 className="text-2xl font-semibold mb-6 flex items-center">
            <span className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">2</span>
            Create CustomToast Utility
          </h2>
          <p className="text-gray-600 mb-4">
            Create a new file at <code className="bg-gray-100 px-2 py-1 rounded">/src/utils/CustomToast.jsx</code>:
          </p>
          <CodeBlock title="src/utils/CustomToast.jsx">
{`import { Toaster, toast } from 'react-hot-toast';

export const CustomToaster = () => (
  <Toaster
    position="top-center"
    toastOptions={{
      duration: 4000,
      style: {
        background: '#F3F1F0',
        color: '#5E4C46',    
        borderRadius: '10px',
        fontSize: '0.9rem',
        padding: '12px 16px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
      },
      success: {
        style: {
          background: '#C0E8D5',
        },
        iconTheme: {
          primary: '#0F7A4A',   
          secondary: '#ffffff',
        },
      },
      error: {
        style: {
          background: '#F9D9D9',
        },
        iconTheme: {
          primary: '#B00020',   
          secondary: '#ffffff',
        },
      },
      loading: {
        style: {
          background: '#DDEBF9',
        },
        iconTheme: {
          primary: '#1E5BA6',   
          secondary: '#ffffff',
        },
      },
    }}
  />
);

export const customToast = {
  success: (message) => toast.success(message),
  error: (message) => toast.error(message),
  loading: (message) => toast.loading(message),
  dismiss: () => toast.dismiss(),
  endLoadAndSuccess: (message) => {
    toast.dismiss(); 
    toast.success(message);
  },
  endLoadAndError: (message) => {
    toast.dismiss(); 
    toast.error(message);
  },
  promise: (promise, { loading, success, error }) =>
    toast.promise(promise, { loading, success, error }),
};`}
          </CodeBlock>
        </div>

        <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
          <h2 className="text-2xl font-semibold mb-6 flex items-center">
            <span className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">3</span>
            Add to Your App
          </h2>
          <p className="text-gray-600 mb-4">
            Import and add the CustomToaster component to your main App.jsx file:
          </p>
          <CodeBlock title="src/App.jsx">
{`import React from 'react';
import { CustomToaster } from './utils/CustomToast';

function App() {
  return (
    <div className="App">
      <CustomToaster />
      {/* Your other components */}
    </div>
  );
}

export default App;`}
          </CodeBlock>
        </div>

        <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
          <h2 className="text-2xl font-semibold mb-6 flex items-center">
            <span className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">4</span>
            Start Using
          </h2>
          <p className="text-gray-600 mb-4">
            Now you can use the custom toast in any component:
          </p>
          <CodeBlock title="Example Usage">
{`import { customToast } from './utils/CustomToast';

const MyComponent = () => {
  const handleClick = () => {
    customToast.success('Hello World!');
  };

  return (
    <button onClick={handleClick}>
      Show Toast
    </button>
  );
};`}
          </CodeBlock>
        </div>

        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-8 border border-green-200">
          <h2 className="text-2xl font-semibold text-green-800 mb-4">🎉 You're All Set!</h2>
          <p className="text-green-700 mb-4">
            CustomToast is now ready to use in your React project. Check out the demo page to see all available methods in action.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => customToast.success('Installation completed successfully!')}
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-200"
            >
              Test Installation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Installation;
