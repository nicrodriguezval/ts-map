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

	addMarker(marker: google.maps.Marker) {
		marker.setMap(this.map);
	}
}

