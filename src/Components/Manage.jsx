import React, {useState} from "react";

import Media from "./Media.jsx"
import MediaManagementContainer from "./MediaManagementContainer.jsx"

function Manage(props){
		return (
			<div id="manage-page">
		        {props.children.map((child, index) => {
		        	return (
		        		<MediaManagementContainer key={index}>
		        			<Media src={"./images/"+ child}/>
		        		</MediaManagementContainer>
		        	)
		        })}
	        </div>
		);
}

export default Manage;