import { Location } from "src/types/types";

export default class Company {
	constructor(
		private readonly name: string,
		private readonly catchPhrase: string,
		private readonly location: Location,
	) { }

	toString(): string {
		return `Company: ${this.name} - ${this.catchPhrase} - ${this.location.lat} - ${this.location.lng}`;
	}
}