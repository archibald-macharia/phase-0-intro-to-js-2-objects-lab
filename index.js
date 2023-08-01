// Write your solution in this file!
// Object code
const employee = {
	name: "Sam",
	streetAddress: "11 Broadway",
};


function updateEmployeeWithKeyAndValue(employee, key, value){
	return {
		...employee, [key]:value,
	};
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
		employee["name"] = "Sam";
		employee["streetAddress"] = "12 Broadway";
		return employee;
}

function deleteFromEmployeeByKey(employee, key){
	const newEmployee = {...employee}
	delete newEmployee[key];
	return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
	delete employee[key];
	return employee;

}