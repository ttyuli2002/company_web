import logo from './Assets/logo.png';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function NavBar() {
  return (
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand d-flex align-items-center" href="/">
        <img
          alt="company logo"
          src= {logo}
          width="auto"
          height="100"
          className="d-inline-block align-top"
        />
        <span class="mx-2 h1">
          紫道弘益
        </span>
      </a>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 flex-grow-1 justify-content-evenly h2">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/">首页</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/About">关于我们</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="/Service">服务</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/Contact">联系方式</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  );
}

export default NavBar;