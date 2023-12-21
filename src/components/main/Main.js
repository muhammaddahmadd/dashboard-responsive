// import { Table } from "react-bootstrap";
import Container from "../Mainbutton/Container";
import Table from "../Table/Table";
import Header from "../header/Header";
import User from "../users/User";
export default function Main() {
  const style = {
    background: "rgb(255, 255, 255)",
  };
  return (
    <div className="home-section ">
      {/* <div className="home-content"> */}
      {/* <span className="text">TImebee</span> */}
      {/* </div> */}
      <Header />
      <div className="mx-5">
        <User />
      </div>
      <div style={style} className="mx-5 rounded-2  h-50 ">
        <Container />

        <Table />
      </div>
    </div>
  );
}
