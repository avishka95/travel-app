import { getPlaceInfo } from "../db/places";

export async function getLocationCoordinates(
  address: string
): Promise<{ latitude: number; longitude: number }> {
  // This function would typically use a geocoding service to convert an address to coordinates
  // For now, we return dummy coordinates
  const { latitude, longitude } = await getPlaceInfo(address);

  return Promise.resolve({ latitude, longitude });
}
