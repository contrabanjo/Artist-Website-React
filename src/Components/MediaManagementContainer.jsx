import React, {useState} from "react";

function MediaManagementContainer(props){
	const [menu, setMenu] = useState(false);

	const clickHandler = (e) => {
		setMenu(!menu);
	}

	const renderMenu = () =>{
		return (
			<ul>
			   <li title="move">Move</li>
			   <li title="delete">Delete</li>
			</ul>
		)
	}



	return (
	 <div className="media-manage-container" onClick={clickHandler}>
		 {menu ? renderMenu() : null}
		 {props.children}
	 </div>
	);
}



export default MediaManagementContainer;