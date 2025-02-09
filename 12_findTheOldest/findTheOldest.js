function getPersonAge(person) {
    let yearOfBirth = person.yearOfBirth;
    let yearOfDeath = person.yearOfDeath || new Date().getFullYear();

	return yearOfDeath - yearOfBirth;
}

const findTheOldest = function (people) {
	let oldest = people.reduce((oldestPerson, currentPerson) => {
		const oldestPersonAge = getPersonAge(oldestPerson);
		const currentPersonAge = getPersonAge(currentPerson);
		if (currentPersonAge <= oldestPersonAge) {
			return oldestPerson;
		}

		return currentPerson;
	});
	console.log(oldest);
	return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
