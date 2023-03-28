// import React from 'react'
import GitHubCalendar from "react-github-calendar";
import { Img } from "@chakra-ui/react";
import "./calender.css";
const Claneder = () => {
  return (
    <div className="calendar_top">
      <h1 className="calendar_header">GitHub Calendar</h1>
      <div className="calendar_container">
        <div id="git_calender" className="react-activity-calendar">
          <GitHubCalendar username="anwarjitme" hideMonthLabels />
        </div>
        <div className="git_cards">
          <div className="git_left">
            
            <Img
              className="stats"
              id="github-streak-stats"
              src={
                "https://github-readme-streak-stats.herokuapp.com?user=anwarjitme"
              }
              alt="stats"
            />
            <Img
              className="stats"
              id="github-stats-card"
              src={
                "https://github-readme-stats.vercel.app/api?username=anwarjitme"
              }
              alt="stats"
            />
          </div>

          <Img
            className="stats"
            id="github-top-langs"
            src={
              "https://github-readme-stats.vercel.app/api/top-langs/?username=anwarjitme"
            }
            alt="lang"
          />
        </div>
      </div>
    </div>
  );
};

export default Claneder;
