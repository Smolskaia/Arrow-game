# Project Arrow Game

Welcome to the Arrow Game project! This README provides an overview of the stack, features, and setup of the project. 

## Tech Stack

The project is built using the following technologies:

- **React + TypeScript**: For building the user interface with type safety.
- **Redux + Redux Toolkit**: For state management.
- **Material-UI**: For UI components and styling.
- **ESLint + Prettier + Husky**: For code linting, formatting, and enforcing standards in commits.
- **Vite**: For fast build and development.
- **Vitest**: For testing.
- **GitHub Pages**: For deployment.

## Features Implemented

Here’s a breakdown of what has been implemented in the project:

1. **Project Setup**:
   - Initialized the project with a robust configuration to streamline development.

2. **Redux Toolkit Template**:
   - Set up the initial project structure using a template from Redux Toolkit.

3. **Code Quality Tools**:
   - Configured ESLint for code linting to ensure consistent code quality.
   - Configured Prettier for code formatting.
   - Integrated Prettier with VSCode for auto-formatting on save.

4. **Git Hooks**:
   - Configured Husky to run pre-commit hooks for linting and formatting checks.

5. **State Management**:
   - Developed business logic using Redux Toolkit.
   - Created reducers to manage application state effectively.

6. **Component Decomposition**:
   - Organized the project by decomposing the UI into reusable components.

7. **Material-UI Integration**:
   - Incorporated Material-UI for building a modern, responsive UI.
   - Created a UI-Kit with reusable components to standardize the look and feel.

8. **Component Styling**:
   - Styled the components using Material-UI’s system and custom CSS.

9. **Additional Enhancements**:
   - Added a favicon to personalize the application.

10. **Testing**:
    - Wrote and executed unit tests using Vitest to ensure application reliability.

11. **Deployment**:
    - Deployed the application on GitHub Pages for easy access and sharing.

## Getting Started

Follow these steps to get the project up and running on your local machine:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Smolskaia/arrow-game.git

2. **Navigate to the project directory:**  
   ```cd arrow-game```  

3. **Install dependencies:**
   ```npm install```

4. **Run the development server:**
   ```npm run dev```

5. **Open the application in your browser:**
   Visit http://localhost:5173 to see the Arrow Game in action.


## Running Tests

To run the tests, use the following command:
```npm run test```

This will execute all tests defined in the project using Vitest.

## Deployment

The application is deployed on GitHub Pages. To update the deployment, use the following steps:

1. **Build the application:**
   ```npm run build```

2. **Deploy to GitHub Pages:**
    ```npm run deploy```