import './App.css';
import ClassComponent from './ClassComponent';
import FunctionalComponent from './FunctionalComponent';
import Login from './Login';

function App() {
  return (
    <div className="App">
      <h1>Welcome to React</h1>
      <p>React is a popular JavaScript library for building user interfaces, particularly for single-page applications where you need a fast, interactive user experience. Developed and maintained by Facebook, React allows developers to create large web applications that can update and render efficiently in response to data changes. It uses a component-based architecture, which means the UI is divided into reusable pieces, making the code more manageable and easier to debug. React also employs a virtual DOM, which optimizes updates and improves performance. Whether you're building a simple website or a complex web app, React provides the tools and flexibility to create dynamic and responsive user interfaces.

      </p>
      <FunctionalComponent></FunctionalComponent>
      <ClassComponent />
      <Login />
    </div>
  );
}

export default App;
