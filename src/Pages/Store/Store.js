import React from 'react'
import "./store.scss"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Add from "../../Assets/Icons/add.png"
import TuneIcon from '@mui/icons-material/Tune';
import { Button, Divider } from '@mui/material';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import earthenware from "../../Assets/Images/earthenware.png"
import { useNavigate } from 'react-router-dom';


function createData(name, category, description, price, qty, dateCreated, status, more) {
  return { name, category, description, price, qty, dateCreated, status, more };
}

const rows = [
  createData('Lab Earrings', "Jewelry", "This is jewelry", '24$', 9, '27/02/2023', "InActive"),
  createData('Apple', "Jewelry", "This is jewelry", '24$', 9, '27/02/2023', "Active"),
  createData('Lab Earrings', "Jewelry", "This is jewelry", '24$', 9, '27/02/2023', "Active"),
  createData('Lab Earrings', "Jewelry", "This is jewelry", '24$', 9, '27/02/2023', "Active"),
  createData('Lab Earrings', "Jewelry", "This is jewelry", '24$', 9, '27/02/2023', "Pending"),
  createData('Lab Earrings', "Jewelry", "This is jewelry", '24$', 9, '27/02/2023', "Active"),
  createData('Lab Earrings', "Jewelry", "This is jewelry", '24$', 9, '27/02/2023', "Pending"),
  createData('Lab Earrings', "Jewelry", "This is jewelry", '24$', 9, '27/02/2023', "Pending"),

  ` 1`

];

const style = {
  position: 'absolute',
  top: '50%',
  left: '75%',
  transform: 'translate(-50%, -50%)',
  height: 'auto',
  width: '600px',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


const Store = () => {
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate()
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <div className="myStoreWrapper">
        <div className='myStore'>
          <p className='store'>My Store</p>
          <p className='totall'>100</p>
        </div>
        <div className='filterFlex'>
          <div className='filter' >
            <TuneIcon />
            <p className='filterTxt'>Filters</p>
          </div>
          <div className='newList'>
            <img src={Add} className='icon' />
            <p className='addNew'>Add New Listing</p>

          </div>

        </div>


      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box className="modalWrapper">
            <p className='earthenware'>Earthenware pots</p>
            <img src={earthenware} className='imgearthenware' />
            < Box className="craftDiscriptionWrapper">
              <p className='boldHeading'>Craft description</p>
              <p className='blurTxt'>Earthenware pots, often called terracotta, absorbs liquids such as water. However, earthenware can be made impervious. Earthenware is glazed or unglazed nonvitreous pottery that has normally been fired below 1,200 °C. Basic earthenware, absorbs liquids such as water. However, earthenware can be made impervious to liquids by coating it with a ceramic glaze,
                which the great majority of modern domestic earthenware has.</p>
              <p className='boldHeading'>Dimensions (cm)</p>
              <p className='blurTxt'>10 (W) X 10 (L) X 10(H)</p>
              <p className='boldHeading'>Weight in grams</p>
              <p className='blurTxt'>10g</p>
              <p className='boldHeading'>Colour</p>
              <p className='blurTxt'>Rosegold</p>
              <p className='boldHeading'>Material Used</p>
              <p className='blurTxt'>Clay</p>
              <hr
                style={{
                  background: '#EDEAFB',
                  color: '#EDEAFB',
                  borderColor: '#EDEAFB',
                  width: '436px',
                }}
              />
              <p className='boldHeading'>Category and tags</p>
              {/* <hr
        style={{
          background: '#EDEAFB',
          color: '#EDEAFB',
          borderColor: '#EDEAFB',
          width: '555px',
        }}
      /> */}
              <Divider />
            </Box>
            <Box className="btnEditCraftWrapper"><Button onClick={(e)=> navigate("/editcraft")} className='btnEditCraft'>Edit Craft</Button></Box>




          </Box>
        </Box>
      </Modal>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow style={{ backgroundColor: "#F9F9FB" }}>
              <TableCell align="left">Product Name</TableCell>
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
                
                <TableCell align="left" className='statusWrapper'><div className={row.status === "Active" ? "statusActive" : row.status === "InActive" ? "statusInActive" : "statusPending"}>{row.status}</div></TableCell>
               
               
               
               
              


                <TableCell align="left"><Button onClick={handleOpen} style={{ textTransform: "capitalize" }}>View</Button></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>


  )
}

export default Store