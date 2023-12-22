import React from "react";
import Table from "react-bootstrap/Table";

// import "./Table.css";

function StripedColumnsExample() {
  const septStyle = {
    background: "coral",
    maxWidth: "50%",
    // borderRadius: "5px",
    textAlign: "center",
    borderRightColor: "coral",
    position: "relative",
  };
  const septAfter = {
    width: 0,
    height: 0,
    borderStyle: "solid",
    borderTop: "50px solid transparent",
    borderLeft: "100px solid red",
    borderBottom: "50px solid transparent",
  };

  const augustStyle = {
    background: "grey",
    maxWidth: "50%",
    // borderRadius: "5px",
    textAlign: "center",
    position: "relative",
  };

  const augustAfterStyle = {
    display: "block",
    width: 0,
    content: "",
    border: "15px solid transparent",
    borderLeftColor: "grey",
    borderRight: 0,
    position: "absolute",
    right: "-10px",
    top: "calc(50% - 15px)",
  };

  const octStyle = {
    background: "green",
    maxWidth: "50%",
    // borderRadius: "5px",
    borderLeftColor: "green",
    textAlign: "center",
    position: "relative",
  };

  const octAfterStyle = {
    display: "block",
    borderLeftColor: "green",
    width: 0,
    content: "",
    border: "15px solid transparent",
    borderRightColor: "green", // Change borderLeftColor to borderRightColor
    borderLeft: 0, // Remove borderRight property
    position: "absolute",
    left: "-10px", // Change right to left
    top: "calc(50% - 15px)",
  };

  const tableStyle = {
    width: "1000px",
    margin: "auto",
  };

  return (
    <div className="container-fluid ">
      <Table bordered striped="rows" borderless size="lg" style={tableStyle}>
        <thead>
          <tr className="text-center">
            <th className="text-start">First Name</th>
            <th colSpan={2} style={augustStyle}>
              August
              <span style={augustAfterStyle}></span>
            </th>
            <th colSpan={4} style={septStyle}>
              <span></span>
              September <span></span>
            </th>
            <th colSpan={4} style={octStyle}>
              October
              <span style={octAfterStyle}></span>
            </th>
          </tr>
        </thead>
        <tbody className="text-center">
          <tr className="text-center">
            <td className="text-start">
              <span className="bg-success rounded-5 px-2 py-1 mx-1">G</span>
              General work user admin
            </td>
            <td colSpan={2}>03h 14mins</td>
            <td colSpan={2}>0m 0s</td>
            <td colSpan={2}>0m 0s</td>
            <td colSpan={2}>0m 0s</td>
            <td colSpan={2}>0m 0s</td>
          </tr>
          <tr>
            <td className="text-start">
              <span className="bg-primary rounded-5 px-2 py-1 mx-1">S</span>
              Social Media
            </td>
            <td colSpan={2}>03h 14mins</td>
            <td colSpan={2}>0m 0s</td>
            <td colSpan={2}>0m 0s</td>
            <td colSpan={2}>0m 0s</td>
            <td colSpan={2}>0m 0s</td>
          </tr>
          <tr>
            <td className="text-start">
              <span className="bg-secondary rounded-5 px-2 py-1 mx-1">M</span>
              Marketing
            </td>
            <td colSpan={2}>03h 14mins</td>
            <td colSpan={2}>0m 0s</td>
            <td colSpan={2}>0m 0s</td>
            <td colSpan={2}>0m 0s</td>
            <td colSpan={2}>0m 0s</td>
          </tr>
          <tr>
            <td className="text-start">
              <span className="bg-warning rounded-5 px-2 py-1 mx-1">S</span>
              Customer Support
            </td>
            <td colSpan={2}>03h 14mins</td>
            <td colSpan={2}>0m 0s</td>
            <td colSpan={2}>0m 0s</td>
            <td colSpan={2}>0m 0s</td>
            <td colSpan={2}>0m 0s</td>
          </tr>
          <tr>
            <td className="text-start">
              <span className=" bg-danger rounded-5 px-2 py-1 mx-1">G</span>
              Content Writers
            </td>
            <td colSpan={2}>03h 14mins</td>
            <td colSpan={2}>0m 0s</td>
            <td colSpan={2}>0m 0s</td>
            <td colSpan={2}>0m 0s</td>
            <td colSpan={2}>0m 0s</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default StripedColumnsExample;
