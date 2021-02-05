import express from 'express';
import path from 'path'
import { Router } from 'express'
import placesRouter from './places'

const routes = Router();



routes.get('/', (request, response ) => 
response.json({ message: 'BACKEND 🚀🚀'  }));


routes.use('/places', placesRouter);



export default routes;
