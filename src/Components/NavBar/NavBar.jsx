import NavBarCSS from "./NavBar.module.css";

function NavBar() {
  return (
    <header>
      <h1 className={NavBarCSS["profile-page"]}>Profile Page</h1>
      <nav>
        <ul className={NavBarCSS["nav-links"]}>
          <li>
            <a href="#">What is Pursuit?</a>
          </li>
          <li>
            <a href="#">Create an account</a>
          </li>
          <li>
            <a href="#">Sign in</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
