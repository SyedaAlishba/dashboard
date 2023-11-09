import React, { PureComponent } from 'react'
import "./home.scss"
import { Box } from '@mui/material'
import Ratings from './Rating/Ratings'
import Widget from './Wigets/Widget'
import HomeCharts from '../../Components/HomeCharts/HomeCharts'



const Home = () => {
  return (
    <Box>
      <Ratings />
      <Box>
        <Widget /> 
      </Box>
      <Box>
 <HomeCharts />
      </Box>
    </Box>
  )
}

export default Home
