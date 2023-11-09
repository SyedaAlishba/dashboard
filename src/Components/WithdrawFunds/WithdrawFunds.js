import React from 'react'
import './withdrawfunds.scss'
import { Box, TextField, colors } from '@mui/material'
import paymentIcon1 from '../../Assets/Icons/paymentIcon1.png'
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import halfArrowDown from '../../Assets/Icons/halfArrowDown.png'
import MenuItem from '@mui/material/MenuItem';


const style = {
  width: '450px',
  height: '650px',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  borderRadius: '5px'

};

const Widgets =
{
  title: "Total balance",
  value: 200000,
}

const currencies =
{
  value: 'USD',
  label: 'Select withdrawal destination',
}



const WithdrawFunds = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box className="withDrawFundWrapper">
            <p className='fundTxtHeading'>Withdraw Funds</p>
            <Box className="widgetWithdrawFund">

              <p className='withdrawTittle' >{Widgets.title}</p>
              <p className="withdrawValue">${Widgets.value}</p>

            </Box>
            <Box className="withdrawFundTxtFieldFlex">
              <p className='txt'>Amount</p>
              <TextField className='withdrawFundTxtField' id="outlined-basic" placeholder="Enter withdrawal amount" variant="outlined" />
              <p className='txt'>Withdrawal Destingation</p>



            </Box>
            <Box className="withdrawIconFlex">


              <Box
                component="form"
                sx={{
                  '& .MuiTextField-root': { m: 1, width: '36ch', backgroundColor: '#F9F9FC' },
                }}
              >
                <div>
                  <TextField
                    select
                    label="Select withdrawal destination"
                  >

                    <MenuItem key={currencies.label}>
                    </MenuItem>

                  </TextField>





                </div>
              </Box>

            </Box>
            <hr
              style={{

                color: 'gray',

                width: '100%',
              }}
            />






          </Box>
          <Box className='continueBtnFlex' >

            <Button className='continueBtn' style={{ backgroundColor: "#341E9D", width: " 249px", height: '59px', borderRadius: 
            '40px', color: 'white',fontSize:'16px',fontWeight:'700',textTransform:'capitalize',marginTop:'39px',marginLeft:'28px'}}>Continue</Button>
            
          </Box>
        </Box>
      </Modal>
      <Box className="myWalletWrapper">
        <Box className="withdrawFundsWrapper">
          <p className='myWalletHeading'>My Wallet</p>
          <Box className="withdrawFundsFlex">
            <img className='walletIcon' src={paymentIcon1} />
            <p className='withdrawFunds' onClick={handleOpen}>Withdraw Funds</p>
          </Box>


        </Box>
      </Box>
    </>
  )
}

export default WithdrawFunds