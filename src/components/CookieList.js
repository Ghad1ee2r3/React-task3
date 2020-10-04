import React from "react";

// Styling
import styles from "../styles";

// Data
import cookies from "../cookies";

import CookieItem from "./CookieItem";





const cookieList = () => {
     let cookieList = cookies.map((cookie) => (
       <CookieItem cookie={cookie} key={cookie.id} />
 ));
 
    return (
     <div style={styles.list}>
       {/* {cookieList} */}
        <div>{cookieList}</div> 
     </div>
    );
 };

 export default cookieList;




  