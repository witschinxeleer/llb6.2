const { app } = require('@azure/functions');
const cars = require('./cars.json');

app.http('Cars', {
    route:"cars",
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        context.log(`Http function processed request for url "${request.url}"`);

        // const name = request.query.get('name') || await request.text() || 'world';
        // request.json(cars)

        // return { body: `Hello, ${name}!` };
        return { jsonBody:request.json(cars)};

    }
});
