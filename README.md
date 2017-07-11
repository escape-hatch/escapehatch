# Escape Hatch

Escape Hatch is an [NPM library](https://www.npmjs.com/package/escape-hatch) and [website](http://escapehatch.herokuapp.com) that instantly connects developers with relevant information to help cut down on debugging time.

### Getting Started: NPM

In your terminal, type:
```
npm install escape-hatch
```

This gives you access to both client side and server side files that you can plug into your code to start getting solutions to errors.

For monitoring errors on your server side, simply add the following line to the top of your `server start file`:
  ```
  require('escape-hatch')()
  ```

You'll see links in your terminal like this upon errors in Node:

![backend image](/public/img/backend-ss.png)

For monitoring in the browser, use this simple script tag in your `html` files:

  ```
  <script src='node_modules/escape-hatch/escape-hatch-browser.js'></script>
  ```

For front-end errors, you'll see links in your browser console:

![frontend image](/public/img/frontend-ss.png)

### Getting Started: Website

Just input an error to our search bar to see a curated search results page.

## Built With

* [React](https://facebook.github.io/react/)
* [Yarn](https://yarnpkg.com/)
* [Webpack](https://webpack.github.io/)
* [Sequelize](http://docs.sequelizejs.com/)
* [package.json](/package.json) for more info

## Authors

* **Alice Perez** - [Github](https://github.com/aperez25)
* **Cindy Chen** - [Github](https://github.com/CindySchalit)
* **Jennifer Tam** - [Github](https://github.com/jenktam)
* **Josh White** - [Github](https://github.com/DillGromble)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

**Thank you** to our [Fullstack Academy](https://github.com/FullstackAcademy) instructor, [Gabriel Lebec](https://github.com/glebec), for his guidance and expert knowledge on this project.
