# Walmart Products

I implemented a front-end and two endpoints for retrieving meta data using an itemId and searching for products using a query.
The front-end currently only uses the search. 

The Hapi server really needs a separate webpack config from the front-end.
There is currently no hot-reloading due to the files not being served from a webpack dev server.
I did not want to spend too much time trying to configure all of this. 
In production, the client and server would be in separate repos.

## Running
`npm install`

`npm run start`

You can now access the application at localhost:8000

## Running Tests
To run the Jest and Lab tests, `npm run test`

## Running Documentation
You can access Swagger documentation at localhost:8000/documentation#/ after `npm run start`

You can run the React Styleguidist documentation using `npm run styleguide`
