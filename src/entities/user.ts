import { Location, Mappable } from "../types/types";


export default class User implements Mappable {
	constructor(
		public readonly name: string,
		public readonly location: Location,
	) { }

	toHtml(): string {
		return `
			<div>
				<h2>User: ${this.name}</h2>
			</div>
		`;
	}
}