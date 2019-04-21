import Router from 'express';
import * as ChatController from './controller';

const routes = new Router();

routes.post('./chats', ChatController.createChat);

export default routes;