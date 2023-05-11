// import Login from "./pages/Login";
import Register from "./pages/Register";
import "./styles/globals.css";

function App() {
  const isLoggedin = false;
  return (
    <div className='flex h-screen justify-center items-center'>
      {isLoggedin ? <p>User Logged In</p> : <Register />}
    </div>
  );
}

export default App;
