import React, { useState } from 'react'
import './Payments.scss'
import { Box, Button, TextField } from '@mui/material'
import rightArrowIcon from '../../../Assets/Icons/rightArrowIcon.png'
import Bankaccount from '../../../Assets/Icons/bankaccountIcon.png'
import Paypal from '../../../Assets/Icons/paypal.png'
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Slider from '@mui/material/Slider';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 450,
    height: 'auto',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  const marks = [
    {
      value: 0,
      label: '$100',
    },
    {
      value: 20,
     
    },
    {
      value: 37,
    
    },
    {
      value: 100,
      label: '$200',
    },
  ];
  
  function valuetext(value) {
    return `${value}`;
  }
  
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };



const Paymentcurrency = () => {
    return (
        <>
        <Box className="paymentCurrencyWrapper">
            <p className='paymentCurrencyHeading'>Payment Currency</p>
            <Box className='grayContainer'>
            <Box className='checketFlex'>
                <p className='usDollarTxt'>US Dollar</p>
                <Checkbox className='checket'{...label} defaultChecked />
            </Box>
            <hr className='hrLine'/>   
            <Box className='checketFlex'>
                <p className='usDollarTxt'>Euro</p>
                <Checkbox className='checket'{...label} defaultChecked />
            </Box>
            <hr className='hrLine'/>    <Box className='checketFlex'>
                <p className='usDollarTxt'>Pound Sterling</p>
                <Checkbox className='checket'{...label} defaultChecked />
            </Box>
            <hr className='hrLine'/>    <Box className='checketFlex'>
                <p className='usDollarTxt'>Swiss Franc</p>
                <Checkbox className='checket'{...label} defaultChecked />
            </Box>
            <hr className='hrLine'/>    <Box className='checketFlex'>
                <p className='usDollarTxt'>Japanese Yen</p>
                <Checkbox className='checket'{...label} defaultChecked />
            </Box>
            <hr className='hrLine'/>    <Box className='checketFlex'>
                <p className='usDollarTxt'>Kuwaiti Dinar</p>
                <Checkbox className='checket'{...label} defaultChecked />
            </Box>
            <hr className='hrLine'/>    <Box className='checketFlex'>
                <p className='usDollarTxt'>South Korean Won</p>
                <Checkbox className='checket'{...label} defaultChecked />
            </Box>
            <hr className='hrLine'/>    <Box className='checketFlex'>
                <p className='usDollarTxt'>Indian Rupee</p>
                <Checkbox className='checket'{...label} defaultChecked />
            </Box>
            <hr className='hrLine'/> 
            </Box>
          
        </Box>
        <Box className="flexForBtn">
         <Button className='savechangesBtn'>Save Changes</Button>
         <Button className='cancelBtn'>Cancel</Button>
   
       </Box>
        
       </>
    )
}



const PreferredPaymentMethod = () => {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <>
        <Box className='preferredPaymentWrapper' >
            <p className='preferedTxt'>Preferred payment method</p>
         <Box className='grayBox'>
            <Box className='paypalFlex'>

         <img className='iconPaypal' src={Paypal}/>
         <p className='paypalTxt'>Paypal</p>
            </Box>
            <Box className='view'>
                <p className='viewTxt'>View</p>
            </Box>
         </Box>
         <Box className='grayBox'>
            <Box className='paypalFlex'>

         <img className='iconPaypal' src={Bankaccount}/>
         <p className='paypalTxt'>Bank account</p>
            </Box>
            <Box className='view'>
                <p onClick={handleOpen} className='viewTxt'>View</p>
            </Box>
         </Box>
        </Box>
            <div>
           
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
               <Box className="modalWrapper">
                <p className='addAccountTxt'>Add Account</p>
              <Box style={{display:"flex", flexDirection:"column"}} gap={5}   className='txtField'>
              <TextField    id="outlined-basic" label="Bank name" variant="outlined" placeholder='Enter bank name' />
              <TextField  id="outlined-basic" label="Account holder name" variant="outlined" placeholder='Enter account holder name' />
              <TextField  id="outlined-basic" label="Account number" variant="outlined" placeholder='Enter account number' />
              <TextField  id="outlined-basic" label="IBAN" variant="outlined" placeholder='Enter IBAN code' />
              <TextField  id="outlined-basic" label="SWIFT code" variant="outlined" placeholder='Enter SWIFT code' />
          
              </Box>
           
              <hr style={{width:'100%',colour:'gray'}} />
              <Box className='addAccountflex'>

              <Button className='addAccountBtn'><p>add account</p></Button>
              </Box>

               </Box>
           
              </Box>

            
            </Modal>
          
          </div>
          </>
    )
}

const Thresholdlimit = () => {
    return (
        <>
        <Box className='thresHoldLimitWrapper'>
            <p className='setThreshold'>Set threshold limit</p>
            <p className='withdrawThreshold'>Set your withdrawal threshold limit</p>
            <Box className='grayContainer'>
                <p className='dolarSign'>$100</p>

            </Box>

            <Box sx={{ width: '95%',color:'#341E9D',marginTop:'60px'}}>
      <Slider
        aria-label="Custom marks"
        defaultValue={20}
        getAriaValueText={valuetext}
        step={10}
        valueLabelDisplay="auto"
        marks={marks}
      />
    </Box>

    

        </Box>
        <Box className="setThresholdFlex">
        <Button className='setThresholdBtn'>Set threshold</Button>
        <Button className='cancelBtn'>Cancel</Button>
  
      </Box>
      </>
    )
}




const Payments = () => {
    const [paymentCurrency, setPaymentcurrency] = useState(true);
    const [preferredPaymentMethod, setPreferredPaymentMethod] = useState(false);
    const [thresholdlimit, setThresholdlimit] = useState(false);

    return (
        <Box className="paymentWrapper">
            <Box className="leftSide">


                <Box className='paymentCurrencyFlex'>
                    <img className="icon" style={{display: paymentCurrency === true ? "block" : "none"}} src={rightArrowIcon} />

                    <p className={paymentCurrency === true ? "paraTxtBold" : "paraTxtBlur"}
                        onClick={() => {
                            setPaymentcurrency(true);
                            setPreferredPaymentMethod(false);
                            setThresholdlimit(false);
                        }}
                    >Payment currency</p>
                </Box>

                <Box className='paymentCurrencyFlex'>
                    <img className="icon" style={{display: preferredPaymentMethod === true ? "block" : "none"}} src={rightArrowIcon} />

                    <p className={preferredPaymentMethod === true ? "paraTxtBold" : "paraTxtBlur"}
                        onClick={() => {
                            setPaymentcurrency(false);
                            setPreferredPaymentMethod(true);
                            setThresholdlimit(false);
                        }}

                    >Preferred payment method</p>
                </Box>
                <Box className='paymentCurrencyFlex'>
                    <img className="icon" style={{display: thresholdlimit === true ? "block" : "none"}} src={rightArrowIcon} />

                    <p className={thresholdlimit === true ? "paraTxtBold" : "paraTxtBlur"}
                        onClick={() => {
                            setPaymentcurrency(false);
                            setPreferredPaymentMethod(false);
                            setThresholdlimit(true);
                        }}

                    >Set threshold limit</p>
                </Box>


            </Box>

            <Box className='rightSide'>

                {
                    paymentCurrency === true ? <Paymentcurrency /> : preferredPaymentMethod === true ? <PreferredPaymentMethod /> : <Thresholdlimit />
                }

            </Box>
        </Box>
    )
}

export default Payments