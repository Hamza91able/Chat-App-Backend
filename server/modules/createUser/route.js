import Router from 'express';
import * as CreateNewUserController from './controller';

const routes = new Router();

routes.post('/createUser', CreateNewUserController.createNewUser);

export default routes;