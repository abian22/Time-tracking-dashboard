import React from 'react'
import { Card, CardContent, Typography, CardMedia, Grid } from "@mui/material";
import work from "../../assets/images/icon-work.svg"
import elipsis from "../../assets/images/icon-ellipsis.svg"
function TimeTrackCard({image, track, backgroundColor, hours, timeMetric, lastHours }) {

  
  return (
    <>
          <Card
            sx={{
              display: "inline-block",
              border: "solid",
              position:"relative",
              width: { xs: "89vw", sm: "50vw", md: "20vw", lg: "18vw" },
              height: { xs: "200px", sm: "200px" },
              borderRadius: "16px 16px 20px 22px",
              backgroundColor: {backgroundColor},
              marginTop: {xs: "20px", lg:"100px" },
       
            }}
          >
            <img
              src={image}
              style={{
                display: "inline",
                justifyContent: "end",
                marginLeft: "60%",
                marginTop: "0px",
              }}
            />
            <CardContent
              sx={{
                position: "relative",
                width: "auto",
                height: { xs: "200px" },
                top: "-40px",
                borderRadius: "22px 22px 16px 16px ",
                backgroundColor: "hsl(235, 46%, 20%)",
              }}
            >
              
              <Typography
                sx={{
                  color: "white",
                  textAlign: "start",
                  marginLeft: "15px",
                  marginTop: "25px",
                  fontFamily: "medium",
                  fontSize: "18px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                {track}
                <img
                  src={elipsis}
                  alt="Elipsis"
                  style={{
                    marginLeft: "10px",
                    alignSelf: "flex-end",
                    marginBottom: "10px",
                    marginRight:"40px",
                  }}
                />
              </Typography>
             
              <Typography
                sx={{
                  color: "white",
                  fontFamily: "light",
                  fontSize: "34px",
                  marginTop: "20px",
                  lineHeight: "20px",
                  justifyContent: "space-between",
                  width: "100%",
                  textAlign: {sm:"start"},
                  display: { xs: "flex", sm: "block" },
                  marginLeft: "10px",
                }}
              >
                {hours}hrs
                <Typography
                  sx={{
                    display: { xs: "inline", sm: "block" },
                    marginLeft: {xs:"16%", sm:"0%"},
                    textAllign:"start",
                    lineHeight:{sm:"50px"},
                    marginRight: "10px",
                    fontFamily: "regular",
                    color: "hsl(236, 100%, 87%)",
                    fontSize: "16px",
                  }}
                >
                  Last {timeMetric} - {lastHours}hrs
                </Typography>
              </Typography>{" "}
            </CardContent>
          </Card>
       
    </>
  )
}

export default TimeTrackCard