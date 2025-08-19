import React from 'react';
import { customToast } from '../utils/CustomToast';

const Guide = () => {
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    customToast.success('Copied! 📋');
  };

  const CodeBlock = ({ children, title, language = 'jsx' }) => (
    <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-xl border border-gray-700">
      {title && (
        <div className="bg-gradient-to-r from-gray-800 to-gray-700 px-6 py-3 border-b border-gray-600">
          <span className="text-gray-300 font-medium">{title}</span>
        </div>
      )}
      <div className="relative">
        <pre className="p-6 text-sm overflow-x-auto">
          <code className="text-gray-100">{children}</code>
        </pre>
        <button
          onClick={() => copyToClipboard(children)}
          className="absolute top-4 right-4 bg-orange-600 hover:bg-orange-700 text-white px-3 py-2 rounded-lg text-xs font-medium transition-colors duration-200 flex items-center space-x-1"
        >
          <span>📋</span>
          <span>Copy</span>
        </button>
      </div>
    </div>
  );

  const MethodCard = ({ method, description, example, usage, color = 'orange' }) => {
    const colorClasses = {
      orange: 'from-orange-50 to-orange-50 border-orange-200',
      emerald: 'from-emerald-50 to-teal-50 border-emerald-200',
      rose: 'from-rose-50 to-pink-50 border-rose-200',
      amber: 'from-amber-50 to-orange-50 border-amber-200',
      blue: 'from-blue-50 to-cyan-50 border-blue-200',
      indigo: 'from-indigo-50 to-blue-50 border-indigo-200',
      gray: 'from-gray-50 to-slate-50 border-gray-200'
    };

    return (
      <div className={`bg-gradient-to-br ${colorClasses[color]} rounded-2xl p-6 border hover:shadow-lg transition-all duration-300`}>
        <h3 className="text-xl font-bold text-gray-900 mb-3">{method}</h3>
        <p className="text-gray-700 mb-4 leading-relaxed">{description}</p>
        {usage && (
          <div className="mb-4">
            <h4 className="font-semibold text-gray-800 mb-2">When to use:</h4>
            <p className="text-gray-600 text-sm">{usage}</p>
          </div>
        )}
        <CodeBlock>
          {example}
        </CodeBlock>
      </div>
    );
  };

  return (
    <div className="max-w-4xl mx-auto space-y-16">
      <div className="text-center space-y-6">
        <h1 className="text-5xl font-black bg-gradient-to-r from-orange-600 to-orange-600 bg-clip-text text-transparent">
          Complete Guide
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Everything you need to know to get started with CustomToast
        </p>
      </div>

      <div className="space-y-12">
        <section className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 border border-blue-200/50">
          <h2 className="text-3xl font-bold text-blue-900 mb-6 flex items-center">
            <span className="bg-blue-100 text-blue-600 rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold mr-4">1</span>
            Installation
          </h2>
          <div className="space-y-6">
            <div>
              <p className="text-blue-800 mb-4 text-lg">Install the required dependency:</p>
              <CodeBlock title="Terminal">
npm install react-hot-toast
              </CodeBlock>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-8 border border-emerald-200/50">
          <h2 className="text-3xl font-bold text-emerald-900 mb-6 flex items-center">
            <span className="bg-emerald-100 text-emerald-600 rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold mr-4">2</span>
            Setup CustomToast
          </h2>
          <div className="space-y-6">
            <div>
              <p className="text-emerald-800 mb-4 text-lg">Create the utility file at <code className="bg-emerald-100 px-2 py-1 rounded font-mono text-sm">src/utils/CustomToast.jsx</code>:</p>
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
        style: { background: '#C0E8D5' },
        iconTheme: { primary: '#0F7A4A', secondary: '#ffffff' },
      },
      error: {
        style: { background: '#F9D9D9' },
        iconTheme: { primary: '#B00020', secondary: '#ffffff' },
      },
      loading: {
        style: { background: '#DDEBF9' },
        iconTheme: { primary: '#1E5BA6', secondary: '#ffffff' },
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
          </div>
        </section>

        <section className="bg-gradient-to-br from-orange-50 to-pink-50 rounded-3xl p-8 border border-orange-200/50">
          <h2 className="text-3xl font-bold text-orange-900 mb-6 flex items-center">
            <span className="bg-orange-100 text-orange-600 rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold mr-4">3</span>
            Add to Your App
          </h2>
          <div className="space-y-6">
            <div>
              <p className="text-orange-800 mb-4 text-lg">Import and add the CustomToaster to your main App component:</p>
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
          </div>
        </section>

        <section className="space-y-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              API Methods
            </h2>
            <p className="text-xl text-gray-600">
              All available methods and when to use them
            </p>
          </div>

          <div className="grid gap-8">
            <MethodCard
              method="customToast.success(message)"
              description="Display a beautiful green success notification with checkmark icon."
              usage="Perfect for confirming successful operations like saving data, completing tasks, or successful API responses."
              example="customToast.success('Profile updated successfully! 🎉');"
              color="emerald"
            />

            <MethodCard
              method="customToast.error(message)"
              description="Show a red error notification with an X icon to indicate something went wrong."
              usage="Use when operations fail, validation errors occur, or API requests return errors."
              example="customToast.error('Failed to save changes. Please try again.');"
              color="rose"
            />

            <MethodCard
              method="customToast.loading(message)"
              description="Display a blue loading notification with a spinner animation."
              usage="Show during long-running operations like API calls, file uploads, or data processing."
              example="customToast.loading('Uploading file... Please wait');"
              color="blue"
            />

            <MethodCard
              method="customToast.dismiss()"
              description="Instantly remove all currently visible toast notifications from the screen."
              usage="Clear the screen when navigating to new pages or when you want a clean slate."
              example="customToast.dismiss();"
              color="gray"
            />

            <MethodCard
              method="customToast.endLoadAndSuccess(message)"
              description="This powerful method first dismisses any existing toasts (especially loading ones) and then immediately shows a success message."
              usage="Perfect for multi-step processes: start with loading toast, then call this when the operation succeeds. Great for form submissions, data processing, or file uploads."
              example={`// Start loading
customToast.loading('Processing payment...');

// After success, replace with success message
setTimeout(() => {
  customToast.endLoadAndSuccess('Payment completed! 💳');
}, 3000);`}
              color="emerald"
            />

            <MethodCard
              method="customToast.endLoadAndError(message)"
              description="Similar to endLoadAndSuccess, but shows an error message instead. First dismisses existing toasts, then displays the error."
              usage="Use when operations fail after showing a loading state. Provides smooth transition from loading to error state."
              example={`// Start loading
customToast.loading('Connecting to server...');

// After error, replace with error message
setTimeout(() => {
  customToast.endLoadAndError('Connection failed! Check your internet.');
}, 2000);`}
              color="rose"
            />

            <MethodCard
              method="customToast.promise(promise, options)"
              description="The most powerful method that automatically handles Promise states. Shows loading, then success or error based on the Promise result."
              usage="Perfect for async operations like API calls, file operations, or any Promise-based code. Handles all states automatically."
              example={`const fetchUserData = async () => {
  const response = await fetch('/api/user');
  if (!response.ok) throw new Error('Failed to fetch');
  return response.json();
};

customToast.promise(fetchUserData(), {
  loading: 'Fetching user data...',
  success: 'User data loaded successfully! 👤',
  error: 'Could not load user data'
});`}
              color="indigo"
            />
          </div>
        </section>

        <section className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-8 border border-amber-200/50">
          <h2 className="text-3xl font-bold text-amber-900 mb-6">
            💡 Pro Tips
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="bg-white/70 rounded-xl p-6 border border-amber-200">
              <h3 className="font-bold text-amber-800 mb-2">🎯 Sequential Operations</h3>
              <p className="text-amber-700 text-sm leading-relaxed">
                Use <code className="bg-amber-100 px-1 rounded">endLoadAndSuccess</code> and <code className="bg-amber-100 px-1 rounded">endLoadAndError</code> 
                for operations that have distinct loading and result phases.
              </p>
            </div>
            <div className="bg-white/70 rounded-xl p-6 border border-amber-200">
              <h3 className="font-bold text-amber-800 mb-2">⚡ Promise Handling</h3>
              <p className="text-amber-700 text-sm leading-relaxed">
                <code className="bg-amber-100 px-1 rounded">customToast.promise</code> is perfect for API calls 
                as it automatically handles all three states without extra code.
              </p>
            </div>
            <div className="bg-white/70 rounded-xl p-6 border border-amber-200">
              <h3 className="font-bold text-amber-800 mb-2">🧹 Clean UI</h3>
              <p className="text-amber-700 text-sm leading-relaxed">
                Use <code className="bg-amber-100 px-1 rounded">dismiss()</code> when navigating 
                between pages to avoid toast pollution.
              </p>
            </div>
            <div className="bg-white/70 rounded-xl p-6 border border-amber-200">
              <h3 className="font-bold text-amber-800 mb-2">🎨 Consistent Design</h3>
              <p className="text-amber-700 text-sm leading-relaxed">
                All toast styles are carefully designed to work together and 
                provide a cohesive user experience.
              </p>
            </div>
          </div>
        </section>

        <div className="bg-gradient-to-br from-orange-100 to-orange-100 rounded-3xl p-8 border border-orange-200/50 text-center">
          <h2 className="text-3xl font-bold text-orange-900 mb-4">🚀 You're Ready!</h2>
          <p className="text-orange-700 text-lg mb-6">
            CustomToast is now set up and ready to make your app more delightful!
          </p>
          <button
            onClick={() => customToast.success('Welcome to the CustomToast family! 🎉')}
            className="bg-gradient-to-r from-orange-600 to-orange-600 hover:from-orange-700 hover:to-orange-700 text-white px-8 py-3 rounded-2xl font-bold transition-all duration-200 transform hover:scale-105"
          >
            ✨ Test Your Setup
          </button>
        </div>
      </div>
    </div>
  );
};

export default Guide;
