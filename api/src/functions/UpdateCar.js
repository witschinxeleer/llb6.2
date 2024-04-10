const { app } = require('@azure/functions');
const cars = require('./cars.json');

app.http('UpdateCar', {
    methods: ['PATCH'],
    authLevel: 'anonymous',
    handler: async (request, context) => {


        return { body: `Hello, ${name}!` };
    }
});
