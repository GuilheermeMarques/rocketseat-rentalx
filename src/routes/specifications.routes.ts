import { request, Router } from 'express';
import { SpecificationsRepository } from '../modules/cars/repositories/SpecificationRepository';
import { CreateSpecificationService } from '../modules/cars/services/CreateSpecificationService';

const specificationRoutes = Router();

const specificationRepository = new SpecificationsRepository();

specificationRoutes.post('/', (request, response) => {
  const { name, description } = request.body;
  const createSpeficationService = new CreateSpecificationService(specificationRepository);

  createSpeficationService.execute({ name, description })

  return response.status(201).send();

});

export { specificationRoutes };