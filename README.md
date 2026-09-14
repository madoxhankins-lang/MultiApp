# Assignment: Create a Multi-Component App with State

## Introduction

In this exercise, we will build a **Todo List application** using **Zustand** for global state management, **TypeScript** for type safety, and **Vite** for rapid project scaffolding. The app integrates **Tailwind CSS** for styling and includes comprehensive testing with **Vitest** and **Testing Library**, ensuring robustness and maintainability. By the end, you’ll have a functional React application that demonstrates component architecture, state synchronization, and modern testing practices in a real-world scenario.

-------

## **Working with Dev Container**

To complete this assignment in a reliable and fully configured environment, please refer to the instructions in the file: **`README-devcontainer.md`**. This guide walks you through opening the assignment in **Visual Studio Code** using a **Dev Container**, which automatically installs all necessary Python libraries and tools. Following that setup ensures that the notebook runs smoothly without manual configuration or missing dependencies. Make sure to open the **main assignment folder** in VS Code and follow the steps outlined in the Dev Container guide before starting the notebook.

---------

## Starter Files

The project in the `start` folder would be the starting point.

---

## Requirements

We'll be working with React, Zustand, and TypeScript to develop our Todo List app. Here's what we need to accomplish:

### Set Up the Development Environment

We need to:

- Initialize a React project using Vite with TypeScript support.
- Install necessary dependencies, including Zustand for state management and Tailwind CSS for styling.
- Configure Vitest and Testing Library for unit testing.

### Build the Core Features

We need to implement the following functionalities:

1. **Global State Management:**
   
   - Create a Zustand store (`todoStore`) to manage the list of todos, including actions for adding, toggling, and deleting tasks.

2. **Reusable Components:**
   
   - Implement a `TodoForm` component for adding new tasks.
   - Implement a `TodoList` component for displaying and managing existing tasks.

3. **Component Architecture:**
   
   - Use TypeScript to enforce type checks for props and state across components.
   - Ensure components are modular and reusable.

4. **Styling with Tailwind CSS:**
   
   - Style the application using Tailwind CSS for a clean and responsive design.

5. **Testing:**
   
   - Write unit tests for the Zustand store to validate state updates.
   - Write integration tests for components to ensure proper rendering and user interactions.
   - Mock Zustand hooks in component tests to isolate and test individual components.

### Test the Application

We need to verify:

- The Zustand store correctly manages the state of todos (add, toggle, delete).
- The `TodoForm` component allows users to add new tasks and clears the input after submission.
- The `TodoList` component displays tasks, toggles their completion status, and deletes tasks when requested.
- All tests pass successfully using Vitest.

---

## Deliverables

The deliverable of this exercise is a working React application that meets all the requirements above. We need to submit:

- The public GitHub repository containing the source code.
- Screenshots showing:
  - The app running locally.
  - Test results from Vitest.
- A brief README file explaining how to set up and run the app locally.
- Simple documentation for the app's functionality and testing process.

---

## Conclusion

Building a **Todo List app** with Zustand, TypeScript, and Testing Library is an excellent way to practice creating reusable React components, implementing global state management, and leveraging modern testing practices. By completing this activity, you've learned how to create a functional React app with robust state management, type safety, and comprehensive testing. These skills form the foundation for developing more complex and scalable React applications in the future.