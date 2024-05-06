

# Simple React Router Project

A brief description of what this project does. 
-
This project shows the use of many hooks provided by reat-router-dom.



## Hooks and Components

**react-router-dom** provides few components and hooks such as:

- [Outlet](https://reactrouter.com/en/main/components/outlet) : An <Outlet> should be used in parent route elements to render their child route elements. This allows nested UI to show up when child routes are rendered. If the parent route matched exactly, it will render a child index route or nothing if there is no index route.
- [Link](https://reactrouter.com/en/main/components/link) : A <Link> is an element that lets the user navigate to another page by clicking or tapping on it. In react-router-dom, a <Link> renders an accessible <a> element with a real href that points to the resource it's linking to.
- [NavLink](https://reactrouter.com/en/main/components/nav-link) : A <NavLink> is a special kind of <Link> that knows whether or not it is "active", "pending", or "transitioning".
- [useParams](https://reactrouter.com/en/main/hooks/use-params) : The useParams hook returns an object of key/value pairs of the dynamic params from the current URL that were matched by the <Route path>. Child routes inherit all params from their parent routes.
- [Route](https://reactrouter.com/en/main/route/route) : Routes are perhaps the most important part of a React Router app. They couple URL segments to components, data loading and data mutations. Through route nesting, complex application layouts and data dependencies become simple and declarative.
- [RouterProvider](https://reactrouter.com/en/main/routers/router-provider) : All data router objects are passed to this component to render your app and enable the rest of the data APIs.
- [createBrowserRouter](https://reactrouter.com/en/main/routers/create-browser-router) : This is the recommended router for all React Router web projects. It uses the DOM History API to update the URL and manage the history stack.
- [createRoutesFromElements](https://reactrouter.com/en/main/utils/create-routes-from-elements) : createRoutesFromElements is a helper that creates route objects from <Route> elements. It's useful if you prefer to create your routes as JSX instead of objects.
- [useLoaderData](https://reactrouter.com/en/main/hooks/use-loader-data) : This hook provides the value returned from your route loader.

**react** standard hooks used in this project

- [useEffect](https://react.dev/reference/react/useEffect) : useEffect is a React Hook that lets you synchronize a component with an external system.


## Introduction to React Routing in Single Page Applications



### Understanding Single Page Applications (SPAs)

In the React ecosystem, a key concept to grasp is that of single page applications (SPAs). Essentially, SPAs function with just one page. The whole idea of React is to take components and mount them in place. For instance, when navigating to a "register" page, React doesn't actually go anywhere; it removes elements from the current page and injects the register page's components. This manipulation of the DOM allows for seamless transitions between different "pages" without actual page reloads.

However, while SPAs offer efficiency in DOM manipulation, they can be confusing for users accustomed to traditional page navigation. Thus, the need for routing arises.

### Importance of Routing

Routing in React is crucial for simulating traditional page navigation behavior while retaining the benefits of SPAs. By artificially manipulating the URL and simulating page transitions, users can navigate through the application seamlessly.

### Introduction to React Router Dom

To handle routing in React applications, we'll be using React Router Dom, a library that provides the necessary tools for implementing routing logic. It's important to thoroughly study its documentation to understand its usage and capabilities.

### Project Overview

We'll be building a simple website with multiple "pages" (components) and navigation between them. Additionally, we'll integrate GitHub data on one of the pages to demonstrate dynamic content loading.

### Project Setup

Let's set up a new React project using `create vite@latest` and install necessary dependencies, including React Router.

```bash
npm init vite@latest 07-react-router -- --template react
cd 07-react-router
npm install
npm install react-router-dom
```
installing Tailwind CSS
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```
## API used

#### To get the sample info for the Github page

```http
  https://api.github.com/users/hiteshchoudhary
```

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

