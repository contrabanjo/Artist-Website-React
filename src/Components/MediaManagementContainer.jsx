import React, {useState} from "react";

function MediaManagementContainer(props){
	const [menu, setMenu] = useState(false);
	return (
	 <div className="media-manage-container" onClick={(e)=> { clickHandler(e)}}>
	 {menu ? renderMenu() : null}
	 {props.children}
	 </div>
	);
}

const clickHandler = (e) => {
	console.log(e.target, "has been clicked")
	setMenu(!menu);
}

const renderMenu = () =>{
	return (
		<div>menu</div>
	)
}

export default MediaManagementContainer;