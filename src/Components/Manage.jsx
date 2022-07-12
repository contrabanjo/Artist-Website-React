import React, {useState} from "react";

import Media from "./Media.jsx"
import MediaManagementContainer from "./MediaManagementContainer.jsx"

function Manage(props){
		return (
			<div id="manage-page">
		        {props.children.map((child, index) => {
		        	return (
		        		<Media-Management-Container key={index}>
		        			<Media src={"./images/"+ child}/>
		        		</Media-Management-Container>
		        	)
		        })}
	        </div>
		);
}

const clickHandler = (e) => {

}

export default Manage;