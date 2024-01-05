import React from "react";
import { Box } from "@mui/material";

function UserImage({ image, size = "60px" }) {
 return (
  <div>
   <Box width={size} height={size}>
    <img
     style={{ objectFit: "cover", borderRadius: "50%" }}
     width={size}
     height={size}
     alt="user"
     src={`http://localhost:3001/assets/${image}`}
    />
   </Box>
  </div>
 );
}

export default UserImage;
