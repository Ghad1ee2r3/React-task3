import React from "react";

import styles from "../styles";
//import cookieList from "./CookieList";


const CookieItem = props => {
    const cookie = props.cookie;
    return (
      <div style={styles.cookie} key={cookie.id}>
          <img style={styles.cookieImage} alt={cookie.name} src={cookie.image} />
          <p style={styles.text}>{cookie.name}</p>
          <p style={styles.text}>{cookie.price} KD</p>
      </div>
    );
}



  export default CookieItem;