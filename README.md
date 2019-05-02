This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

--------------------------------------------------------------------------------------------------------------------------

Team Members: Ja (Thanakul) Wattanawong, Priyans Nishithkumar Desai
<<<<<<< HEAD
Demo: 
=======
Demo: [http://bit.ly/bearkeeper](http://bit.ly/bearkeeper)
>>>>>>> d6c22f8df0991842020f264cb0c8f15772a1739c
Prompt: Task Management System 

### Abstract: 
This app focuses on helping students organize their time and do tasks in a more timely manner. 

### Technical features:
We're currently collecting keyboard input for the To-Do list. The onclick handlers are used to switch between editable and non-editable. Firebase is our main API intergration that allows state to be saved.

### Components:
1) Course - Adds a course
2) Collapsible - Adds a collapsible/dropdown 
3) TodoItem - Task in courses
4) AddTodoItem - An input box that helps in adding new todos. Also has a field for date.
5) AddCourse - A input box that helps in adding new courses.

### Features:

Students are able to:
1) Add courses
2) Add tasks and due dates to the added courses
3) Edit already added tasks by simply just clicking on it. 
4) If the due date is passed, the date turns red
5) If within the date, the date turns green. 

The npm packages that we used are:
1) react-collapsible -- an imported npm component that we're using for our UI
2) moment  -- used to manage time
3) firebase -- used to help manage firebase interaction
4) semantic-ui-react -- used to style our overall website

### Division of Labor:

1) Ja - Firebase integration, Implementing the Task List in courses, Fixing any bugs, implementing state management
2) Priyans - Implementing the initial course addition system, initiation creation of files, Handling the CSS, Adding functionalities in Tasks, Logo


