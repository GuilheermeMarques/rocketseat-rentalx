import { ISpecificationRepository } from '../../repositories/ISpecificationRepository';

interface IRequest {
  name: string;
  description: string;
}

class CreateSpecificationUseCase {
  constructor(private specificattionsRepository: ISpecificationRepository) {}
  execute({ name, description }: IRequest):void {
    const specificationAlreadyExists = this.specificattionsRepository.findByName(name);

    if(specificationAlreadyExists) {
      throw new Error("Specification already exists");
      
    }

    this.specificattionsRepository.create({
      name,
      description
    });
  }
}

export { CreateSpecificationUseCase }