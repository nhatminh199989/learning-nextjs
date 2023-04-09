export const middleware1 = (next) => {
    return (request, _next) => {
        console.log("middleware 1");
        //   console.log("Log some data here", request.nextUrl.pathname);
        return next(request, _next);
    };
};