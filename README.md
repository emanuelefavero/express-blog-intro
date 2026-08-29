# Express Blog Intro

An Express.js blog starter template from my web dev course.

<img src="logo.svg" alt="Node.js logo" width="100">

## Run locally

- Clone the repo `https://github.com/emanuelefavero/express-blog-intro.git`
- `cd` into the project folder
- Run:

  ```bash
  npm install
  npm start
  ```

- Open your browser and go to `http://localhost:3000` to see the app running.

> To run the project in watch mode, use `npm run dev` instead of `npm start`.

## Test the routes

### Postman

Drag and drop the `postman/express-blog-intro.postman_collection.json` file into Postman to import the collection and test the routes.

### REST Client

You can also use the [REST Client extension](https://marketplace.visualstudio.com/items?itemName=humao.rest-client) for VS Code. After installing it, open the `test.http` file and click on "Send Request" to test the routes.

> Tip: We can also use `curl` to quickly test the routes from the command line (e.g. `curl http://localhost:3000/api/posts`).
