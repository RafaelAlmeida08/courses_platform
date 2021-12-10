import { server } from './config/server';
import 'reflect-metadata';
import { routes } from './routes';
import './database';

server.use('/', routes)

server.listen(3000, () => console.log('Server is running on port 3000'));