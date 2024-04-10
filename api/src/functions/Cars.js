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


app.http('AddCar', {
    route: 'cars',
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


app.http('DeleteCar', {
    route: 'cars/:id',
    methods: ['DELETE'],
    authLevel: 'anonymous',
    handler: async (request, context) => {

        const id = request.query.get('id'); 
        
        for(const [index,car] of cars.entries()){
            if (index + 1 == id){
                delete cars[0][id];
            }
        }

        return { body: `Car with ID =${id} has been deleted` };

    }
});

