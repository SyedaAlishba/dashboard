import { Box } from "@mui/system";
import React from "react";
import "./UserCurrencySetting.scss";
import ArrowRight from "../../../Assets/Icons/ArrowRight.png";


const UserCurrencySetting = () => {
  return (
    <Box className="mainWrapperCurrency">
     
     <Box className="mainSectionStartCurrency">
     
      <Box className="leftSectionCurrency">
        <p className="langaugeLeftList">Currency</p>
        <p className="dollarSign">US Dollar</p>
        
        <p className="addNewLang">Add a new Currency</p>

          
        </Box>
      
     </Box>
      
    </Box>


  );
};

export default UserCurrencySetting;