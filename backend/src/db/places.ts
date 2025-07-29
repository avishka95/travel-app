import { GetPlacesDto } from "../dtos/GetPlaces.dto";
import { connectToMongoDb } from "./mongo_db_client";

export async function getPlaceInfo(name: string) {
    const db = await connectToMongoDb();
    
    try {
        const collection = db.collection('location_geocode');
        const location = await collection.findOne<GetPlacesDto>({ name });

        if (!location) {
            throw new Error(`Location with name ${name} not found`);
        }

        return location;
    } catch (error) {
        console.error("Error fetching location info:", error);
        throw error;
    }
}
