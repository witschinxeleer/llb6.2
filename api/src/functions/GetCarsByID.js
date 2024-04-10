const { app } = require('@azure/functions');
const cars = require('./cars.json');

app.http('GetCarsByID', {
    route:'cars/:id',
    methods: ['GET'],
    authLevel: 'anonymous',
    handler: async (request, context) => {

        const id = request.query.get('id');
        for(const [index,car] of cars.entries()){
            if((index+1)==id){
                return JSON.parse(cars);
            }
        }

        return { status: 405,body:'Not Found' };
    }
});
