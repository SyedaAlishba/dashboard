import React from 'react'
import "./updateorders.scss"
import Box from '@mui/material/Box';
import { Button, TextField } from '@mui/material';
import leftArrowIcon from "../../../../Assets/Icons/LeftArrow.png"


const UpdatesOrders = () => {
  return (
  <>
  <Box className="updatesOrdersWrappers" >
    <Box className="updateOdersIconFlex">
    <img className='updateIcon' src={leftArrowIcon} />
    <p className='UpdateTxt'>Update Order</p>

    </Box>
    <Box className="textfieldWrapper">
      <p className='headingUpdateTxt'>Delivery details</p>
      <TextField multiline={true} rows={2} className="UpdatsOrdersDeliveryTxtField" id="outlined-basic" label="Subject"
       placeholder="Address: 12 Safewell apartment, ojulari street, Lagos Nigeria
       State: Lagos State
       Country: Nigeria
       Postal code: 103245" variant="outlined" />

<p className='headingUpdateTxt'>Contact details</p>
      <TextField multiline={true} rows={2} className="UpdatsOrdersContactDetailsTxtField" id="outlined-basic" label="Subject"
       placeholder="Phone number: + 234 703 1945 084
       Email: chidinmaukaegbu.cu@gmail.com"
        variant="outlined" />
       
          <p className='headingUpdateTxt'>Expected delivery date</p>
      <TextField className="UpdatsOrdersTxtField" id="outlined-basic" label="Subject"
       placeholder="30 January 2022"
        variant="outlined" />
             <p className='headingUpdateTxt'>Delivery status</p>
      <TextField className="UpdatsOrdersTxtField" id="outlined-basic" label="Subject"
        variant="outlined" />

<p className='headingUpdateTxt'>Tracking number</p>
      <TextField className="UpdatsOrdersTxtField" id="outlined-basic" label="Subject"
       placeholder="#12345678"
        variant="outlined" />

        
<p className='headingUpdateTxt'>Delivery cost</p>
      <TextField className="UpdatsOrdersTxtField" id="outlined-basic" label="Subject"
       placeholder="$50.00"
        variant="outlined" />

<p className='headingUpdateTxt'>Handling cost</p>
      <TextField className="UpdatsOrdersTxtField" id="outlined-basic" label="Subject"
       placeholder="$50.00"
        variant="outlined" />







    </Box >
    <Box className="updateBtnWrapper">
      <Button className='comfirmUpdateBtn'>Confirm Update</Button>
      <Button className='updateCancelBtn'>Cancel</Button>



    </Box>
    
  </Box>
  </>
  )
}

export default UpdatesOrders