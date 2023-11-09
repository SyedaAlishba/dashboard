import React from 'react' 
import "./deliveredorders.scss"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';  
import { Button, TextField } from '@mui/material';

import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import orderimg from '../../../Assets/Images/orderimg.png'
import ordericon from '../../../Assets/Icons/orderIcon.png'
import crossIcon from '../../../Assets/Icons/crossIcon.png'







const style = {
  position: 'absolute',
  top: '50%',
  left: '83%',
  transform: 'translate(-50%, -50%)',
  height: 'auto',
  width: '600px',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  borderRadius: "12px",

};
const styleCancellationModal = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  height: 'auto',
  width: '500px',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  borderRadius: "12px",
};
const styleRequestCancellation = {
  position: 'absolute',
  top: '50%',
  right: '50%',
  transform: 'translate(-50%, -50%)',
  height: 'auto',
  width: '480px',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  borderRadius: "12px",

};



function createData(name, category, description, price, qty, dateCreated, status, more) {
    return { name, category, description, price, qty, dateCreated, status, more };
}
const rows = [
    createData('Lab Earrings', "Jewelry", "This is jewelry", '24$', 9, '27/02/2023', "Pending"),
    createData('Apple', "Jewelry", "This is jewelry", '24$',9, '27/02/2023', "Pending"),
    createData('Lab Earrings', "Jewelry", "This is jewelry", '24$',9, '27/02/2023', "Pending"),
    createData('Lab Earrings', "Jewelry", "This is jewelry", '24$',9, '27/02/2023', "Pending"),
    createData('Lab Earrings', "Jewelry", "This is jewelry", '24$',9, '27/02/2023', "Pending"),
    createData('Lab Earrings', "Jewelry", "This is jewelry", '24$',9, '27/02/2023', "Pending"),
    createData('Lab Earrings', "Jewelry", "This is jewelry", '24$',9, '27/02/2023', "Pending"),
    createData('Lab Earrings', "Jewelry", "This is jewelry", '24$',9, '27/02/2023', "Pending"),
    createData('Lab Earrings', "Jewelry", "This is jewelry", '24$',9, '27/02/2023', "Pending"),
    createData('Lab Earrings', "Jewelry", "This is jewelry", '24$',9, '27/02/2023', "Pending"),
  ];

const Ordertable = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [openCancellationModal, setOpenCancellationModal] = React.useState(false);
    const handleOpenCancellationModal = () => setOpenCancellationModal(true);
    const handleCloseCancellationModal = () => setOpenCancellationModal(false);

    const [openRequestCancellation, setOpenRequestCancellation] = React.useState(false);
  const handleOpenRequestCancellation = () => setOpenRequestCancellation(true);
  const handleCloseRequestCancellation = () => setOpenRequestCancellation(false);

    
  return (
    <>
        <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box>
        

        <Box className="modalWrapperDelivered">
        <p className='orderDetails'>Order Details</p>
        <Box className="imgFlex">
        <img src={orderimg} className='img' />
        <Box>
        <p className='boldHeadingOrder1'>Earthenware Pot</p>
        <p className='boldHeadingOrder1'>$100</p>
        </Box>
        

        </Box>
      
        
        < Box className="orderDetailWrapper">
        <p className='boldHeadingOrder'>Customer</p>

        <Box className="iconFlex"> 
        <img onClick={handleClose} src={ordericon} className='icon' />
        <p className='blurTxtOrder'>Chidinma Ukaegbu</p>


        
         </Box>



          <p className='boldHeadingOrder'>Category</p>
          <p className='blurTxtOrder'>Pottery</p>
          <p className='boldHeadingOrder'>Quantity</p>
          <p className='blurTxtOrder'>3 Pieces</p>
          <p className='boldHeadingOrder'>Colour</p>
          <p className='blurTxtOrder'>Rosegold</p>
          <p className='boldHeadingOrder'Order>Order date</p>
          <p className='blurTxtOrder'>30th May, 2022</p>
          <p className='boldHeadingOrder'>Expected delivery date</p>
          <p className='blurTxtOrder'>30th June, 2022</p>
          <p className='boldHeadingOrder'>Delivery method</p>
          <p className='blurTxtOrder'>Delivery method</p>
          <hr
        style={{
          background: '#EDEAFB',
          color: '#EDEAFB',
          borderColor: '#EDEAFB',
          width: '100%',
        }}
      />
     
        </Box>
    <Box className="btnFlex">
    <Button className='fulfilOrder'>Fulfil Order</Button>
      <Button onClick={handleOpenCancellationModal} className='requestCancellation'>Request cancellation</Button>
      </Box>
    </Box>



      


       
            
          </Box>
         
        </Box>
      </Modal>
    </div>
    <div>
      
      <Modal
        open={openCancellationModal}
        onClose={handleCloseCancellationModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styleCancellationModal}>

          <Box className="requestingCancellationWrapperDelivered">
            <Box className="crossIconFlex">
            <p className='boldTxt'>Reason for requesting cancellation</p>
            <img onClick={ handleCloseCancellationModal } className='iconStyle' src={crossIcon} />
            </Box>
            <hr
        style={{
          background: '#EDEAFB',
          color: '#EFF1F5',
          borderColor: '#EDEAFB',
          width: '100%',
          marginBottom:'32px',
         
        }}
      />
            <TextField className="cancellationTxtField" id="outlined-basic" label="Subject" placeholder="I’m currently not available" variant="outlined" />
            <TextField className="cancellationTxtField" id="outlined-basic" label="Reason" placeholder="My craft is out of stock" variant="outlined" />
            <TextField className="cancellationTxtField" id="outlined-basic" label="Explainatiion" placeholder="I’m feeling sick" variant="outlined" />
            <p className='other'>Others</p>
            <TextField className="cancellationTxtField" id="outlined-basic" label="Enter your reason..." placeholder="Enter your reason..." variant="outlined" />
            <Box className="btnWrapper">
              <Button onClick={handleOpenRequestCancellation} className='send'>Send</Button>
              <Button className='cancel'>Cancel</Button>
            </Box>
          </Box>
        </Box>
      </Modal>
    </div>

    <div>
      
      <Modal
        open={openRequestCancellation}
        onClose={handleCloseRequestCancellation}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styleRequestCancellation}>
        <Box className="requestCancellationWrapper">
          <Box className="iconFlex">
          <img onClick={handleCloseRequestCancellation} className='iconStyle' src={crossIcon} />
       

          </Box>
          <Box className="flexParaBtn">
            <p className='headingRequestCancellation'>Request cancellation</p>
            <p className='txtRequestCancellation'>Your request for cancellation has been sent successfully, this will
               be under review and you will get a notification within 24hrs
                when it gets published.</p>
              <Button onClick={handleOpenRequestCancellation} className='gotitBtn'>Got it</Button>



          </Box>
        </Box>
        </Box>
      </Modal>
    </div>
   
   <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow style={{backgroundColor:"#F9F9FB"}}>
              <TableCell  align="left">Product Name</TableCell>
              <TableCell align="left">Product Category</TableCell>
              <TableCell align="left">Product Description</TableCell>
              <TableCell align="left">Price</TableCell>
              <TableCell align="left">Qty</TableCell>
              <TableCell align="left">Date Created</TableCell>
              <TableCell align="left">Status</TableCell>
              <TableCell align="left">More</TableCell>

            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow
                key={row.index}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
              <TableCell align="left">{row.name}</TableCell>
                <TableCell align="left">{row.category}</TableCell>
                <TableCell align="left">{row.description}</TableCell>
                <TableCell align="left">{row.price}</TableCell>
                <TableCell align="left">{row.qty}</TableCell>
                <TableCell align="left">{row.dateCreated}</TableCell>
                <TableCell align="left"  ><div className='statusPending'>{row.status}</div></TableCell>
                <TableCell ><Button  onClick={handleOpen} style={{textTransform:"capitalize"}}>View</Button></TableCell>

              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}

export default Ordertable