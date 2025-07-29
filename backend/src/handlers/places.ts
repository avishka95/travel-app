import { Request, Response } from "express";
import { callSearchNearby } from "../google-maps/places";
import { GetPlacesDto } from "../dtos/GetPlaces.dto";
import { getErrorMessage } from "../utils";
import { GoogleMapsPlace } from "../google-maps/types";
import { getPlaceInfo } from "../db/places";

export async function getPlaces(
  request: Request<{
    name: string;
  }>,
  response: Response<GetPlacesDto[]>
) {
  const { name } = request.params;
  const { latitude, longitude } = await getPlaceInfo(name);
  const places: GoogleMapsPlace[] = await callSearchNearby(latitude, longitude);
  response.status(200).send(
    places.map((place) => ({
      id: place.id,
      name: place.name,
      displayName: place.displayName.text || "",
      latitude: place.location?.latitude || 0,
      longitude: place.location?.longitude || 0,
      googleMapsUri: place.googleMapsUri || "",
      formattedAddress: place.formattedAddress || "",
      regionCode: place.postalAddress?.regionCode || "",
    }))
  );
}
