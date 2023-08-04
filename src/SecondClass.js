import React from "react";
import FirstComponent from "./FirstComponent";

function SecondClass() {
  return (
    <div>
      <FirstComponent
        imgLink="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_126,h_126/v1649914471/assets/89/8e4239-5e7d-4de7-bf71-00cc32d468db/original/Auto-150X150p4x.png"
        heading="Uber Auto"
        para="Get affordable Uber Auto rides with no haggling. Request Uber Auto and
      ride comfortably around your city."
      ></FirstComponent>
      <FirstComponent
        imgLink="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_126,h_126/v1649914539/assets/86/82f8b3-e2e6-45f8-a8f7-fdc511f709e0/original/Moto-150X150p4x.png"
        heading="Uber Moto"
        para="Get affordable bike rides at your doorstep. Skip the crowd and zip through traffic with Uber Moto."
      ></FirstComponent>
      <FirstComponent
        imgLink="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_126,h_126/v1630531077/assets/38/494083-cc23-4cf7-801c-0deed7d9ca55/original/uber-hourly.png"
        heading="Uber Rentals"
        para="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum, incidunt mollitia. Sed atque nam velit, eius ratione eaque mollitia error?"
      ></FirstComponent>

      <FirstComponent></FirstComponent>
    </div>
  );
}

export default SecondClass;
