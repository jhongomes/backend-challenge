import express from 'express';
import path from 'path'
import { Router } from 'express'


const routes = Router();



routes.get('/', (request, response ) => 
response.json({ message: 'BACKEND 🚀🚀'  }));




export default routes;
