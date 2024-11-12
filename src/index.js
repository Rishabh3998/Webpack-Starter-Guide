// Webpack is a powerful open-source JavaScript module bundler and build tool primarily used in
// modern web development to bundle JavaScript files and other assets (like images, fonts, and CSS)
// into one or more optimized bundles. This bundling improves loading times and resource management
// for web applications. Here’s a breakdown of its main features and benefits:

// Key Concepts and Features:

// Entry Points: The starting point(s) for Webpack to begin building its dependency graph. This is
// usually the main JavaScript file (e.g., index.js).

// Output: Specifies where bundled files should be saved and what they should be named. For example,
// the bundled file might be named bundle.js and saved in a dist folder.

// Loaders: Allows Webpack to process other types of files (like CSS, images, TypeScript) and transform
// them into valid modules that Webpack can include in the dependency graph.

// Plugins: Extend Webpack’s functionality and automate complex tasks, such as code minification,
// optimization, environment variable injection, and HTML file generation.

// Mode: Webpack has development, production, and none modes to optimize the build for specific environments.
// The production mode enables optimizations like minification and tree-shaking.

// Benefits:

// Dependency Management: Webpack builds a dependency graph to understand which modules depend on others,
// ensuring efficient bundling.

// Code Splitting: It can split code into separate bundles to optimize loading times, especially for
// large applications.

// Tree Shaking: Webpack removes unused code from final bundles, reducing bundle size.

// Hot Module Replacement (HMR): In development, it can update parts of the codebase without reloading
// the whole page, making testing and debugging faster.

// Usage in Modern Frameworks:

// Many popular JavaScript frameworks, like React and Vue, use Webpack under the hood to manage and
// optimize their builds. Webpack configurations can range from simple setups to highly customized
// configurations for specific build requirements, depending on the complexity of the project.

// This import statement will give error:
// Uncaught error:  Cannot use import statement outside a module
// we can fix this by adding type="module" inside our package.json but webpack gonna take care of this.

// PS: only set mode if we do not have the webpack.config file with us in package.json
import generateJoke from "./generateJoke";
import "./styles/main.scss";

console.log(123);

console.log(generateJoke());

// When we run npm build the webpack will start building and create the build file inside the dist folder
// which is a by-default directory for out build file.

// By default the webpack is looking to this file and considering this as an end point to create the build.
// we can change the entry point via config file.

// Adding source maps:
// These are good for debugging, gives the exact line where the error is. These provide a map from prod
// code to the source code which can helps us in debugging.

// If we want our code to be backward compatible for the older browsers, then we can use babel by using
// babel loader.

// Difference between Loaders and Plugins

// In Webpack, loaders and plugins serve distinct purposes in the build process, though they both enhance
// Webpack's capabilities to handle various file types and optimize the build. Here’s a breakdown of the
// difference between loaders and plugins:

// Loaders: Loaders let Webpack process non-JavaScript files, such as CSS, images, fonts, and newer
// JavaScript features (e.g., ES6+ or TypeScript).

// Plugins: Plugins extend Webpack’s core functionality and allow for more complex, global tasks beyond
// individual file transformations.
