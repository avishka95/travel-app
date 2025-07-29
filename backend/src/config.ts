require('dotenv').config()

export const POSTGRE_DATABASE_URL = process.env.POSTGRE_DATABASE_URL;
export const MONGO_DATABASE_URL = process.env.MONGO_DATABASE_URL;
export const MONGO_DATABASE_NAME = process.env.MONGO_DATABASE_NAME || 'travel_app';
export const GOOGLE_PLACES_API_KEY = process.env.GOOGLE_MAPS_API_KEY;
