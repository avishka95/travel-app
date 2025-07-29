import {Pool} from 'pg';
import { MONGO_DATABASE_URL, POSTGRE_DATABASE_URL } from '../config';

const dbPool = new Pool({
    connectionString: POSTGRE_DATABASE_URL,
});

export const query = (text: string, params?: any[]) => {
    return dbPool.query(text, params);
};



