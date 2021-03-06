import React from 'react';
// step 43 : import react-routee-dom
// import { Link } from 'react-router-dom';
// step 42 : import react-reveal
import {Fade} from 'react-reveal';
// step 39 : create Blocks component
const Blocks = (props) => {
        return(
            <div className="home-blocks">
                {generateBlocks(props)}
            </div>
        );
}

// step 41 : create generateBlocks 
const generateBlocks  = ({blocks}) => {
    if(blocks){
        return blocks.map((item)=>{
            return(
                // step 44 : create fade template
                <Fade bottom key={item.id} className={`item ${item.type}`} >
                    <div className="veil" ></div>
                    <div className="image" style={{background: `url(/images/blocks/${item.image}) no-repeat` }} ></div>
                    <div className="title" >
                        <div>{item.title}</div>
                    </div>
                </Fade>
            );
        });
    }
}

export default Blocks;