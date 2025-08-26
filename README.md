# Food Sense Server

This is the backend server for the Food Sense application, a platform for browsing and ordering meals. It is built with Node.js, Express, and MongoDB.

[![Build Status](https://img.shields.io/badge/build-passing-brightgreen)](https://example.com)
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)
[![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)](https://example.com)

## Tech Stack

*   **Backend:**
    *   [Node.js](https://nodejs.org/)
    *   [Express](https://expressjs.com/) (v4.17.1)
*   **Database:**
    *   [MongoDB](https://www.mongodb.com/) (v4.1.3)
*   **Middleware & Utilities:**
    *   [CORS](https://www.npmjs.com/package/cors) (v2.8.5)
    *   [dotenv](https://www.npmjs.com/package/dotenv) (v10.0.0)
    *   [Nodemon](https://nodemon.io/) for development

## Features

*   **Meal Management:** CRUD operations for meals.
*   **Order Management:** CRUD operations for orders.
*   **RESTful API:** A complete set of API endpoints for interacting with the application data.

## Installation Guide

Follow these steps to set up the project locally:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/YeasarArefin/food-sense-server.git
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd food-sense-server
    ```
3.  **Install dependencies:**
    ```bash
    npm install
    ```
4.  **Start the development server:**
    ```bash
    npm run dev
    ```

## Usage Instructions

After installation, the server will be running on `http://localhost:5000`.

You can use a tool like [Postman](https://www.postman.com/) or `curl` to interact with the API endpoints.

## Configuration

This project requires a `.env` file in the root of the project with the following variables for connecting to your MongoDB database:

```
DB_USER=your_database_user
DB_PASSWORD=your_database_password
```

## API Documentation

### Meal Routes

*   `GET /meals`: Get all meals.
*   `POST /meals`: Add a new meal.
*   `GET /meals/:_id`: Get a single meal by ID.
*   `DELETE /meals/:_id`: Delete a meal by ID.

### Order Routes

*   `GET /orders`: Get all orders.
*   `POST /orders`: Create a new order.
*   `GET /orders/:_id`: Get a single order by ID.
*   `DELETE /orders/:_id`: Delete an order by ID.
*   `PUT /orders/:_id`: Update an order's status by ID.

## Contact / Support

*   **Email:** [yeasararefin007@gamil.com](mailto:yeasararefin007@gamil.com)
*   **Portfolio:** [yeasararefin.vercel.app](https://yeasararefin.vercel.app)
