import React from "react";
import salesphase from "../../assets/images/homepage/salesphase.png";
import instructions from "../../assets/images/homepage/instructions.png";
import delivery from "../../assets/images/homepage/delivery.png";
import projectmanagement from "../../assets/images/homepage/projectmanagement.png";
import performance from "../../assets/images/homepage/performance.png";
import cloudmanufacturing from "../../assets/images/homepage/cloudmanufacturing.png";
import { useHistory } from "react-router-dom";
import "./Homepage.css";

const HomePage: React.FC = (): JSX.Element => {
  const imgWidth = 300;
  const imgHeigth = 300;
  let history = useHistory();

  const handleOnClick = (event: any) => {
    const { id } = event.target;
    history.push("/" + id);
  };

  return (
    <div className="homePageTable">
      <table>
        <tbody>
          <tr>
            <td>
              <img
                src={salesphase}
                alt="Sales Phase"
                width={imgWidth}
                height={imgHeigth}
                id="salesphase"
                onClick={handleOnClick}
              ></img>
            </td>
            <td>
              <img
                src={instructions}
                alt="Installation Instructions"
                width={imgWidth}
                height={imgHeigth}
                id="installation"
                onClick={handleOnClick}
              ></img>
            </td>
            <td>
              <img
                src={delivery}
                alt="Delivery Phase"
                width={imgWidth}
                height={imgHeigth}
                id="deliveryportal"
                onClick={handleOnClick}
              ></img>
            </td>
          </tr>
          <tr>
            <td>
              <img
                src={projectmanagement}
                alt="Project Management"
                width={imgWidth}
                height={imgHeigth}
                id="projectmanagement"
                onClick={handleOnClick}
              ></img>
            </td>
            <td>
              <img
                src={performance}
                alt="Device Performance"
                width={imgWidth}
                height={imgHeigth}
                id="deviceperformance"
                onClick={handleOnClick}
              ></img>
            </td>
            <td>
              <img
                src={cloudmanufacturing}
                alt="Cloud Manufacturing"
                width={imgWidth}
                height={imgHeigth}
                id="cloudmanufacturing"
                onClick={handleOnClick}
              ></img>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default HomePage;
