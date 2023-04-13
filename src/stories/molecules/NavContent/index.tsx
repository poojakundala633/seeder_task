import React from 'react'
import {Typography} from '@mui/material';
type props = {
  title : string;
  desc : string;
}
const NavContent: React.FC<props> = ({ title, desc })=>{
  return (
    <div>
      <Typography sx={{
        width: "100%",
        height: "35px",

        /* title */

        fontFamily: 'Gilroy',
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: "28px",
        lineHeight: "42px",
        paddingLeft:"230px",
        paddingTop:"30px",
        marginTop:"-20px",
        /* identical to box height, or 117% */

        letterSpacing: "-0.015em",

        /* text/high emp */

        color: "white",


        /* Inside auto layout */

        flex: "none",
        order: "0",
        flexGrow: "0",}}
        >{title}</Typography>


        <Typography sx={{
            width: "388px",
            height: "27px",

            /* heading 3 */

            fontFamily: 'Gilroy',
            fontStyle: "normal",
            fontWeight: "500",
            fontSize:"18px",
            lineHeight: "150%",
            paddingLeft:"230px",
            /* identical to box height, or 27px */


            /* text/low emp */

            color: "#A5A5A6",


            /* Inside auto layout */

            flex: "none",
            order: "1",
            flexGrow: "0",}}>
                
                {desc}
</Typography>
    </div>
  )
}

export default NavContent
