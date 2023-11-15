import { FC } from "react";

interface IFormInput {
	fieldName: string;
	type: string;
	placeholder: string;
	icon: string;
	required?: boolean;
	minLength?: number;
}

const FormInput: FC<IFormInput> = ({ fieldName, type, placeholder, icon, required, minLength }) => {
	return (
		<input
			className='input-container'
			type={type}
			name={fieldName}
			placeholder={placeholder}
			required={required}
			minLength={minLength}
			style={{ background: `url(${icon}) 26px no-repeat` }}
		/>
	);
};

export default FormInput;
