import { Location, Mappable } from "../types/types";

export default class Company implements Mappable {
	constructor(
		public readonly name: string,
		public readonly catchPhrase: string,
		public readonly location: Location,
	) { }

	toHtml(): string {
		return `
			<div>
				<h2>Company: ${this.name}</h2>
				<h3>${this.catchPhrase}</h3>
			</div>
		`;
	}
}