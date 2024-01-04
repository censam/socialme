import React from "react";
import NavBar from "../navbar";
import {
 Box,
 IconButton,
 InputBase,
 Typography,
 Select,
 MenuItem,
 FormControl,
 useTheme,
 useMediaQuery,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import Form from "./Form";

const LoginPage = () => {
 const theme = useTheme();
 const navigate = useNavigate();
 const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
 const primaryLight = theme.palette.primary.light;
 return (
  <Box>
   <Box
    width="100%"
    backgroundColor={theme.palette.background.alt}
    p="1rem 6%"
    textAlign={"center"}>
    <Typography fontWeight={"bold"} fontSize="32px" color={"primary"}>
     SocialMe
    </Typography>
   </Box>
   <Box
    width={isNonMobileScreens ? "50%" : "93%"}
    p={"2rem"}
    m={"2rem auto"}
    borderRadius={"1.5rem"}
    backgroundColor={theme.palette.background.alt}>
    <Typography fontWeight={"500"} variant="h5" sx={{ mb: "1.5rem" }}>
     Welcome to SocialMe , Empower Your Story: Unleash the Power of Social
     Connections!
    </Typography>
    <Form></Form>
   </Box>
  </Box>
 );
};

export default LoginPage;
