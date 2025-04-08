import React from "react";

const Button = ({ children, onClick, className = "", disabled = false }) => {
	return (
		<button onClick={onClick} disabled={disabled} className={className}>
			{children}
		</button>
	);
};

export default Button;
