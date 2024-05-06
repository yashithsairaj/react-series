
## **Simple Currency Convertor Project**

### **Project Overview**

This project emphasizes on several key concepts:

- **Custom Hooks**: how to design our own custom hooks, similar to built-in hooks like useState and useEffect. This will boost our confidence in utilizing hooks effectively.

- **API Requests**: We'll explore making API requests and fetching data, an essential skill for building dynamic React applications.

- **Component Reusability**: Focusing on designing reusable components, a core principle of React development. We'll aim to create components that can be easily reused throughout our project.

### **Project Structure and Features**

The project we're building will have the following components and features:

- **Currency Converter Component**: This component will utilize a custom hook and demonstrate how data can be dynamically fetched from an API and displayed based on user input.

- **API Integration**: To work with an API that provides currency conversion rates. Users can input a currency value, select a target currency, and see the converted value.

- **URL-Based Data Fetching**: The API will be accessed via a URL, where different currency conversions can be requested by appending parameters. This adds complexity to the data fetching process.

- **Tailwind CSS Integration**: Leverage Tailwind CSS for styling, ensuring a clean and responsive user interface without spending too much time on CSS.

### **Getting Started with the Project**

To begin, let's set up the project and dive into the development process:

- Initialize a new project using the latest version of Vite.
```bash
npm init vite@latest 03currencyconverter -- --template react
cd 03currencyconverter
npm install
```
-installing Tailwind CSS
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```
- Install necessary dependencies, including React Router Dom for routing functionality.
- Start building our project, focusing on implementing custom hooks, API integration, and reusable components.

### **Hooks**

**react** hooks used in this project

- [useEffect](https://react.dev/reference/react/useEffect) : useEffect is a React Hook that lets you synchronize a component with an external system.
- [useId](https://react.dev/reference/react/useId) : useId is a React Hook for generating unique IDs that can be passed to accessibility attributes.
- [useState](https://react.dev/reference/react/useState) : useState is a React Hook that lets you add a state variable to your component.

## API Reference

#### The API used is made by [fawazahmed0](https://github.com/fawazahmed0/exchange-api/blob/main/MIGRATION.md)

```bash
https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024.5.4/v1/currencies/usd.json`


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# API

The api used is made by [fawazahmed0](https://github.com/fawazahmed0/exchange-api/blob/main/MIGRATION.md).

this is the api used [https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024.5.4/v1/currencies/usd.json](https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024.5.4/v1/currencies/usd.json)