# Cheeses Too Gouda To Pass Up!

## Objective:

Create a web app that displays a list of products and their associated views. The app should
have a main page that lists all products and a single-page view for each individual product. The single-page view should allow users to “like” a product.

The app should have the following three main components:

- A database to store product information and “likes” in a single table.

  - A SQL RDBMS is preferred - SQL Server, MySQL, SQLite, etc.
  - The schema should include a title, description, product image, price and number of likes.
  - Populate the table with a minimum of 10 example items. Include a SQL script to create the database/table as well as populate it with the example items.

- A backend API that supports CRUD interactions.

  - The API should support GET requests for product list and single-page views.
  - It should also support PUT/POST/PATCH requests for adding likes.
  - OPTIONAL: Likes can also be removed with another POST/PATCH or DELETE request.

- A frontend client written in a modern frontend JavaScript framework
  - Main Page View: a scrollable page that lists all available products. Each item should display with the product image, item title, and price.
  - OPTIONAL: Implement infinite scroll or pagination.
  - Single-page View: a page with complete details for a single product. Include product image, title, description, price and number of “likes”. A button should also be placed on the page to increment “likes” by one for each individual user.
  - OPTIONAL: Add a back button or breadcrumbs to return back to the main page view.
  - OPTIONAL: Add a button to remove a “like”, i.e. if a user likes a product, but decides to remove that like, allow them to press an “unlike” button. Or to press the same button again to “unlike”

## Technologies

Built with Node.js, React, Express, PostgreSQL

## Local Development

To run this on your machine, fork & clone the repo. You will have to have Node.js and PostgreSQL installed on your machine.

Open the repo with the code editor of your choice. Run `npm install` to install all dependencies.

## Database

In your terminal run `createdb taponit` to create a PostgreSQL DB table. Make sure to `npm run seed` to seed the DB.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learnings

- As a smaller application, I didn't want to introduce the complexity of Redux, so I explored ways to implement the react router
