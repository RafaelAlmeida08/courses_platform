import { server } from './config/server';

import { routes } from './routes';

server.use('/', routes)

server.listen(3000, () => console.log('Server is running on port 3000'));