export type GoogleMapsPlace = {
    id: string;
    name: string;
    displayName: {
        text: string;
        languageCode: string;
    };
    location: {
        latitude: number;
        longitude: number;
    },
    googleMapsUri: string;
    formattedAddress: string;
    postalAddress: {
        regionCode: string;
    };
};

export type GoogleMapsPlaceResponse = {
    places: GoogleMapsPlace[];
}[];
