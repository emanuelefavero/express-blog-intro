# Express Blog Intro

An Express.js intro exercise from my web dev course.

<img src="logo.svg" alt="Node.js logo" width="100">

## Description

We are creating our personal blog and day by day we will be able to enrich it with new features based on what we learn.

For now we have a simple Express.js app with a `/` route that returns a simple text "Server del mio blog" and a `/bacheca` route that returns a JSON object with a list of posts.

We also expose static assets so that we can view the images associated with each post.

> Note: To test the routes, I have created a test.http file that can be used with the REST Client extension in VS Code. You can also use Postman or any other API testing tool.

## Run locally

- Clone the repo `https://github.com/emanuelefavero/express-blog-intro.git`
- `cd` into the project folder
- Run:

  ```bash
  npm install
  npm start
  ```

- Open your browser and go to `http://localhost:3000` to see the app running.

> To run the project in watch mode, use `npm run watch` instead of `npm start`.
