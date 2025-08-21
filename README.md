# 🚀 Custom Toaster by Vitesh

A React project showcasing a **custom toast system** built on top of [`react-hot-toast`](https://react-hot-toast.com/).  
This provides reusable functions for success, error, loading, promise-based, and dismissible toasts.

---

## 📦 Features
- ✅ Success, Error, Loading toasts  
- ✅ End loading with success or error  
- ✅ Promise-based toasts (auto-handled states)  
- ✅ Dismiss all toasts  
- ⚡ Built with TailwindCSS for styling  

---

## 🛠 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/vitesh-reddy/Custom_Toaster.git
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

##  Toast Types Available

- `customToast.success("Message")`
- `customToast.error("Message")`
- `customToast.loading("Message")`
- `customToast.endLoadAndSuccess("Message")`
- `customToast.endLoadAndError("Message")`
- `customToast.promise(promise, { loading, success, error })`
- `customToast.dismiss()`

---

## 📜 License
MIT License © 2025  
Feel free to use and modify for your projects.
