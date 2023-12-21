import { Nav, Navbar, Button, Col } from "react-bootstrap";
// import "./Header.css"; // Import the custom CSS file

function Header() {
  const style = {
    background: "rgb(255, 255, 255)",
  };
  return (
    <Navbar
      //   bg="light"
      //   defaultActiveKey="/home"
      className="mb-lg-5 px-3 justify-content-between "
      style={style}
    >
      <Navbar.Brand>
        <h1>Projects</h1>
        <p>You can add a new project or select an existing one.</p>
      </Navbar.Brand>
      <Navbar.Collapse className="justify-content-end ">
        <Nav className="align-items-center">
          <Nav.Item>
            <Nav.Link href="#" className="">
              Jonas
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Button
              //   variant="primary"
              style={{
                background: "rgb(176, 200, 235)",
                marginRight: "15px",
              }}
              className="rounded-circle py-3 px-3  bg-light-purple"
              //   style={customWidthStyle}
            ></Button>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
