import React from 'react'
import './wallettab.scss'
import { Box } from '@mui/material'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import WalletTableAllTransaction from './WalletTableAllTransaction/WalletTableAllTransaction';
import PaidFunds from './WalletTableAllTransaction/PaidFunds/PaidFunds';
import WithdrawnFunds from './WalletTableAllTransaction/WithdrawnFunds/WithdrawnFunds';


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

const WalletTab = () => {

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box >
 <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="All Transactions" {...a11yProps(0)} />
          <Tab label="Paid Funds" {...a11yProps(1)} />
          <Tab label="Withdrawn Funds" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <WalletTableAllTransaction />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <PaidFunds />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <WithdrawnFunds />
      </TabPanel>
    </Box>
    </Box>
  )
}

export default WalletTab