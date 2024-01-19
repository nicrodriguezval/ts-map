import { Location } from "../types/types";

export default class Company {
	constructor(
		public readonly name: string,
		public readonly catchPhrase: string,
		public readonly location: Location,
	) { }

	toString(): string {
		return `Company: ${this.name} - ${this.catchPhrase} - ${this.location.lat} - ${this.location.lng}`;
	}
}