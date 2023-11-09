import { Box } from "@mui/system";
import React from "react";
import "./UserLangaugeSetting.scss";
import ArrowRight from "../../../Assets/Icons/ArrowRight.png";


const UserLangaugeSetting = () => {
  return (
    <Box className="mainWrapper">
      
     <Box className="mainSectionStart">
     
      <Box className="leftSection">
        <p className="langaugeLeftList">Language</p>
        <Box className="langFlex">
        <p className="langEnglish">English</p>
          <p className="langItalian">Italian</p>
        </Box>
        <p className="addNewLang">Add a new language</p>
        </Box>
      
     </Box>
      
    </Box>


  );
};

export default UserLangaugeSetting;
