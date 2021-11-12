# 0x03 React Props

## Learning Objectives
- How to create basic React components using functions
- How to reuse components
- How to pass properties to components
- How to define types for components
- How to use Fragments
- When to use a key to improve a loop's performance

## How to create basic React components using functions
This is actually really easy, you just need to create functions that return html+css, known as .jsx or with TypeScript, .tsx

Here's an example of this App.js, with a couple of custom component imported in. You just need a parent tag as a div, or a React.Fragment, shown here as '<>'
```
function App() {
  return (
    <>
      <Notifications />
      <div className="App">
        <Header />
        <Login />
        <Footer />
      </div>
    </>
  );
}
```

## How to reuse components
Components are react functions and classes that are *reusable* which means that you can import them and place them anywhere in your project! They act like standalone HTML tags, but with custom definitions! In my previous example, 'Notifications', 'Header', 'Login', & 'Footer' are custom components.

## How to pass properties to components
All components can take properties, known as props, downstream from parent components. In a functional component, you pass these props like parameters, and in a class component, you must call these props in a constructor.

Here's what that looks like in my CourseListRow functional component from task_4
```function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {```
And then you can use these properties like variables!

In a class component, this looks more like this
```
class App extends React.Component {
  constructor(props) {
    super(props);
  }
```

## How to define types for components
Well you can use PropTypes from the 'prop-types' library for js, or this is a natural feature of typescript :triumph:
It's as simple as defining an App's prop "types" and "default" props, let me show you what I mean.
```
// For an example App.js with a boolean isLogggedIn
App.propTypes = {
  isLoggedIn: PropTypes.bool,
};

App.defaultProps = {
  isLoggedIn: false,
};
```

## When to use a key to improve a loop's performance
[From the docs!](https://reactjs.org/docs/lists-and-keys.html)
Keys help React identify which items have changed, are added, or are removed. Keys should be given to the elements inside the array to give the elements a stable identity. This has to do with [the ways React identifies list mutations](https://reactjs.org/docs/reconciliation.html#recursing-on-children) I think this line from the docs sums up the original question succinctly,
> In practice, finding a key is usually not hard. The element you are going to display may already have a unique ID, so the key can just come from your data:

`<li key={item.id}>{item.name}</li>`

This project was all about adding React props to components. Props give components the ability to do things based on upstream conditions and variables moving downstream. From parent to child components, props always move "downwards" or "downstream", because this is actually really hard to go upstream with. To solve that problem, we would implement a larger, more robust system like Redux, which uses actions and reducers to pass logic upstream and log all the changes.