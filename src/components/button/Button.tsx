import { FC } from "react";

interface IButtonProps {
	text: string;
	type?: "button" | "submit" | "reset";
	onClick?: () => void;
}

const Button: FC<IButtonProps> = ({ text, type, onClick }) => {
	return (
		<button
			className='button-container'
			type={type}
			onClick={onClick}
		>
			{text}
		</button>
	);
};

export default Button;
