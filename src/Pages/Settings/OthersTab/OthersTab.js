import React, { useState } from 'react'
import { Box } from '@mui/material';
import UserLangaugeSetting from '../UserLangaugeSetting/UserLangaugeSetting';
import UserCurrencySetting from '../UserCurrencySetting/UserCurrencySetting';
import NotificationSetting from '../NotificationSetting/NotificationSetting';
import "./otherTabsStyle.scss"
import "../UserLangaugeSetting/UserLangaugeSetting.scss"
import "../UserCurrencySetting/UserCurrencySetting.scss"

const OthersTab = () => {

    const [langaugeFlag, setLanguageFlag] = useState(true);
    const [currencyFlag, setCurrencyFlag] = useState(false);
    const [changePasswordFlag, setChangePasswordFlag] = useState(false);
    const [notificationFlag, setNotificationFlag] = useState(false);

    let renderTab = {
        language: <UserLangaugeSetting />,
        currency: <UserCurrencySetting />,
        // changePassword: <ChangePassword />,
        notification: <NotificationSetting />,
      }
    
      const [currentTab, setCurrentTab] = React.useState("language")


    return (
        <Box className="otherTabsWrapper">
            <Box className="leftSideWrapper">
                <p onClick={(e) => {
                    setCurrentTab("language")
                    setLanguageFlag(true);
                    setCurrencyFlag(false);
                    setChangePasswordFlag(false);
                    setNotificationFlag(false);


                }} className={langaugeFlag === true ? "forLanguageSelected" : "forLanguage"} >Language</p>

                <p onClick={(e) => {
                    setCurrentTab("currency")
                    setLanguageFlag(false);
                    setCurrencyFlag(true);
                    setChangePasswordFlag(false);
                    setNotificationFlag(false);

                }} className={currencyFlag === true ? "paraListSelected" : "paraList"} >Currency</p>

                <p onClick={(e) => {
                    setCurrentTab("notification")
                    setLanguageFlag(false);
                    setCurrencyFlag(false);
                    setChangePasswordFlag(false);
                    setNotificationFlag(true);

                }} className={notificationFlag === true ? "paraListSelected" : "paraList"}
                >Notifications</p>
            </Box>
            <Box className="rightSideWrapper">
            {renderTab[currentTab]}
            </Box>


        </Box>
    )
}

export default OthersTab