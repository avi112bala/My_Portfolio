import "../style.css"
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <header id="body-header">
        <nav>
          <ul className="horizontal-list text-center nav-menu">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/skills">Skills</Link>
            </li>
            <li>
              <Link to="/experience">Experience</Link>
            </li>
            <li>
              <Link to="/education">Education</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
          <Outlet />
        </nav>

        <div id="name-social-container">
          <div className="text-center">
            <h1 id="my-name">Avinash Mishra</h1>
          </div>
        </div>
      </header>
    </>
  );
}

export default Layout
