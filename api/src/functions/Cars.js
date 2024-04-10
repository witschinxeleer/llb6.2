const { app } = require('@azure/functions');
const cars = require('./cars.json');


app.http('Cars', {
    route:"cars",
    methods: ['GET'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        return {body:JSON.stringify(cars)};
    }
});
