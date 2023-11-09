import React from 'react'
import "./rating.scss"
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

const Ratings = () => {
  return (
    <div className="ratingWrapper">
        <div className='title'>
            <p className='heading'>Hello, Chidinma</p>
            <p className='discription'>Saturday, 22 January 2022</p>
        </div>
        <div className='ratingActive'>
            <div className='currentRating'>
            <p className='current'>Current rating</p>

            <div className='forFlexRating'>
             


                <p className='ratio' >4.00</p>
                <Stack spacing={1}>

                <Rating name="size-small" defaultValue={2} size="small" />

</Stack>

            </div>
            </div>
            <hr/>
            <div className='ActiveListings'>
            <div className='listing'>
              <p className='forFlexListing'>Active listings</p>
              <p className='crafts'>100 Crafts</p>
            </div>
            </div>
  

        </div>

    </div>

  )
}

export default Ratings;