import React from 'react'
import './Services.css'
// import services_data from '../../assets'

const Services = () => {
  return (
    <div className="Services">
        <div className="servicestitle">
            <h1>My Services</h1>
            <img src="" alt="" />
        </div>
        <div className="secvicescontainer">
            {services_data.map((service , index )=>{
                return <div  key = {index}className="servicesformate"><h3>{service.s_no}</h3>
                <h2>{service.s_name}</h2>
                <p>{service.s_desc}</p></div>
                
            })}
        </div>
    </div>  
  )
}

export default Services