import { Box, Switch } from "@mui/material";
import React, { useState } from "react";
import "./NotificationSetting.scss";



function Options({ title }) {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };


  return (
    <Box className="forOrder">
      <p className="paraList1">{title}</p>

      <Box className="pushNoti">
        <p className="paraList2">Push Notifications</p>
        <Switch className="OrdersBtn1"
          checked={checked}
          onChange={handleChange}
          inputProps={{ 'aria-label': 'controlled' }}
        />
      </Box>
      <Box className="emailNoti">
        <p className="paraList2">Email Notifications</p>
        <Switch className="OrdersBtn1"
          checked={checked}
          onChange={handleChange}
          inputProps={{ 'aria-label': 'controlled' }}
        />
      </Box>
    </Box>
  );
}




function NotificationSetting() {
  const [arr, setArr] = useState([1, 1, 1, 1, 1])
  const [heading, setHeading] = useState(["Orders", "Discounts", "Updates", "Reminders", "All Offers"])


  return (
    <Box className="mainWrapperNotificationSetting">
      <Box className="NotiBox">
        <p className="forTitle">Notifications</p>
        {
          arr.map((item, key) => (

            <Options title={heading[key]} />
          ))
        }


      </Box>
    </Box>
  );
}

export default NotificationSetting;
