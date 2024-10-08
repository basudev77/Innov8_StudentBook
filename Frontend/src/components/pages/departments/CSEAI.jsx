import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import data from "../../../Batch.json";
import "./CSEAI.css";

function CSEAI() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  return (
    <div
      className="templateContainer"
      style={{
        backgroundImage:
          "url(https://tse4.mm.bing.net/th?id=OIP.z9vQwb9fX6aB6KX3E-rd9gHaE0&pid=Api&P=0&h=180)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="searchInput_Container">
        <input
          type="text"
          placeholder="Search batch..."
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        ></input>
      </div>

      <div className="template_Container">
        {data
          .filter((val) => {
            if (searchTerm === "") {
              return val;
            } else if (
              val.name.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return val;
            }
          })
          .map((val) => {
            return (
              <>
                <div
                  className="template"
                  key={val.id}
                  style={{ boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)" }}
                  onClick={() => {
                    navigate(`/${val.id}/${val.name}`);
                  }}
                    onMouseOver={(event) => {
                    event.currentTarget.style.backgroundColor = '#020708';
                    event.currentTarget.style.color = 'white';
                    }}
                    onMouseOut={(event) => {
                    event.currentTarget.style.backgroundColor = '';
                    event.currentTarget.style.color = 'black';
                    }}
                >
                  <img
                    src={val.img}
                    style={{
                      border: "3px solid grey",
                      borderRadius: "20px",
                      transition: "transform 0.3s",
                      width: "200px",
                    }}
                    onMouseOver={(event) => {
                      event.target.style.transform = "scale(1.1)";
                    }}
                    onMouseOut={(event) => {
                      event.target.style.transform = "scale(1)";
                    }}
                  />
                  <br />
                  <h6>B.TECH CSE-AI</h6>
                  <h3>{val.name}</h3>
                </div>
              </>
            );
          })}
      </div>
    </div>
  );
}

export default CSEAI;
