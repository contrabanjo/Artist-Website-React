import React from "react";
import Media from "./Media.jsx"


function Gallery(props){
	getMedia()
		return (
		 <div id="gallery">
		 	{props.children.map((child, index) => <Media key={index} src={"./images/"+ child}/>)}
		 	
		 </div>
		);
}

function getMedia(){
	
}



export default Gallery;