import express from 'express'

const app = express();

app.use('/teste', (request, response) => {
    return response.send({status: 'Ok'})
});

app.listen(3000, () => console.log('Server is running on port 3000'));