export interface GetPlacesDto {
    id: string;
    name: string;
    displayName: string;
    latitude: number;
    longitude: number;
    googleMapsUri: string;
    formattedAddress: string;
    regionCode: string;
}