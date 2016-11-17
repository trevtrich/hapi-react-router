import renderThroughReactRouter from './router-wrapper';

export function register(server, options, next) {
    server.route({
        method: 'GET',
        path: '/html',
        handler: (request, reply) => renderThroughReactRouter(request, reply, {
            routes: options.routes,
            respond: options.respond,
            Root: options.Root,
            store: options.store
        })
    });

    next();
}

register.attributes = {
    name: 'html-route'
};
