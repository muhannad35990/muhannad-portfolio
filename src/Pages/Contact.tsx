import styled from "styled-components";
import React from "react";
import { Grid } from "@material-ui/core";
import { Email, GitHub, LinkedIn, Phone } from "@material-ui/icons";
import { motion } from "framer-motion";
import { animateSlideUp, pageAnimation } from "../animation";
import { createMuiTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";

const Contact = () => {
  const theme = createMuiTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 800,
        md: 1200,
        lg: 1400,
        xl: 2100,
      },
    },
  });
  return (
    <StyledContantContainer data-aos="fade-up" data-aos-delay="200">
      <ContactCard>
        <ThemeProvider theme={theme}>
          <Grid container spacing={{ xs: 2, sm: 2, md: 3, lg: 3, xl: 3 }}>
            <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
              <StyledContactItem>
                <Email style={{ marginRight: "1rem", color: "#FE8800" }} />{" "}
                E-Mail:
              </StyledContactItem>
            </Grid>
            <Grid item xs={12} sm={12} md={9} lg={9} xl={9}>
              <StyledDetail>Muhannad35990@gmail.com</StyledDetail>
            </Grid>

            <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
              <StyledContactItem>
                <GitHub style={{ marginRight: "1rem", color: "#FE8800" }} />{" "}
                Github:
              </StyledContactItem>
            </Grid>
            <Grid item xs={12} sm={12} md={9} lg={9} xl={9}>
              <a href="https://github.com/muhannad35990">
                https://github.com/muhannad35990
              </a>
            </Grid>
            <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
              <StyledContactItem>
                <LinkedIn style={{ marginRight: "1rem", color: "#FE8800" }} />{" "}
                LinkedIn:
              </StyledContactItem>
            </Grid>
            <Grid item xs={12} sm={12} md={9} lg={9} xl={9}>
              <a href=" https://www.linkedin.com/in/muhannad-hammada35990">
                https://www.linkedin.com/in/muhannad-hammada35990
              </a>
            </Grid>
          </Grid>
        </ThemeProvider>
      </ContactCard>
    </StyledContantContainer>
  );
};

const StyledContantContainer = styled.div`
  margin-top: 10rem;

  display: flex;
  justify-content: center;
  align-items: center;
`;
const ContactCard = styled.div`
  width: 40rem;
  border: 1px solid #ccc;
  box-shadow: 1rem 4rem 4rem rgba(0, 0, 0, 0.2);
  border-radius: 1rem;
  padding: 2rem;
`;
const StyledContactItem = styled.div`
  display: flex;
  align-items: center;
  color: #23d997;
  font-weight: 700;
`;
const StyledDetail = styled.h3`
  color: #777;
  font-size: 1.2rem;
`;
export default Contact;
