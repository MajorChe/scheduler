# Interview Scheduler

<img src="https://github.com/MajorChe/scheduler/blob/master/public/docs/layout.png"
     alt="Layout"
     width=90%;/>

## Project Description
Interview Scheduler is a Single Page App that allows Lighthouse Labs Students to book, edit, and track interviews with mentors. The app uses React hooks to allow users to add, edit, and delete interviews in real time. Student, interviewer, and interview data is persisted to the API server using a PorsgreSQL database. The client app sends requests to the API server through HTTP in JSON. Cypress and Jest unit, end-to-end, and integration tests were used to catch errors and test user-stories.

### Features

- Has a calendar where users can select days and review available interview slots.
- Can pick a slot, mentor, and book and interview.
- Can edit bookings
- Responsive
- Displays error messages when functions fail



### Setup

Install dependencies with `npm install`.

### Running Webpack Development Server

npm start

### Running Jest Test Framework

npm test

### Running Storybook Visual Testbed

npm run storybook


### API Server Database Setup

For this app to run properly, setup the database and run the API Server and Client simultaniously. 
- fork and clone [ServerAPI](https://github.com/lighthouse-labs/scheduler-api)
- Follow the steps in README instructions
- Fork and clone .this scheduler repository
- ```npm install``` in root directory
- run ```npm start``` in scheduler_API
- run ```npm start``` in scheduler
- [http://localhost:8000/](http://localhost:8000/)


<img src="https://github.com/MajorChe/scheduler/blob/master/public/docs/delete.png"
     alt="Delete Message"
     width=90%;/>



<img src="https://github.com/MajorChe/scheduler/blob/master/public/docs/create.png"
     alt="Edit Phone"
     width=90%;/>             
     
<img src="https://github.com/MajorChe/scheduler/blob/master/public/docs/mobile.png"
     alt="Phone View"
     width=90%;/>



## ToolKit

### Stack
Front-End: React, JSX, Axios, HTML, SASS, JavaScript
Back-End: Express, NodeJS, PostgreSQL
Testing: Cypress, Jest, Storybook, Webpack Dev Server, React-testing-library

### Dependencies
    "axios"
    "classnames"
    "normalize.css"
    "react"
    "react-dom"
    "react-scripts"
    "Storybook"
    "Testing-library"
    "Jest"
    "Node-sass"
    "Prop-Types"
    "npm install react@^16.9.0"
    "npm install --save-dev react-test-renderer@^16.9.0"




