import React from "react";

export default function Model() {
  return (
    <div className="contain">
      <div className="body" />
      <div className="model" />
      <div
        className="hairstyle"
        style={{
          width: 1000,
          height: 1000,
          background: 'url("../assets/hairstyle/hairstyle3.png")',
          position: "absolute",
          top: "-75%",
          right: "-57%",
          transform: "scale(0.15)",
          zIndex: 4,
        }}
      />
      <div
        className="necklace"
        style={{
          width: 500,
          height: 1000,
          background: 'url("../assets/necklaces/necklace3.png")',
          position: "absolute",
          bottom: "-40%",
          right: "-3.5%",
          transform: "scale(0.5)",
          zIndex: 4,
        }}
      />
      <div
        className="bikinitop"
        style={{
          width: 500,
          height: 500,
          background: 'url("../assets/clothes/topcloth5.png")',
          position: "absolute",
          top: "-9%",
          left: "-5%",
          zIndex: 3,
          transform: "scale(0.5)",
        }}
      />
      <div
        className="bikinibottom"
        style={{
          width: 500,
          height: 1000,
          background: 'url("../assets/clothes/botcloth4.png")',
          position: "absolute",
          top: "-30%",
          left: "-5%",
          zIndex: 2,
          transform: "scale(0.5)",
        }}
      />
      <div
        className="handbag"
        style={{
          width: 500,
          height: 1000,
          background: 'url("../assets/handbags/handbag2.png")',
          position: "absolute",
          bottom: "-40%",
          right: "-3.5%",
          transform: "scale(0.5)",
          zIndex: 4,
        }}
      />
      <div
        className="feet"
        style={{
          width: 500,
          height: 1000,
          background: 'url("../assets/shoes/shoes2.png")',
          position: "absolute",
          bottom: "-37%",
          right: "-3.5%",
          transform: "scale(0.5)",
          zIndex: 1,
        }}
      />
      <div
        className="background"
        style={{
          backgroundImage: 'url("../assets/background/background1.jpg")',
        }}
      />
    </div>
  );
}
