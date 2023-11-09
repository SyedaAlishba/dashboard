import React from 'react'
import "./wallet.scss"
import WithdrawFunds from '../../Components/WithdrawFunds/WithdrawFunds'
import Widget from '../Home/Wigets/Widget'

import { Box } from '@mui/material'
import WalletTab from '../../Components/WalletTab/WalletTab'



const Wallet = () => {
  return (
    <>
   <Box >
    <WithdrawFunds />
   </Box>
   <Box>
   <Widget /> 
    
   </Box>
   <Box>
    <WalletTab />
   </Box>
   
    
    </>
  )
}

export default Wallet