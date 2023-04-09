import { stackMiddleware } from "./middlewares/stackMiddlewares";
import { middleware1 } from "./middlewares/middleware1";

const middlewares = [middleware1];
export default stackMiddleware(middlewares);
