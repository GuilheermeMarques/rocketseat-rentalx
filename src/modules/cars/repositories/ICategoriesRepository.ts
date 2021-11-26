import { Category } from "../model/Category";

//Conceito DTO => Data transfer object - Criar um objeto responsável por fazer a trasfêrencia de dados de uma classe e outra
interface iCreateCategoryDTO {
  name: string;
  description: string;
}


interface ICategoriesRepository {
  findByName(name: string) : Category;
  list(): Category[];
  create({ name, description }: iCreateCategoryDTO): void;
}

export { ICategoriesRepository, iCreateCategoryDTO };