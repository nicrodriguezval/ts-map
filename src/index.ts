import { faker } from "@faker-js/faker";

import User from "./entities/user";
import Company from "./entities/company";
import Map from "./map";

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

	const mapDiv = document.getElementById("map") as HTMLElement;
	const map = new Map(mapDiv);

	map.addMarker(user);
	map.addMarker(company);
}

main();