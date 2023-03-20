// import React from 'react'
// import GitHubCalendar from "react-github-calendar"

import { Img } from "@chakra-ui/react"
import "./calender.css"
// import  ReactToolTip from "react-tooltip"
const Claneder = () => {
// const SelectLastHalfYear= (contributions)=>{
// const currentYear= new Date().getFullYear();
// const currentMount= new Date().getMonth();
// const shownMonths=10
// return contributions.filter((day)=>{
// const date=new Date(day.Date);
// const monthOfDay= date.getMonth();
// return (
//     date.getFullYear()  === currentYear && 
//     monthOfDay > currentMount - shownMonths && 
//     monthOfDay <= currentMount
// )
// })
// }
  return (
    <div className="calendar_top">
      <h1 className="calendar_header">GitHub Calendar</h1>
      <div className="calendar_container">
        <Img className="calender" src={"/images/calender.png"} alt="cla" />
        <Img className="stats" src={"/images/stats.png"} alt="stats" />
        {/* <GitHubCalendar
style={{margin:"auto"}}
username="anwarjitme"
transformData={SelectLastHalfYear}
blockSize={20}
fontSize={20}
>  

<ReactToolTip delayshow={20} html/>
</GitHubCalendar> */}
      </div>
    </div>
  );
}

export default Claneder