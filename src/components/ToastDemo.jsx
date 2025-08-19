import React from "react";
import { customToast, CustomToaster } from "../utils/CustomToast";

const ToastDemo = () => {
  const handlePromiseToast = () => {
    const demoPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        // Random success or error
        Math.random() > 0.5 ? resolve("Data fetched!") : reject("Failed to fetch data");
      }, 2000);
    });

    customToast.promise(demoPromise, {
      loading: "Fetching data...",
      success: "Successfully fetched!",
      error: "Something went wrong!",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-12 px-4 text-gray-800">

      <h1 className="text-2xl font-bold mb-6 text-center">
        🔔 Custom Toast Demo
      </h1>

      <p className="max-w-xl text-center mb-8 text-gray-600">
        This page demonstrates different toast notifications using the{" "}
        <code className="bg-gray-200 px-1 py-0.5 rounded text-sm">
          customToast
        </code>{" "}
        utility built on top of <b>react-hot-toast</b>.
      </p>

      {/* Buttons */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <button
          onClick={() => customToast.success("This is a success message!")}
          className="px-4 py-2 rounded-lg bg-green-500 text-white hover:bg-green-600"
        >
          ✅ Success Toast
        </button>

        <button
          onClick={() => customToast.error("This is an error message!")}
          className="px-4 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600"
        >
          ❌ Error Toast
        </button>

        <button
          onClick={() => customToast.loading("Loading...")}
          className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600"
        >
          ⏳ Loading Toast
        </button>

        <button
          onClick={() => customToast.endLoadAndSuccess("Finished with Success!")}
          className="px-4 py-2 rounded-lg bg-emerald-500 text-white hover:bg-emerald-600"
        >
          🎉 End Loading → Success
        </button>

        <button
          onClick={() => customToast.endLoadAndError("Finished with Error!")}
          className="px-4 py-2 rounded-lg bg-orange-500 text-white hover:bg-orange-600"
        >
          ⚠️ End Loading → Error
        </button>

        <button
          onClick={handlePromiseToast}
          className="px-4 py-2 rounded-lg bg-orange-500 text-white hover:bg-orange-600"
        >
          🔄 Promise Toast
        </button>

        <button
          onClick={() => customToast.dismiss()}
          className="px-4 py-2 rounded-lg bg-gray-500 text-white hover:bg-gray-600 col-span-full"
        >
          🛑 Dismiss All Toasts
        </button>
      </div>

      {/* Usage Guide */}
      <div className="mt-12 max-w-2xl text-left text-sm bg-white shadow-md rounded-lg p-6 border border-gray-200">
        <h2 className="text-lg font-semibold mb-4">📘 Usage Guide</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <code>customToast.success("msg")</code> → Show a green success toast
          </li>
          <li>
            <code>customToast.error("msg")</code> → Show a red error toast
          </li>
          <li>
            <code>customToast.loading("msg")</code> → Show a blue loading toast
          </li>
          <li>
            <code>customToast.endLoadAndSuccess("msg")</code> → Dismiss current
            loading and show success
          </li>
          <li>
            <code>customToast.endLoadAndError("msg")</code> → Dismiss current
            loading and show error
          </li>
          <li>
            <code>
              customToast.promise(promise, &#123; loading, success, error &#125;)
            </code>{" "}
            → Automatically handles loading + result of a promise
          </li>
          <li>
            <code>customToast.dismiss()</code> → Dismiss all active toasts
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ToastDemo;
