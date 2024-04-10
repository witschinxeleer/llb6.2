const { app } = require('@azure/functions');
// const cars = require('./cars.json');
cars =[
    {
        "make": "Toyota",
        "model": "Camry",
        "year": 2022,
        "price": 250000
    },
    {
        "make": "Honda",
        "model": "Accord",
        "year": 2021,
        "price": 200000
    },
    {
        "make": "Ford",
        "model": "Mustang",
        "year": 2020,
        "price": 300000
    }
]

app.http('Cars', {
    route:"cars",
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        context.log(`Http function processed request for url "${request.url}"`);

        // const name = request.query.get('name') || await request.text() || 'world';
        // request.json(cars)

        // return { body: `Hello, ${name}!` };
        return {body:JSON.stringify()};

    }
});
