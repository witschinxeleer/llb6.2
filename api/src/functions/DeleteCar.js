const { app } = require('@azure/functions');

const cars = require('./cars.json');
app.http('DeleteCar', {
    route: '/cars/:id',
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
