import React from "react";
import './Css/Work.css';

const Work = () => {
  const GetHelp = [
    { Text: "Health Care" },
    { Text: "Headache" },
    { Text: "Stomachache" },
    { Text: "Fever" },
    { Text: "Balms" },
    { Text: "Diabetes" },
    { Text: "Hygiene" },
    { Text: "Beauty Products" },
    { Text: "Baby Care" },
    { Text: "Cold" },
    { Text: "Cough" },
    { Text: "Medical soaps" },
    { Text: "Pet-essentials" },
    { Text: "Orthopaedics" },
    { Text: "Emergency Services" },
  ];

  return (
    <div className="Get_Help_Container">
      <div className="Get_Help_Heading">Get help Today</div>
      <div className="Get_Help_Categ">
        {GetHelp.map((item, index) => (
          <div className="Categ" key={index}>
            {item.Text}
          </div>
        ))}
      </div>
      <div className="SeeAll"> See All Categories</div>
    </div>
  );
};

export default Work;

