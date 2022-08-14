
import React from "react"
import Link from "next/link";
import classes from './footer.module.css'


function Footer (){

    return(
        <div className={classes.Footer}>
        <p>Twet Prototype and build apps with Nextjs and Swift.
        New courses by @Bahrini</p>
        <button>Tweet</button>
          </div>
    )
 

}


export default Footer;