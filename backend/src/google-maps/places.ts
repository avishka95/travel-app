import { GOOGLE_PLACES_API_KEY } from "../config";
import { GoogleMapsPlace, GoogleMapsPlaceResponse } from "./types";

// Imports the Places library
const { PlacesClient } = require("@googlemaps/places").v1;

// Instantiates a client
const placesClient = new PlacesClient({
  apiKey: GOOGLE_PLACES_API_KEY,
});
// Included type filter
const includedTypes = ["train_station"];
const callOptions = {
  otherArgs: {
    headers: {
      "X-Goog-FieldMask": "places.id,places.name,places.displayName,places.location,places.googleMapsUri,places.formattedAddress,places.postalAddress.regionCode",
    },
  },
};

export async function callSearchNearby(latitude: number, longitude: number): Promise<GoogleMapsPlace[]> {
  // Construct request
  const request = {
    locationRestriction: {
      circle: {
        center: {
          // COLOMBO
          latitude: 6.9218369,
          longitude: 79.8150058,
        },
        radius: 50000.0,
      },
    },
    includedTypes: includedTypes,
  };

  // Run request
  const response:GoogleMapsPlaceResponse = await placesClient.searchNearby(request, callOptions);
  console.log("Places response:", response[0]);
  return response[0]?.places || [];
}
