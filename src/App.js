import { Grid, Avatar, Box, Typography, Card } from "@mui/material";
import React, { Fragment } from "react";
import EmailIcon from "@mui/icons-material/Email";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import Skills from "./components/skills";
import Projects from "./components/projects";
import WorkExperience from "./components/workExperience";
import Certificates from "./components/certificates";
import Languages from "./components/languages";
import Interests from "./components/interests";
import Education from "./components/education";

class App extends React.Component {
  render() {
    return (
      <Grid container spacing={2} m={2}>
        {/* intro section */}
        <Grid item xs={12}>
          <Grid container spacing={4}>
            <Grid item xs={7} sx={{ display: "flex", alignItems: "center" }}>
              <Grid
                container
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                {/* <Grid item xs={2}>
                  <Box className="profileImgContainer">
                    <Avatar
                      alt="Mohammad Qaseem"
                      size="large"
                      src="/static/me.jpeg"
                      sx={{
                        width: "146px",
                        height: "146px",
                        borderRadius: "50%",
                      }}
                    />
                  </Box>
                </Grid> */}

                <Grid item xs={12}>
                  <Typography variant="h3">Mohammad Qaseem</Typography>
                  <Typography variant="h5">Profile Summary</Typography>
                  <Typography paragraph>
                    Senior Backend Engineer with 7+ years of experience
                    designing and building scalable, high-concurrency backend
                    systems, microservices, and e-commerce platforms. Strong
                    expertise in the Python ecosystem (FastAPI, Django) and
                    Node.js (Fastify, Express.js, NestJS) with deep experience
                    in order management systems and distributed architectures.
                    Proven track record of engineering low-latency REST APIs,
                    optimising MySQL, MongoDB, Elasticsearch, and Redis
                    workloads, and building reliable cloud-native solutions on
                    AWS (EC2, S3, SQS, Route 53). Experienced in end-to-end
                    system design, event-driven architectures, CI/CD automation,
                    API security (JWT, OAuth 2.0), and performance optimisation
                    for high-scale production systems.
                  </Typography>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={4}>
              <Card elevation={0}>
                {[
                  {
                    label: "+91-8377995607",
                    icon: <PhoneAndroidIcon />,
                  },
                  {
                    label: "shaikhqaseem769@gmail.com",
                    link: "mailto:shaikhqaseem769@gmail.com",
                    icon: <EmailIcon />,
                  },
                  {
                    label: "New Delhi, India",
                    link: false,
                    icon: <LocationOnIcon />,
                  },
                  {
                    label: "https://linkedin.com/in/mohammad-qaseem-8377995607",
                    link: "https://www.linkedin.com/in/mohammad-qaseem-8377995607",
                    icon: <LinkedInIcon />,
                  },
                  {
                    label: "https://github.com/shaikhqaseem769",
                    link: "https://github.com/shaikhqaseem769",
                    icon: <GitHubIcon />,
                  },
                ].map((obj, i) => (
                  <Grid item key={i} xs={12}>
                    <Box className="iconContainer">
                      {obj.link ? (
                        <Fragment>
                          {obj.icon}
                          <a href={obj.link}>
                            <Typography paragraph ml={2} mb={0}>
                              {obj.label}
                            </Typography>
                          </a>
                        </Fragment>
                      ) : (
                        <Fragment>
                          {obj.icon}
                          <Typography paragraph ml={2} mb={0}>
                            {obj.label}
                          </Typography>
                        </Fragment>
                      )}
                    </Box>
                  </Grid>
                ))}
              </Card>
            </Grid>
          </Grid>
        </Grid>

        {/* second section */}
        <Grid item xs={12}>
          <Grid container spacing={4}>
            <Grid item xs={7} className="skilles">
              <Grid item xs={12}>
                <Skills />
              </Grid>

              <Grid item xs={12}>
                <Projects />
              </Grid>

              <Grid item xs={12}>
                <Education />
              </Grid>
            </Grid>

            <Grid item xs={4}>
              <Card elevation={0} style={{ height: "150%" }}>
                <WorkExperience />
                <Certificates />
                <Languages />

                <Interests />
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default App;
