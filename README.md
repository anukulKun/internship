# DoIt

## View Deployment : [Live](https://doit-kun.vercel.app)

## Overview
`Do-It` is a Advanced React To-Do Application with API Integration web application, designed to help users manage their to-do lists efficiently. The application features a clean, intuitive interface that supports both light and dark themes. It allows users to add, remove, and toggle tasks, as well as switch between grid and list views for task display.

## Features
- `Task Management`: Add, remove, and toggle tasks between completed and pending states.
- `Sidebar Navigation`: Easy access to different sections including all tasks, today’s tasks, important tasks, planned tasks, and assigned tasks.
- `Grid/List View`: Toggle between grid and list views for displaying tasks.
- `Local Storage Integration`: Persist data in local storage to maintain state across page reloads.

## Technologies Used

- `React`: JavaScript library for building Web UI.
- `Redux Toolkit`: State management with slice reducers.
- `React Router Dom`: For client-side routing.
- `Tailwind CSS`: CSS framework for styling.

## Installation
To run this project locally, follow these steps:

1. Clone the Repository

   ```
   git clone https://github.com/Ayush031/Do-It.git
   ```

2. Move to Directory
   ```
   cd Do-It
   ```
3. Install Depenxdencies
   ```
   npm install
   ```
4. Run the Development Server

```
npm start
```

Navigate to `http://localhost:5173` in your browser to view the app.

## Folder Structure

- `src/components/`: Contains reusable components like Navbar, SideBar, TodoItemDescription, and more.
- `src/features/`: Contains Redux slices and reducers for managing tasks and app state.
- `src/routes/`: Contains route components for different pages of the application.
- `src/app/`: Contains the Redux store configuration and entry point for the application.

## Usage
- `Adding Tasks`: Enter a task in the input field on the "Today Tasks" page and click "ADD TASK" to add it to your list.
- `Navigating`: Use the sidebar to navigate between different sections of the app.
- `Theme Switching`: Toggle between light and dark themes using the theme switcher in the navbar.
- `View Switching`: Change the task view between grid and list formats using the grid toggle button in the navbar.

## Author
[Ayush Kansal](https://www.linkedin.com/in/aykansal)
