import { Box, TextField,Button} from '@mui/material';
import * as React from 'react';
import "./CustomerSupportStyles.scss"



function CustomerSupport() {
  return (
    <Box className="customerSupportMainWrapper">

        <p>
        Experiencing Problems? Let us know what difficulty you are having. 
Our customer service & support is here to help 24/7.
        </p>
        <Box className="textFieldsWrapper" gap={2}>
        <TextField className="textField"  label="Full Name"  />
        <TextField className="textField"  label="Email" />
        <TextField className="textField"  label="Subject" />
        <TextField  multiline
          rows={5} className="textArea"  label="Message" />
      </Box>
      <Box className="submitBtn">
          <Button className="submitBtn1" variant="contained">
          Submit
          </Button>
          <Button className="cancelBtn" variant="outlined">
            Cancel
          </Button>
      </Box>

    </Box>
  )
}
export default CustomerSupport;