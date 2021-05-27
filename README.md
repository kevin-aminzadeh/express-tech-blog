# Express Tech Blog ![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

<p align="center">
  <img src="./assets/demo.gif" alt="Express.js Tech Blog Demo">
</p>
<p align="center">

  <p align="center">
    <br />
    <a href="https://express-tech-blog.herokuapp.com/">Live Demo</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#overview">Overview</a>
      <ul>
        <li><a href="#technologies-used">Technologies Used</a></li>
        <li><a href="#acceptance-criteria">Acceptance Criteria</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#future-improvements">Future Improvements</a></li>
    <li><a href="#license">License</a></li>
  </ol>
</details>
<br>

## Overview

Express Tech Blog is a full-stack CMS-style blogging application built with `Express.js` and `Handlebars`. Once registered and logged in, the application allows users to create new blog posts, comment on existing blog posts, as well as update or delete their existing posts and comments.

### Technologies Used

Express Tech Blog uses the following technologies:

- [Bootstrap](https://getbootstrap.com/)
- [BCrypt.js](https://github.com/kelektiv/node.bcrypt.js#readme)
- [Babel.js](https://babeljs.io/)
- [Webpack](https://webpack.js.org/)
- [Handlebars.js](https://handlebarsjs.com/)
- [Express.js](https://expressjs.com/)
- [Node.js](https://nodejs.org/en/)
- [Sequelize](https://sequelize.org/)
- [MySQl](https://www.mysql.com/)

## Getting Started

To get a local copy of this project up and running follow these simple steps.

### Prerequisites

First you must install [Node.js](https://nodejs.org/en/) and [NPM](https://www.npmjs.com/get-npm) if you haven't done so already. Once this is done, follow the installation instructions below to run the application locally.

### Installation

1. Clone the repository.
   ```sh
   git clone https://github.com/kevin-aminzadeh/express-tech-blog
   ```
2. Navigate to the repository directory and run the following command to install the necessary NPM packages.
   ```sh
   npm install
   ```
3. Run the app start script.
   ```sh
   npm start
   ```

## Future Improvements

Due to the relative simplicity of this project, there are plenty of available avenues for improvement.

Some noteworthy improvements which could be made include:

- Refactoring the application's frontend `js` as the current implementation is somewhat bloated.
- Creating a richer UI experience by moving away from Bootstrap and creating UI components from the ground up.
- Implementing additional end user functionalities such as a `Likes` feature in order to improve the overall UX and user retention.
- Implementing data analytics to provide useful insights such as most popular searches, most popular books, etc.

## License

This project is licensed under the terms of the [MIT license](https://opensource.org/licenses/MIT).
