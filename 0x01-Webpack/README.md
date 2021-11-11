# 0x01 - Webpack
Webpack is this amazing library designed to break up and split the files into static 'bundles' that easily serve content to the user. It internally creates a dependency graph, so that your application ships with all your assets properly loaded at the right times. From the website,
> At its core, webpack is a static module bundler for modern JavaScript applications. When webpack processes your application, it internally builds a dependency graph from one or more entry points and then combines every module your project needs into one or more bundles, which are static assets to serve your content from.

## Webpack has a bunch of main concepts
Webpack is a powerful tool with many configuration options. These options have names that help explain what they do including: Entry, Output, Loaders, Plugins, and Mode.

### **Entry:**
The entry point, the module that webpack uses to start building its internal dependency graph.

From there it determines which other modules and libraries that entry point depends on (directly and indirectly) and includes them in the graph until no dependency is left.
 By default, the entry point is set to ./src/index.js , but we can specify a different module (or modules) in the webpack config file

### **Output:**
The output property instructs webpack where to emit the bundle(s) and what name to use for the file(s).

The default value for this property is ./dist/main.js for the main bundle and ./dist for other generated files -- such as images for example.

### **Loaders:**
By default, webpack only understands Javascript and JSON files. To process other types of files and convert them into valid modules, webpack uses loaders.

Loaders transform the source code of non-JavaScript modules, allowing us to preprocess those files before they’re added to the dependency graph.

For example, a loader can transform files from a CoffeeScript language to JavaScript or inline images to data URLs. With loaders we can even import CSS files directly from our JavaScript modules.

### **Plugins:**
Plugins are used for any other task that loaders can’t do. They provide us with a wide range of solutions about asset management, bundle minimization and optimization, and so on.

Mode: there are two modes, development and production, there’s also none, where the default, production, won’t be used

## Why webpack

Even a simple project contains HTML, CSS, and JavaScript files. Also, it can contain assets such as fonts, images, and so on. So, a typical webpack workflow would include setting up an index.html file with the appropriate CSS and JS links, and the necessary assets. Also, if you have many CSS and JS modules which depend on each other, they need to be optimized and properly combined in one unit ready for production.

Based on the provided configuration, webpack starts from the entry points and resolves each module it encounters while constructing the dependency graph. If a module contains dependencies, the process is performed recursively against each dependency until the traversal has completed. Then webpack bundles all the project’s modules into a small number of bundles -- usually, just one -- to be loaded by the browser.

## Next lets do some Learning Objectives!
Part of Holberton's idealogy is that we try to meet the learning objectives of each project, here's the one for Webpack
- How to setup Webpack for a basic project
- Entry points, output, and loaders
- How to add plugins
- How to split your code into chunks
- How to setup a dev server

### How to setup Webpack for a basic project.
Let's beg the question first, How would I *use* Webpack for a basic project? Webpack does a great job bundling and code splitting for us. It does such a good job that it's actually **built in to create-react-app by default**. So if for some strange reason, I was adding it to a project rather than jumping off the create-react-app platform, we'd start by installing it, as well as webpack-cli, the command line interface for utilizing webpack.

`npm install webpack webpack-cli --save-dev`

will get that package installed locally.
It's important conceptually that you split source code into the files that build what you want to serve, src, and the files that will be used in the *distribution*, dist. By default, webpack pulls in the entry point, src/index.js, and will generate dist/main.js as the output.

Package.json generated should be similar to the following

```
{
  "name": "learn-webpack",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "webpack": "^5.9.0",
    "webpack-cli": "^4.2.0"
  }
}
```
Add a webpack script to the scripts object of the package.json file
```
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
  "dev": "webpack --mode development",
  "build": "webpack --mode production"
},
```

Within the scripts property npm allows us to reference locally installed Node.js packages by their names. We use that and the --mode flag to define dev and build tasks, which will run webpack in development (npm run dev) and production (npm run build) mode respectively.

Let’s create a src directory and put an index.js file in it so that it contains `console.log(“Hello, Webpack!”);` Now we can already run the dev task to start webpack in dev mode

```
$ npm run dev

> learn-webpack@1.0.0 dev C:\WEBDEV\learn-webpack
> webpack --mode development

[webpack-cli] Compilation finished
asset main.js 874 bytes [emitted] (name: main)
./src/index.js 31 bytes [built] [code generated]
webpack 5.9.0 compiled successfully in 122 ms
```

Webpack sets the **default entry point** to `./src/index.js` and the default output to ./dist/main.js. So what webpack does when we run the dev task is to get the source code from index.js file and bundle the final code in a main.js file.

Great! It works as expected. But to verify that we get the correct output, we need to display the result in the browser. To do that, let’s create an index.html file in the dist directory.

```
<!doctype html>
<html>
  <head>
    <title>Getting Started With Webpack</title>
  </head>
  <body>
    <script src="main.js"></script>
  </body>
</html>
```
Note the <script> tag containing a reference to 'main.js'. This is a call to the bundle the webpack creates on build.
Now the browser should display “Hello, Webpack!” in the console.

We're not done yet! The last thing I would do to set up a Webpack project, is set up the HtmlWebpackPlugin, this plugin serves to dynamically reference the entry point, even if we rename it on each build (Changing the name of the entry point and not updating the reference in the config won't do anything!). It can also be used to set the title of the .html file directly in the config!
So let's install that plugin, and create the config file to that end.

```npm install html-webpack-plugin --save-dev```

At this point, to activate the plugin, we need to create a webpack.config.js file in the root directory with the following content:
```
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');

module.exports = {
  plugins: [
    new HtmlWebpackPlugin({
      title: "Webpack Output",
    }),
  ],
};
```
As you can see, to activate a webpack *plugin*, we need to *include* it in the file and then **add** it to the *plugins array*. If needed, we also pass options to the plugin. See the html-webpack-plugin rep for all available options and the ability to write and use your own templates.

```$ npm run dev```

https://www.sitepoint.com/webpack-beginner-guide/

For Asset Management (inlcuding css and imgs)
https://webpack.js.org/guides/asset-management/

### - Entry points, output, and loaders
Let's talk about these three as a list. List item 1, Entry points
**Entry Points**: [Docs](https://webpack.js.org/concepts/entry-points/)
The point or points where to start the application bundling process. If an array is passed then all items will be processed.

A dynamically loaded module is not an entry point.

A rule to consider: one entry point per HTML page. SPA: one entry point, MPA: multiple entry points.
```
module.exports = {
  //...
  entry: {
    home: './home.js',
    about: './about.js',
    contact: './contact.js',
  },
};
```

**Output** [Docs](https://webpack.js.org/concepts/output/)
Configuring the output configuration options tells webpack how to write the compiled files to disk. Note that, while there can be multiple entry points, only one output configuration is specified.

Basic usage
```
module.exports = {
  output: {
    filename: 'bundle.js',
  },
};
```

**Loaders**: [Docs](https://webpack.js.org/concepts/loaders/)
Loaders are transformations that are applied to the source code of a module. They allow you to pre-process files as you import or “load” them. Loaders even allow you to do things like import CSS files directly from your JavaScript modules!

#### Example
For example, you can use loaders to tell webpack to load a CSS file or to convert TypeScript to JavaScript. To do this, you would start by installing the loaders you need:
`npm install --save-dev css-loader ts-loader`
And then instruct webpack to use the css-loader for every .css file and the ts-loader for all .ts files:

webpack.config.js
```
module.exports = {
  module: {
    rules: [
      { test: /\.css$/, use: 'css-loader' },
      { test: /\.ts$/, use: 'ts-loader' },
    ],
  },
};
```

### How to add plugins
[Docs](https://webpack.js.org/concepts/plugins/)
**Anatomy**
A webpack plugin is a JavaScript object that has an apply method. This apply method is called by the webpack compiler, giving access to the entire compilation lifecycle.

ConsoleLogOnBuildWebpackPlugin.js
```
const pluginName = 'ConsoleLogOnBuildWebpackPlugin';

class ConsoleLogOnBuildWebpackPlugin {
  apply(compiler) {
    compiler.hooks.run.tap(pluginName, (compilation) => {
      console.log('The webpack build process is starting!');
    });
  }
}

module.exports = ConsoleLogOnBuildWebpackPlugin;
```
.. Used in your webpack.config.js like this:
```
const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const webpack = require('webpack'); //to access built-in plugins

module.exports = {
    plugins: [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({ template: './src/index.html' }),
  ],
}
```

### How to split your code into chunks
[Docs](https://webpack.js.org/guides/code-splitting/#root)

This feature allows you to split your code into various bundles which can then be loaded on demand or in parallel. It can be used to achieve smaller bundles and control resource load prioritization which, if used correctly, can have a major impact on load time (Great for user experience!).

There are three general approaches to code splitting available:

Entry Points: Manually split code using entry configuration.
Prevent Duplication: Use Entry dependencies or SplitChunksPlugin to dedupe and split chunks.
Dynamic Imports: Split code via inline function calls within modules

### How to setup a dev server
[Docs](https://webpack.js.org/api/webpack-dev-server/#root)

#### Installation
To start using the webpack-dev-server Node.js API, first install webpack and webpack-dev-server if you haven’t yet:

`npm install --save-dev webpack webpack-dev-server`

Then require the modules in your Node.js script:

```
const Webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
```

invoke using the cli
` npx webpack serve --open `

And now your page will open on in your default browser, and will rebuild on changes to your files!

https://blog.logrocket.com/versatile-webpack-configurations-react-application/