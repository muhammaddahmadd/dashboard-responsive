import Dropdown from "react-bootstrap/Dropdown";

function BasicExample() {
  const style = {
    background: "rgb(255, 255, 255)",
    width: "100px",
  };
  return (
    <Dropdown className="my-4 rounded-2 " style={style}>
      <Dropdown.Toggle
        id="dropdown-basic"
        className=" bg-white border-white text-dark "
      >
        All Users
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Qasim</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Jawad</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Tahoor</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default BasicExample;
