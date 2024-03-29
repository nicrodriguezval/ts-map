export type Location = {
	lat: number;
	lng: number;
}

export interface Mappable {
	location: Location;
	toHtml(): string;
}