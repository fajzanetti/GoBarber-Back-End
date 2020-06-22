import { Router } from 'express';

const routes = Router();
export default routes;

routes.post('/users', (request, response) => {
  const { name, email } = request.body;

  const user = {
    name,
    email,
  };
  return response.json(user);
});
