const { app } = require('@azure/functions');
const cars = require('./cars.json');

app.http('AddCar', {
    methods: ['POST'],
    authLevel: 'anonymous',
    handler: async (request, context) => {

        const newCar =request.body;
        
        const  newCarJson ={
        "make":newCar.make ,
        "model": newCar.model,
        "year": newCar.year,
        "price": newCar.year
    };
    cars.push(newCar);

    
        return { body: `You added a new car.` };
    }
});
