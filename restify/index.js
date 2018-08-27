var restify = require('restify');

var server = restify.createServer();

server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());


const corsMiddleware = require('restify-cors-middleware')

const cors = corsMiddleware({
    preflightMaxAge: 5, //Optional
    origins: ['http://localhost:3000'],
})

server.pre(cors.preflight)
server.use(cors.actual)

server.post('/login', auth);
server.get('/cards', cards);

server.listen(8080, function () {
    console.log('%s listening at %s', server.name, server.url);
});

function auth(req, res, next) {
    if (!req.body.user || !req.body.pass) {
        res.send(401, createError("Credentials failed."));
    } else {
        res.send(200, createSuccess({ token: "17G1fBZmKZ1r2xav7cWfH8rDHV6SSsJwhE=" }));
    }
    next();
}

function cards(req, res, next) {
    if (!req.headers.token || req.headers.token !== "17G1fBZmKZ1r2xav7cWfH8rDHV6SSsJwhE=") {
        res.send(401, createError("Invalid token, please sign-in"));
    } else {
        res.send(200, createSuccess([{ id: 1, number: 4485525577112065, cvv: 132 }, { id: 2, number: 4870849386108384, cvv: 710 }]));
    }
    next();
}

function createSuccess(payload) {
    return {
        payload
    }
}

function createError(error) {
    return {
        error: true,
        payload: error
    }
}

