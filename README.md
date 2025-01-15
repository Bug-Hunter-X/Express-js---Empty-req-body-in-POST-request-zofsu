# Express.js - Empty req.body in POST Request

This repository demonstrates a common issue in Express.js applications where the request body (req.body) is empty when processing POST requests.  Even with the `express.json()` middleware included, the issue persists. This is often due to incorrect middleware order or missing configuration related to request body parsing.

## Bug Report

The `bug.js` file contains an Express.js server that attempts to receive a JSON payload in a POST request to `/data`.  Despite using `express.json()`, `req.body` remains empty. 

## Solution

The `bugSolution.js` demonstrates a solution using the body-parser middleware before other middleware routes and ensuring proper JSON body handling.