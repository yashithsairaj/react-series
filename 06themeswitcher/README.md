## Understanding the Context API with a Theme Toggler Project

This project will reinforce our understanding of the Context API and introduce another way of writing context using a custom hook.

### Revisiting the Context API

By now, you should have a solid grasp of the Context API. It's straightforward: create a context, create a provider, and ensure all components are aware of it. We'll take a different approach to writing the context by using a custom hook. This method simplifies the repeated use of `useContext` by consolidating everything in one place. This style of writing code can make the Context API seem complex, but after this, it will make much more sense.

### Project Overview

We'll build a simple theme toggler. It may look basic, but it's an excellent exercise for practicing context usage. Here's what we'll be working on:

#### Core Components and Features

1. **Theme Toggler Component**: This component will allow toggling the theme for a specific card. It will be aware of the current theme value (on or off) and adjust accordingly.

2. **Custom Hook for Context**: Instead of using `useContext` in every component, we'll create a custom hook to handle context operations. This simplifies the code and makes it more readable.

3. **Tailwind CSS Integration**: We'll use Tailwind CSS for styling. Tailwind's dark mode classes will help us implement the theme toggling efficiently.

### Detailed Breakdown

We'll follow these steps to build the project:

1. **Set Up Context and Provider**: Create a context and provider for the theme toggler. Ensure all necessary components are wrapped with this provider.

2. **Create a Custom Hook**: Develop a custom hook to handle context operations. This hook will encapsulate the logic of using the context and provide an easy-to-use interface.

3. **Implement Theme Toggler**: Build the theme toggler component. This component will toggle the theme for the card based on the context value.

4. **Integrate Tailwind CSS**: Use Tailwind CSS to style the components. Leverage Tailwind's dark mode classes to handle theme changes seamlessly.

### User Experience

The theme toggler will allow users to switch between light and dark modes for the card. When the theme is toggled, the dark mode classes will be applied or removed, providing immediate visual feedback.

### Conclusion

By the end of this project, you'll have a deeper understanding of the Context API and how to write custom hooks for context operations. This approach not only simplifies code but also enhances readability and maintainability. So, let's get started and build this simple yet powerful theme toggler from scratch!

Let's dive in and get started from scratch. Here we go!

## Project Setup

Let's set up a new React project using `create vite@latest` and install necessary dependencies.

```bash
npm init vite@latest 07-react-router -- --template react
cd 06themeswitcher
npm install
```
installing Tailwind CSS
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
