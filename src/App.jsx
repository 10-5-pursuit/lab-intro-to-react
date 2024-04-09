import NavBar from "./Components/NavBar/NavBar";
import Contacts from "./Components/Contacts/Contacts";
import Posts from "./Components/Posts/Posts";
import UserProfile from "./Components/UserProfile/UserProfile";
import "./index.css";

function App() {
  return (
    <>
      <NavBar />
      <UserProfile />
      <Posts />
      <Contacts />
    </>
  );
}

export default App;
