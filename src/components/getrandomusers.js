import random from 'random';

export default function getrandomUsers(id) {
	/**
	 * @todo Add http request to get this information
	*/
	const users = [ // It could be http request (todo add http request)
		{ id: 0, name: "Ronnie", position: "CEO",       busyness: "full",    birthday: "13.04.1996", sex: "male"   },
		{ id: 1, name: "Alex",   position: "Developer", busyness: "partial", birthday: "18.02.1998", sex: "female" },
		{ id: 2, name: "Bill",   position: "Manager",   busyness: "full",    birthday: "25.10.1990", sex: "male"   },
		{ id: 3, name: "Brett",  position: "Team lead", busyness: "partial", birthday: "02.06.1989", sex: "male"   },
		{ id: 4, name: "Cal",    position: "Designer",  busyness: "partial", birthday: "13.04.1996", sex: "female" },
		{ id: 5, name: "Cody",   position: "HR",        busyness: "full",    birthday: "14.07.1992", sex: "female" },
		{ id: 6, name: "Donny",  position: "Analyst",   busyness: "full",    birthday: "28.04.2000", sex: "male"   },
		{ id: 7, name: "Edward", position: "Logist",    busyness: "partial", birthday: "30.11.2001", sex: "female" },
		{ id: 8, name: "Elton",  position: "support",   busyness: "full",    birthday: "19.02.1995", sex: "male"   },
	]
	var index = id > users.length ? undefined : id;
	return users[index] || users[Math.round(random.float((0), (users.length-1)))];
}