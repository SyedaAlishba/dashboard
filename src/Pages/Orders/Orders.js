import React from 'react'
import "./orders.scss"
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Ordertable from './Table/Ordertable';
import ConfirmTab from './ConfirmTab/ConfirmTab';
import OrdersOutForDelivered from './OrdersOutForDelivered/OrdersOutForDelivered';
import DeliveredOrders from './DeliveredOrders/DeliveredOrders'
import CancelledOrders from "../Orders/CancelledOrders/CancelledOrders"




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
const Orders = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
    <Box>My Orders</Box>
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label=" Pending Orders " {...a11yProps(0)} />
          <Tab label="Confirmed Orders" {...a11yProps(1)} />
          <Tab label=" Orders out for delivery" {...a11yProps(2)} />
          <Tab label="Delivered Orders" {...a11yProps(3)} />
          <Tab label=" Canceled Orders" {...a11yProps(4)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
      <Box>
      <Ordertable />
    </Box>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <ConfirmTab  />
      </TabPanel>
      <TabPanel value={value} index={2}>
      <OrdersOutForDelivered />
      
      </TabPanel>
      <TabPanel value={value} index={3}>
        <DeliveredOrders />
      
      
      </TabPanel>
      <TabPanel value={value} index={4}>
      <CancelledOrders />
      
      </TabPanel>
      
      

    </Box>
   
    </>
  )
}

export default Orders