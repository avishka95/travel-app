import express, { Request, Response } from 'express';
import { createApp } from './createApp';

const PORT = process.env.PORT || 3000;
const app = createApp();

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
