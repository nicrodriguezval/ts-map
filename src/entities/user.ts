import { Location } from "../types/types";


export default class User {
	constructor(
		private readonly name: string,
		private readonly location: Location,
	) { }

	toString(): string {
		return `User: ${this.name} is at ${this.location.lat}, ${this.location.lng}`;
	}
}