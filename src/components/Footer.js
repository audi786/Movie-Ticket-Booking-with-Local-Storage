import { Box, Stack, Typography, styled } from "@mui/material";
import React from "react";
import { Facebook, Instagram, Twitter, } from "@mui/icons-material/";

const SocialBox = styled(Box)({
  display: "flex",
  gap: 10,
  color: "white",
    
});

const Footer = () => {
  return (
    <Box sx={{background: "grey", height: "200px", position: "static", right: "0", left: "0"}}>
      <Stack direction={{ xs: "row", md: "row" }} p={7}>
        
        
        <Box flex={1}>
          <Typography color={"white"} align={"center"}>
            Contact Us
          </Typography>
          <Typography color={"white"} align={"center"}>
           +841 65414760
          </Typography>

        </Box>
        <Box flex={1}>
          <Typography color={"white"} align={"center"}>
            CopyRight 2023 Ticket 4 us
          </Typography>

        </Box>
        <Box flex={1}>
          <Typography color={"white"} align={"center"}>
            Categories
          </Typography>
          <Typography color={"white"} variant={"body2"} align={"center"}>
            HORROR
          </Typography>
          <Typography color={"white"} variant={"body2"} align={"center"}>
           THRILLER
          </Typography>
          <Typography color={"white"} variant={"body2"} align={"center"}>
           COMEDY
          </Typography>
        </Box>
        <Box>
          <Typography color={"white"} align={"center"}>
            Follow Us
          </Typography>
          <SocialBox>
            <Facebook />
            <Instagram />
            <Twitter />
          </SocialBox>
        </Box>
      </Stack>
    </Box>
  );
};

export default Footer;