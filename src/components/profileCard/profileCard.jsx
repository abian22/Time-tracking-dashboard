import React from 'react'
import jeremy from"../../assets/images/image-jeremy.png"
import Grid from "@mui/material/Grid";
import { Avatar, Card, CardContent, Typography } from "@mui/material";
import { useState } from 'react';
import "./profileCard.css"

function ProfileCard({image, name,handleMetricChange }) {
 
  const [selectedOption, setSelectedOption] = useState('day'); // Inicialmente seleccionado 'day'



  
  return (
    <>
   
          <Card
            sx={{
              border: "solid",
              width: { xs: "89vw", sm: "50vw", md:"27%", lg:"20%" },
              height: { xs: "200px", sm: "450px" },
              borderRadius: "14px",
              backgroundColor: "hsl(235, 46%, 20%)",
              marginTop:{sm:"4%", md:"2%", lg:"6.5%"},
              position:{sm:"relative", md:"relative"}
            }}
          >
            <CardContent
              sx={{
                width: "auto",
                height: { xs: "100px", sm: "260px" },
                borderRadius: "16px",
                backgroundColor: "hsl(246, 80%, 60%)",
              }}
            >
              {" "}
              <Avatar
                src={image}
                sx={{
                  display: "flex",
                  height: "70px",
                  width: "70px",
                  border: "solid",
                  borderColor: "white",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: { xs: "10px" },
                  marginLeft: { xs: "10px" },
                }}
              />{" "}
              <Typography
                sx={{
                  fontFamily: "regular",
                  height: "20px",
                  marginTop: {xs: "-60px", sm:"25px"},
                  marginLeft: {xs: "33%", sm:"0px"},
                  textAlign: "initial",
                  color: "hsl(236, 100%, 87%)",
          
                }}
              >
                Report for
              </Typography>
              <Typography
                sx={{
                  fontFamily: "light",
                  height: "20px",
                  marginTop: "5px",
                  textAlign: "initial",
                  marginLeft: {xs: "33%", sm:"0px"},
                  color: "white",
                  fontSize: {xs: "24px",sm:"40px"},
                  lineHeight:"45px"
                }}
              >
                {name}
              </Typography>
            </CardContent>
            <CardContent
              sx={{
                color: "hsl(235, 45%, 61%)",
                display: "flex",
                justifyContent: "space-between",
                fontSize: "18px",
                fontFamily: "regular",
                flexDirection: {sm: "column"},
                textAlign: "start"
              }}
            >
<Typography
        className={`profileTime ${selectedOption === 'day' ? 'active' : 'inherit'}`}
        sx={{ marginLeft: { xs: "5px", sm: "10px" }, cursor: 'pointer' }}
        onClick={() => {
          handleMetricChange('day') 
          setSelectedOption('day')
        }}
      >
        Daily
      </Typography>
      <Typography
        className={`profileTime ${selectedOption === 'week' ? 'active' : ''}`}
        sx={{ marginTop: { sm: "20px" }, marginLeft: { sm: "10px" }, cursor: 'pointer' }}
        onClick={() => {
          handleMetricChange('week') 
          setSelectedOption('week')
        }}
      >
        Weekly
      </Typography>
      <Typography
        className={`profileTime ${selectedOption === 'month' ? 'active' : ''}`}
        sx={{
          marginRight: { xs: "5px" },
          marginTop: { sm: "20px" },
          marginLeft: { sm: "10px" },
          cursor: 'pointer'
        }}
        onClick={() => {
          handleMetricChange('month') 
          setSelectedOption('month')
        }}
      >
        Monthly
      </Typography>
            </CardContent>
          </Card>
        
    </>
  )
}

export default ProfileCard