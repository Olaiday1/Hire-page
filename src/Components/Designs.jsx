import { useState } from "react";
import Frame1 from "../Images/Frame1.png";

const myine = () => {

    
    return (
        <>
        
        <div className="portfolio">
             <img src={Frame1} alt="" style={{height: "3125px", width: "720px", maxHeight:"100%"} }/>
             <img src={Frame1} alt="" style={{height: "2997px", width: "200px", padding:"50px",maxHeight:"100%"} }/>
        </div>
        </>
    );
};
export default myine;