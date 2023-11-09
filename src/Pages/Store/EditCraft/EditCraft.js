import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import "./EditCraftStyle.scss"


const EditCraft = () => {
    return (
        <Box className="editCraftPageWrapper">
            <Box className="backArrowBtn">
                <ArrowBackIcon />
                <h2>Edit Craft</h2>


            </Box>
            <Box className="fullContainer">
            <Box className="textFieldWrapper">
            <TextField className='txtField' id="outlined-basic" label="Craft Name" variant="outlined" />
            <TextField className='txtField' id="outlined-basic" label="Craft Description" variant="outlined" multiline rows={3} />
            <p>Other Details</p>
            <Box  className="otherDetailsWrapper">
            <TextField className='txtField' id="outlined-basic" label="Length" variant="outlined" />
            X
            <TextField className='txtField' id="outlined-basic" label="Width" variant="outlined" />
            X
            <TextField className='txtField' id="outlined-basic" label="Height" variant="outlined" />
            </Box>

            <TextField className='txtField' id="outlined-basic" label="Weight in Grams" variant="outlined" />
            <TextField className='txtField' id="outlined-basic" label="Color" variant="outlined" />
            <TextField className='txtField' id="outlined-basic" label="Material Used" variant="outlined" />
            <Divider />

            <p>Catgeory and Tags</p>
           
            <TextField id="outlined-basic" label="Catgeory" variant="outlined" />
            <TextField id="outlined-basic" label="Tags" variant="outlined" />
    

            <Divider />

<p>Personalization</p>

<TextField id="outlined-basic" label="Offer Personalization" variant="outlined" />
<TextField id="outlined-basic" label="Personalization Cost" variant="outlined" />

<Divider />

<p>Shipping</p>

<TextField id="outlined-basic" label="Shipping Method" variant="outlined" />
<TextField id="outlined-basic" label="Processing Time" variant="outlined" />
<TextField id="outlined-basic" label="Hnadling Cost" variant="outlined" />

<Divider />

<p>Inventory and Pricing</p>

<TextField id="outlined-basic" label="Quantity" variant="outlined" />
<TextField id="outlined-basic" label="Price (US Dollars)" variant="outlined" />
<TextField id="outlined-basic" label="SKU (optional)" variant="outlined" />
<TextField id="outlined-basic" label="Time Required To Restock" variant="outlined" />

            </Box>
            </Box>

        </Box>
    )
}

export default EditCraft