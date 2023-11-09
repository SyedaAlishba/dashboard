import React from 'react'
import "./widgets.scss"
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';



const Widget = () => {
   const Widgets =[
{
  title: "Total views",
  value: 20000,
  icon1 : <ArrowUpwardIcon />,
  percentage : "37",
  color: "rgba(204, 206, 255, 0.178)",
  fontColor:"#1E9D2B"
  
  
},
{
  title: "Total visits",
  value: 20000,
  icon1 : <ArrowUpwardIcon />,
  percentage : "37",
  color: "rgba(212, 247, 216, 0.181)",
  fontColor:"#B22222"

},
{
  title: "Total orders",
  value: 20000,
  icon1 : <ArrowUpwardIcon />,
  percentage : "37",
  color: "rgba(247, 231, 212, 0.181)",
  fontColor:"#1E9D2B"

},
{
  title: "Total revenue",
  value: 20000,
  icon1 : <ArrowUpwardIcon />,
  percentage : "37",
  color: " rgba(234, 212, 247, 0.181)",
  fontColor:"#B22222"

}
 
  
  ]


 
  return (
  <><div className='widgetWrapper'>

  
  
    { Widgets.map ((item)=>(
    <div style={{backgroundColor: item.color}}  className='widget'>
      <div className="left">
        <span className="title">{item.title}</span>
        <span className="counter">{item.value}</span>


      </div>
      <div className="right">
        <div className="percentage">
          <ArrowUpwardIcon />
          <p style={{color: item.fontColor}}>{item.percentage}%</p></div>
        
      </div>
      
    </div>


    ))
    
}
</div>

    
    </>
  )
}

export default Widget