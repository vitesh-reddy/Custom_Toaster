# 🚀 Custom Toaster by Vitesh

A React project showcasing a **custom toast notification system** built on top of [`react-hot-toast`](https://react-hot-toast.com/).  
This demo provides reusable functions for success, error, loading, promise-based, and dismissible toasts.

---

## 📦 Features
- ✅ Success, Error, Loading toasts  
- ✅ End loading with success or error  
- ✅ Promise-based toasts (auto-handled states)  
- ✅ Dismiss all toasts  
- ✅ Custom **Button** component (no external UI library required)  
- ⚡ Built with TailwindCSS for styling  

---

## 🛠 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/custom-toast-demo.git
   cd Custom_Toaster
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

---

## 📂 Project Structure

```
src/
 ├─ components/
 │   ├─ Button.jsx        # Reusable button component (Tailwind styled)
 │   └─ ToastDemo.jsx     # Demo page with all toast examples
 │
 ├─ utils/
 │   └─ CustomToast.jsx   # Toast utility with reusable functions
 │
 ├─ App.jsx               # Main app entry
 └─ main.jsx              # React entry point
```

---

## ⚡ Usage

### Import toaster in `App.jsx`
```jsx
import { CustomToaster } from "./utils/CustomToast";
import ToastDemo from "./components/ToastDemo";

function App() {
  return (
    <div>
      <CustomToaster />
      <ToastDemo />
    </div>
  );
}

export default App;
```

### Example: Trigger a success toast
```jsx
import { customToast } from "../utils/CustomToast";

customToast.success("Operation successful!");
```

### Example: Trigger a promise-based toast
```jsx
customToast.promise(
  fetch("/api/data").then(res => res.json()),
  {
    loading: "Fetching data...",
    success: "Data loaded successfully!",
    error: "Failed to load data.",
  }
);
```

---

## 🌈 Toast Types Available

- `customToast.success("Message")`
- `customToast.error("Message")`
- `customToast.loading("Message")`
- `customToast.endLoadAndSuccess("Message")`
- `customToast.endLoadAndError("Message")`
- `customToast.promise(promise, { loading, success, error })`
- `customToast.dismiss()`

---

## 📸 Demo Preview

> Buttons to trigger different toast types:

![Toast Demo Screenshot](https://raw.githubusercontent.com/your-username/custom-toast-demo/main/demo.png)

---

## 📜 License
MIT License © 2025  
Feel free to use and modify for your projects.

