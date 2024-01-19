import { Mappable } from "./types/types";

export default class Map {
	private readonly map: google.maps.Map;

	constructor(mapDiv: HTMLElement) {
		this.map = new google.maps.Map(
			mapDiv,
			{
				zoom: 1,
				center: {
					lat: 0,
					lng: 0,
				},
			},
		);
	}

	addMarker(mappable: Mappable) {
		const marker = new google.maps.Marker({
			position: {
				lat: mappable.location.lat,
				lng: mappable.location.lng,
			},
		});

		const infoWindow = new google.maps.InfoWindow({
			content: mappable.toHtml(),
		});

		marker.addListener('click', () => {
			infoWindow.open(this.map, marker);
		});

		marker.setMap(this.map);
	}
}

