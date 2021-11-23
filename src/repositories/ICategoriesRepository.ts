import { Category } from "../model/category";

//Conceito DTO => Data transfer object - Criar um objeto responsável por fazer a trasfêrencia de dados de umam classe e outra
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