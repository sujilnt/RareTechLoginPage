import loginData from '../data/loginData';

const data = loginData();
const validateUser = (validateDetails) => {
	const { userName, passWord } = validateDetails;
	let currentData = data.find((element) => {
		return element.password === passWord && element.userName === userName;
	});
	return currentData ? true : false;
};

export default validateUser;
