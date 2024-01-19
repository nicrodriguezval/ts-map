import { faker } from "@faker-js/faker";
import User from "./entities/user";
import Company from "./entities/company";


function main() {
	const user = new User(
		faker.person.fullName(),
		{
			lat: faker.location.latitude(),
			lng: faker.location.longitude(),
		},
	);
	const company = new Company(
		faker.company.name(),
		faker.company.catchPhrase(),
		{
			lat: faker.location.latitude(),
			lng: faker.location.longitude(),
		},
	);

	console.log(user.toString());
	console.log(company.toString());

	new google.maps.Map(
		document.getElementById("map") as HTMLElement,
		{
			zoom: 1,
			center: {
				lat: 0,
				lng: 0,
			}
		},
	);
}

main();