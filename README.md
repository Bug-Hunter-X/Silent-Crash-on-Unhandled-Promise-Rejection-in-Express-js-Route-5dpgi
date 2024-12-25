# Silent Crash on Unhandled Promise Rejection in Express.js Route

This repository demonstrates a common error in Express.js applications: silent crashes due to unhandled promise rejections in asynchronous route handlers.

## Bug Description
The `bug.js` file contains an Express.js application with a route that performs an asynchronous operation.  If the asynchronous operation fails, the error is logged to the console but not properly handled, resulting in a silent crash and 500 error to the client.

## Solution
The `bugSolution.js` file demonstrates the correct way to handle errors in asynchronous Express.js routes, preventing silent crashes and providing informative error responses to clients.