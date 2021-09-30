import styled from "styled-components";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { StayPrimaryLandscapeRounded } from "@material-ui/icons";
import { ExperianceData } from "../Data/ExperianceData";

function Experiance() {
  return (
    <ExperianceContainer>
      <h1>Experience</h1>
      <VerticalTimeline>
        {ExperianceData.map((exp) => {
          return (
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "#fff", color: "#000" }}
              contentArrowStyle={{ borderRight: "7px solid  #fff" }}
              date={exp.date}
              iconStyle={{ background: "#23d997", color: "#fff" }}
              icon={<StayPrimaryLandscapeRounded />}
            >
              <h3
                className="vertical-timeline-element-title"
                style={{ color: "#23d997" }}
              >
                {exp.title}
              </h3>
              <p style={{ margin: "0 0 1rem 0" }}>
                {" "}
                <a href="www.salvimar.de">{exp.company}</a>
              </p>
              <div>
                {exp.roles.map((role) => (
                  <p style={{ color: "#333", margin: 0 }}>&#x25cf; {role}</p>
                ))}
              </div>
            </VerticalTimelineElement>
          );
        })}

        <VerticalTimelineElement
          iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
          icon={<StayPrimaryLandscapeRounded />}
        />
      </VerticalTimeline>
    </ExperianceContainer>
  );
}

const ExperianceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 3rem 0;
  background-color: #1b1b1b;
`;

export default Experiance;
