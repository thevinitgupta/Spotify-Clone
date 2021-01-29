import React, { useState } from 'react';
import "./Player.css"
import Sidebar from "./Sidebar"
import Body from "./Body";
import Footer from "./Footer";
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { IconButton } from '@material-ui/core';


function Player({spotify}) {
    const [openMenu,setOpenMenu] = useState(false);
    const [displayMenu,setDisplayMenu] = useState(false);
    const [rotateArrow,setRotateArrow] = useState({
        transition : "transform ease-in 150ms",
        transform : "rotate(0deg)"
    });

    return (
        <div className="player">
          <div className="player__body">
            <Sidebar index="0"/>
              {displayMenu&&<Sidebar index="4"/> }
              <div id="menu__btn" onClick={()=>{

                  setOpenMenu(!openMenu);
                  setRotateArrow((prevVal) => {
                      if(prevVal.transform==="rotate(0deg)"&&openMenu===true){
                      return ({
                          ...prevVal,
                          transform : "rotate(180deg)"
                      });
                      }
                      else {
                        return ({
                          ...prevVal,
                          transform : "rotate(0deg)"
                      }); 
                      }
                  })
                  openMenu?setDisplayMenu(true):setDisplayMenu(false);
                  }
                  } className="player__menu__btn" style={rotateArrow}>
                    <IconButton size="medium" >
                    <ChevronRightIcon htmlColor="#ffffff" fontSize="inherit"/>
                    </IconButton>
                    
                   
                    
              </div>
              <Body spotify={spotify}/>
          </div>  
          <Footer />
        </div>
    )
}

export default Player
