"use client";
import { useEffect } from "react";
import Link from "next/link";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import {Home, About, Skill, Resume, MyWork, Contact} from "./assets/svg/utilsSVG";
import Options from "./options"



const drawerWidth = 200;

// const options = ["Profile", "Your", "Seeting", "Logout"];


export default function Sidebar ({children}:any) {
  
  

  const navItems = [
    {
      title: "Home",
      icon: <Home/>,
      href: "./",
      segment: null,
    },
    {
      title: "About",
      icon: <About/>,
      href: "./about",
      segment: "about",
    },
    {
      title: "Skill",
      icon: <Skill/>,
      href: "./skill",
      segment: "skill",
    },
    {
      title: "Resume",
      icon: <Resume/>,
      href:"./resume",
      segment: "resume",
    },
    {
      title: "My Work",
      icon: <MyWork/>,
      href: "./mywork",
      segment: "mywork",
    },
  ];


  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
              bgcolor: "#000113",
              color: "#FFFFFF",
              px: 2,
            },
          }}
          variant="permanent"
          // anchor="left"
        >
            <div className="m-5 font-bold text-2xl text-start">Enoch</div>
         
          <List sx={{width:'100%'}}>
            {navItems.map((item, index) => (
              <ListItem
                key={index}
                disablePadding
                sx={{
                  width:'100%',
                  display: "flex",
                  justifyContent: "start",
                  alignItems: "center",
                  my: 2,
                }}
              >
                <Link className="flex w-[100%] justify-start" href={item.href}>
                <ListItemButton
                  id="itemButton"
                  // sx={{
                  //   borderRadius: 2, 
                  //   display: "flex",
                  //   width:'100%', 
                    
                  
                  // }}
                >
                    <ListItemIcon id="itemIcon" className="text-white">
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText
                      primary = <Typography sx={{ fontSize: 12, fontWeight: "bold" }}
                      >
                        {item.title}
                      </Typography>
                    />
                </ListItemButton>
                  </Link>
              </ListItem>          
            ))}
          </List>
            {/* <div className="flex flex-row pt-48 text-center"><Contact/> Contact {"   "} <Contact/></div> */}
            <Options/>
        </Drawer>        
      </Box>
    </>
  );
}
