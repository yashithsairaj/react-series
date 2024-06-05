## Building a Todo App with Context API and Local Storage

### Why Context API?

The Context API is a fantastic foundation for understanding state management libraries like Redux, Zustand, and more. We'll cover the Context API and also demonstrate how to store data in your browser's local storage. Remember, Context API, Redux, and similar libraries are state managers—they streamline how actions and tasks are performed without dictating the specifics.

### Project Overview

We'll build a simple Todo app that demonstrates the intricacies of using the Context API. Here's what the project will look like:

#### Core Components and Features

1. **Todo List**:

   - **Adding Todos**: A component to add new todos to the list.
   - **Editing Todos**: Ability to toggle between display and edit modes for each todo item. When editing, the text becomes an input field allowing modification. After editing, a save button appears.
   - **Deleting Todos**: Remove any todo item from the list.

2. **Todo Item**:

   - **Toggle Completion**: Each todo item can be marked as completed or not. Completed items cannot be edited.
   - **Edit Mode**: Clicking the edit button turns the text into an input field, enabling modification.
   - **Save Changes**: The save button appears when an item is in edit mode, allowing changes to be saved.

3. **Local Storage Integration**:

   - **Persistence**: All todo items are stored in the browser's local storage, ensuring data persistence across sessions.

4. **Tailwind CSS**: We will use Tailwind CSS for styling. The focus will be on functionality, with styling provided via copy-paste class names from the repository.

### Detailed Breakdown

We'll follow these steps to build the project:

1. **Set Up Context and Provider**: Create a context and provider for managing the todo state. Wrap the necessary components with this provider.

2. **Implement Todo Functionality**:

   - **Adding Todos**: Create a component that allows adding new todos to the list.
   - **Editing and Saving Todos**: Implement functionality to toggle between display and edit modes, and save changes.
   - **Deleting Todos**: Allow todos to be removed from the list.

3. **Handle State with Context**:

   - **State Management**: Use the Context API to manage the state of the todos. This will include adding, editing, and deleting todos.
   - **Custom Hook**: Develop a custom hook to encapsulate context operations, simplifying the code and improving readability.

4. **Local Storage Integration**:
   - **Persist Data**: Store and retrieve todo items from the browser's local storage, ensuring data persists across page reloads.

### User Experience

The Todo app will provide a seamless user experience with the following features:

- **Real-time Updates**: Todo items can be added, edited, and deleted, with immediate updates to the UI.
- **Persistence**: Todo items will be stored in local storage, ensuring data is not lost between sessions.
- **Intuitive Design**: The UI will be simple and intuitive, using Tailwind CSS for styling.

### Conclusion

This project may look simple, but it will provide a rock-solid foundation for building applications with the Context API. You'll learn about application structure, program flow, and state management.

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
