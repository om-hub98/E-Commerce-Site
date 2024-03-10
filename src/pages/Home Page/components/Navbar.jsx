import { Avatar, Box } from '@mui/material'
import React from 'react'

const Navbar = () => {
  return (
    <Box    
    sx={{
        m:"1rem 0rem",
        p:"3rem",
        display:"flex",
        justifyContent:"space-between",
        height:"5rem",
        bgcolor:"green",
        color:"#FFFFFF",
        alignItems:"center",
    }}
    >
        <Box 
        sx={{
            width:"20%",
            display:"flex",
            justifyContent:"space-between",
        
        }}
        >
            <div >Men</div>
            <div>Women</div>
            <div>Kids</div>
        </Box>
        <div>
            <Avatar />
        </div>
    </Box>
  )
}

export default Navbar
