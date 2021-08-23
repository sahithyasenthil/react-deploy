import logo from './logo.svg';
import './App.css';
import profileimage from'./img/pic.jpg';
function App() {
  return (
    <div className="App">
      <h1>My React App</h1>
      <img src={profileimage} alt="profile-image" height='100px' width='100px'/>
    </div>
  );
}

export default App;
