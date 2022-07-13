import React from "react";
import Media from "./Media.jsx"


function Gallery(props){
		return (
		 <div id="gallery">
		 	{props.children.map((child, index) => <Media key={index} src={"./images/"+ child}/>)}
		 	<button onClick={clickHandler}>Back To Top</button>
		 </div>
		);
}

const clickHandler = (e)=>{
	window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

export default Gallery;