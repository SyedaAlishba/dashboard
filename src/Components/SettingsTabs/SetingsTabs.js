import React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import SettingProfilePage from '../../Pages/Settings/SettingProfilePage/SettingProfilePage';
import YourStory from '../../Pages/Settings/YourStory/YourStory';
import StudioDetails from '../../Pages/Settings/StudioDetails/StudioDetails';
import Payments from '../../Pages/Settings/Payments/Payments';
import PickupAvailibility from '../../Pages/Settings/PickupAvailibility/PickupAvailibility';
import LegalPage from '../../Pages/Settings/LegalPage/LegalPage';
import OthersTab from '../../Pages/Settings/OthersTab/OthersTab';
import CustomerSupport from '../../Pages/Settings/CustomerSupport/CustomerSupport';


function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

const SettingsTabs = () => {
    const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (
 
    <>
        <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Profile" {...a11yProps(0)} />

          <Tab label=" Your Story" {...a11yProps(1)} />
          <Tab label=" Studio Details" {...a11yProps(2)} />
          <Tab label="Pickup Availability" {...a11yProps(3)} />
          <Tab label="Payments" {...a11yProps(4)} />
          <Tab label="Customer Support" {...a11yProps(5)} />
          <Tab label="Others" {...a11yProps(6)} />
          <Tab label="Legal" {...a11yProps(7)} />


        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
      <SettingProfilePage />
      </TabPanel>
      <TabPanel value={value} index={1}>
      <YourStory />
      </TabPanel>
      <TabPanel value={value} index={2}>
    <StudioDetails />
      </TabPanel>
      <TabPanel value={value} index={3}>
      <PickupAvailibility />
      </TabPanel>
      <TabPanel value={value} index={4}>
      <Payments />
     </TabPanel>
     <TabPanel value={value} index={5}>
     <CustomerSupport />
     </TabPanel>
     <TabPanel value={value} index={6}>
     <OthersTab />
     </TabPanel>
     <TabPanel value={value} index={7}>
     <LegalPage />
     </TabPanel>
      
    </Box>
    </>
  );
};

export default SettingsTabs;
