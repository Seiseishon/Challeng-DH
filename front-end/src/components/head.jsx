import React from "react";
import { useState } from "react";

 function head() {
	 const [count, setCount] = useState(0);

	 return (
       <>       
	        <meta charset="UTF-8"/>
	        <title>Dashboard - React</title>
	        <link rel="stylesheet" href="./assets/css/normalize.min.css"/>
	        <link rel='stylesheet' href='./assets//css/font-awesome.min.css'/>
	        <link rel="stylesheet" href="./assets/css/bootstrap.min.css"/>
    	    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.4/font/bootstrap-icons.css"/>
    	    <link rel="stylesheet" href="./assets/css/style.css"/>     
       </>
      );
    }

   export default head;