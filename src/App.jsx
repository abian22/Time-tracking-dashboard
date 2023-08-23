import Grid from "@mui/material/Grid";
import jeremy from "../src/assets/images/image-jeremy.png";
import work from "../src/assets/images/icon-work.svg";
import exercise from "../src/assets/images/icon-exercise.svg";
import play from "../src/assets/images/icon-play.svg";
import selfCare from "../src/assets/images/icon-self-care.svg";
import socials from "../src/assets/images/icon-social.svg";
import study from "../src/assets/images/icon-study.svg";
import ProfileCard from "./components/profileCard/profileCard";
import TimeTrackCard from "./components/timeTrackCard/timeTrackCard";
import { useState } from "react";
import "./App.css";

function App() {
  // let todayHours = [7, 2, 1, 2, 2, 1]
  // let lastDayHours = [8, 1, 1, 1, 2, 2]
  // let thisWeekHours = [32, 10, 4, 4, 5, 2]
  // let lastWeekHours = [36, 8, 7, 5, 10, 2]
  // let thisMonthHour = [380, 120, 40, 60, 70, 60 ]
  // let lastMonthHour = [400, 50, 50, 100, 70, 60]

  const [timeMetric, setTimeMetric] = useState("day");
  const [selectedHours, setSelectedHours] = useState([7, 2, 1, 2, 2, 1]);
  const [selectedLastHours, setSelectedLastHours] = useState([8, 1, 1, 1, 2, 2])

  const handleMetricChange = (newMetric) => {
    setTimeMetric(newMetric);
    setSelectedHours(hours[newMetric]);
    setSelectedLastHours(lastHours[newMetric])

    if (newMetric === 'day') {
      setSelectedHours(hours.day);
      setSelectedLastHours(lastHours.lastDay);
    } else if (newMetric === 'week') {
      setSelectedHours(hours.week);
      setSelectedLastHours(lastHours.lastWeek);
    } else if (newMetric === 'month') {
      setSelectedHours(hours.month);
      setSelectedLastHours(lastHours.lastMonth);
    }

  };

  const hours = {
    day: [7, 2, 1, 2, 2, 1],
    week: [32, 10, 4, 4, 5, 2],
    month: [380, 120, 40, 60, 70, 60],
  };

  const lastHours = {
    lastDay: [8, 1, 1, 1, 2, 2],
    lastWeek: [36, 8, 7, 5, 10, 2],
    lastMonth: [400, 50, 50, 100, 70, 60]
  }

  return (
    <>
      <Grid container sx={{ width: "91vw", left: "0px", justifyContent:{sm:"center", md:"normal"}}}>
        <ProfileCard
          image={jeremy}
          name="Jeremy Robson"
          handleMetricChange={handleMetricChange}
        />
        <Grid
          item
          sx={{
            marginLeft: { md: "10px", lg: "70px" },
            marginTop: { lg: "-10px" },
          }}
        >
          <TimeTrackCard
            image={work}
            track={"Work"}
            backgroundColor={"hsl(15, 100%, 70%)"}
            hours={selectedHours[0]}
            lastHours={selectedLastHours[0]}
            timeMetric={timeMetric}
          />
        </Grid>
        <Grid
          item
          sx={{
            marginLeft: { md: "10px", lg: "20px" },
            marginTop: { lg: "-10px" },
          }}
        >
          <TimeTrackCard
            image={play}
            track={"Play"}
            backgroundColor={"hsl(195, 74%, 62%)"}
            hours={selectedHours[1]}
            lastHours={selectedLastHours[1]}
            timeMetric={timeMetric}
          />
        </Grid>
        <Grid
          item
          sx={{
            marginLeft: { md: "10px", lg: "20px" },
            marginTop: { lg: "-10px" },
          }}
        >
          <TimeTrackCard
            image={study}
            track={"Study"}
            backgroundColor={"hsl(15, 100%, 70%)"}
            hours={selectedHours[2]}
            lastHours={selectedLastHours[2]}
            timeMetric={timeMetric}
          />
        </Grid>
        <Grid
          item
          sx={{
            position: { lg: "absolute", md: "absolute" },
            marginTop: { lg: "250px", md: "250px" },
            marginLeft: { lg: "23%", md: "26%" },
          }}
        >
          <TimeTrackCard
            image={exercise}
            track={"Exercise"}
            backgroundColor={"hsl(145, 58%, 55%)"}
            hours={selectedHours[3]}
            lastHours={selectedLastHours[3]}
            timeMetric={timeMetric}
          />
        </Grid>
        <Grid
          item
          sx={{
            position: { lg: "absolute", md: "absolute" },
            marginTop: { lg: "250px", md: "250px" },
            marginLeft: { lg: "43%", md: "48%" },
            height: { xs: "" },
          }}
        >
          <TimeTrackCard
            image={socials}
            track={"Social"}
            backgroundColor={"hsl(264, 64%, 52%)"}
            hours={selectedHours[4]}
            lastHours={selectedLastHours[4]}
            timeMetric={timeMetric}
          />
        </Grid>
        <Grid
          item
          sx={{
            position: { lg: "absolute", md: "absolute" },
            marginTop: { lg: "250px", md: "250px" },
            marginLeft: { lg: "62.5%", md: "70%" },
          }}
        >
          <TimeTrackCard
            image={selfCare}
            track={"Self Care"}
            backgroundColor={"hsl(43, 84%, 65%)"}
            hours={selectedHours[5]}
            lastHours={selectedLastHours[5]}
            timeMetric={timeMetric}
          />
        </Grid>
      </Grid>
      ¡
    </>
  );
}

export default App;
