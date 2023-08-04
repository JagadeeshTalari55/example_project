// import {
//   Card,
//   CardBody,
//   CardHeader,
//   CardText,
//   CardTitle,
//   Col,
//   Row,
// } from "reactstrap";
import "./App.css";
import Card from "./Card";

// import "bootstrap/dist/css/bootstrap.min.css";

const arr1 = [1, 2, 3, 4, 5];
function App() {
  return (
    // <div>
    //   <Row>
    //     {/* first card */}
    //     <Col>
    //       {" "}
    //       <Card
    //         className="my-2"
    //         color="danger"
    //         inverse
    //         style={{
    //           width: "18rem",
    //         }}
    //       >
    //         <CardBody>
    //           <CardTitle tag="h6">FLAT</CardTitle>
    //           <CardTitle tag="h2">5%</CardTitle>
    //           <CardTitle tag="h6">View Details</CardTitle>
    //         </CardBody>
    //       </Card>
    //     </Col>
    //     {/* second card */}
    //     <Col>
    //       <Card
    //         className="my-2"
    //         color="danger"
    //         inverse
    //         style={{
    //           width: "18rem",
    //         }}
    //       >
    //         <CardBody>
    //           <CardTitle tag="h6">FLAT</CardTitle>
    //           <CardTitle tag="h2">5%</CardTitle>
    //           <CardTitle tag="h6">View Details</CardTitle>
    //         </CardBody>
    //       </Card>
    //     </Col>
    //     {/* third card */}
    //     <Col>
    //       <Card
    //         className="my-2"
    //         color="danger"
    //         inverse
    //         style={{
    //           width: "18rem",
    //         }}
    //       >
    //         <CardBody>
    //           <CardTitle tag="h6">FLAT</CardTitle>
    //           <CardTitle tag="h2">5%</CardTitle>
    //           <CardTitle tag="h6">View Details</CardTitle>
    //         </CardBody>
    //       </Card>
    //     </Col>
    //     {/* fourth card */}
    //     <Col>
    //       <Card
    //         className="my-2"
    //         color="danger"
    //         inverse
    //         style={{
    //           width: "18rem",
    //         }}
    //       >
    //         <CardBody>
    //           <CardTitle tag="h6">FLAT</CardTitle>
    //           <CardTitle tag="h2">5%</CardTitle>
    //           <CardTitle tag="h6">View Details</CardTitle>
    //         </CardBody>
    //       </Card>
    //     </Col>
    //   </Row>
    // </div>
    <div className="container">
      {arr1.map((item, i) => {
        return (
          <Card key={i} heading5="FLAT" heading2="5%" bgColor="#000"></Card>
        );
      })}

      <Card heading5="INSTANT" heading2="200" bgColor="#CE7700"></Card>
      <Card heading5="INSTANT" heading2="500" bgColor="#5E3FB0"></Card>
      <Card heading5="INSTANT" heading2="1000" bgColor="#BB355Fs"></Card>
    </div>
  );
}

export default App;
