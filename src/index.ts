import { faker } from "@faker-js/faker";
import User from "./entities/user";

function main() {
	const user = new User(
		faker.person.fullName(),
		{
			lat: faker.location.latitude(),
			lng: faker.location.longitude()
		},
	);

	console.log(user.toString());
}

main();