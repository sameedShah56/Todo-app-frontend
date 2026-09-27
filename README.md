# Todo App

A simple and responsive Todo application built using **React.js** and **Tailwind CSS**.

The application allows users to navigate between authentication pages and manage their personal tasks. Users can view, edit, delete, and open their tasks to see complete details.

## Technologies Used

* React.js
* React Router DOM
* Tailwind CSS
* JavaScript
* Vite

---

# 1. Authentication Pages

The first part of the application contains authentication-related pages.

### Sign In

A Sign In page was created where an existing user can enter their login information.

The page is available through:

`/signin`

### Sign Up

A Sign Up page was created for new users to create an account.

The page is available through:

`/signup`

### Navbar

A navigation bar was also created to provide navigation between different pages of the application.

---

# 2. React Router DOM

**React Router DOM** is used to handle navigation between different pages without manually creating separate HTML pages.

Routes were created for the authentication pages.

For example:

* `/signin` → Opens the Sign In page
* `/signup` → Opens the Sign Up page

When the user navigates to one of these routes, React Router displays the corresponding component.

### Link Navigation

The `Link` component from React Router DOM is used to navigate between pages.

For example, the Sign In page can contain a link to the Sign Up page, and the Sign Up page can contain a link back to the Sign In page.

This allows navigation without refreshing the entire website.

---

# 3. Todo / Notes Page

After creating the authentication pages and navigation, a Todo/Notes page was created.

This page displays the user's tasks or notes.

Each Todo contains basic information and provides options to manage it.

### Todo Features

Each Todo provides:

* View Todo
* Edit Todo
* Delete Todo

---

# 4. Todo Preview

Initially, the Todo page displays only a short or single-line version of the task.

For example:

`Complete React Project...`

Instead of showing the complete description directly on the page, the user can click on the Todo.

When the user clicks on a Todo, a modal opens.

---

# 5. Todo Details Modal

The modal displays the complete information about the selected Todo.

It contains:

* Complete Todo title
* Complete Todo description
* Close button

For example:

**Title:**
Complete React Project

**Description:**
Create the authentication pages, implement routing, and complete the Todo functionality.

The modal allows the user to read the complete task without making the main Todo page unnecessarily large.

---

# 6. Edit Todo

An Edit option is available for each Todo.

The user can click the Edit button to modify the Todo information.

The user can update information such as:

* Todo title
* Todo description

After editing, the updated information is displayed in the Todo list.

---

# 7. Delete Todo

Each Todo also has a Delete option.

When the user selects Delete, the selected Todo is removed from the Todo list.

This allows users to easily remove tasks that are no longer needed.

---

# 8. Tailwind CSS

**Tailwind CSS** is used for styling the application.

Instead of writing separate CSS classes for every component, Tailwind utility classes are applied directly to the JSX elements.

Tailwind CSS is used for:

* Layout
* Spacing
* Colors
* Borders
* Border radius
* Shadows
* Buttons
* Modal styling
* Responsive design

For example, classes such as:

`bg-white`

`rounded-xl`

`p-6`

`shadow-md`

are used to style different parts of the application.

---

# 9. Modal Background

When the Todo details modal is opened, the rest of the screen becomes slightly darker/light grey.

This creates a visual separation between the modal and the background.

A semi-transparent background overlay is placed behind the modal.

This makes it clear that the user is currently interacting with the Todo details window.

---

# 10. Project Structure

A possible project structure is:

```text
src/
│
├── components/
│   ├── Navbar.jsx
│   ├── Todo.jsx
│   └── TodoModal.jsx
│
├── pages/
│   ├── Signin.jsx
│   ├── Signup.jsx
│   └── Todos.jsx
│
├── App.jsx
├── main.jsx
└── index.css
```

The project can be divided into reusable components so that the application is easier to maintain and expand.

---

# 11. Main Features

The current application includes the following features:

| Feature            | Description                                     |
| ------------------ | ----------------------------------------------- |
| Sign In            | Allows existing users to access the application |
| Sign Up            | Allows new users to create an account           |
| Navbar             | Provides navigation between pages               |
| Routing            | Handles navigation using React Router DOM       |
| Todo List          | Displays the user's tasks                       |
| Todo Details       | Shows the complete title and description        |
| Edit Todo          | Allows users to modify a Todo                   |
| Delete Todo        | Allows users to remove a Todo                   |
| Modal              | Displays complete Todo information              |
| Responsive Styling | Implemented using Tailwind CSS                  |

---

# 12. Future Improvements

The application can be extended with additional functionality such as:

* User authentication
* Logout functionality
* Backend API integration
* Database integration
* User-specific Todos
* Create Todo functionality
* Search Todos
* Todo categories
* Todo completion status
* Protected routes
* Form validation
* Loading states
* Error handling

---

# Conclusion

This project demonstrates how **React.js**, **React Router DOM**, and **Tailwind CSS** can be combined to create a modern Todo application.

React is used to build the user interface and components, React Router DOM is used for page navigation, and Tailwind CSS is used to create the application's layout and styling.

The application currently provides authentication pages, navigation, Todo management, and a modal for viewing complete Todo details.
