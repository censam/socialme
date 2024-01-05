import { Box, useMediaQuery } from "@mui/material";
import React from "react";
import NavBar from "scenes/navbar";
import { useSelector } from "react-redux";
import UserWidget from "scenes/widgets/UserWidget";

const HomePage = () => {
 const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
 let user = {};
 const { _id, picturePath } = (user = useSelector((state) => state.user));

 console.log(user);
 return (
  <Box>
   <NavBar />
   <Box
    width={"100%"}
    padding={"2rem 6%"}
    display={isNonMobileScreens ? "flex" : "block"}
    gap={"0.5rem"}
    justifyContent={"space-between"}>
    <Box flexBasis={isNonMobileScreens ? "26%" : undefined}>
     <UserWidget userId={_id} picturePath={picturePath} />
    </Box>
    <Box
     flexBasis={isNonMobileScreens ? "42%" : undefined}
     mt={isNonMobileScreens ? undefined : "2rem"}>
     dddddddd
    </Box>
    {isNonMobileScreens && <Box flexBasis={"26%"}>eeeeeeeeeee</Box>}
   </Box>
  </Box>
 );
};

export default HomePage;
