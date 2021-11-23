import { Category } from '../model/category';
import { ICategoriesRepository, iCreateCategoryDTO } from './ICategoriesRepository';



class CategoriesRepository implements ICategoriesRepository {
  private categories: Category[] = [];


  //Retirando a responsabiliadde da variável, e trazendo para o constructor
  constructor() {
    this.categories = [];
  };

  create({ name, description } : iCreateCategoryDTO): void {
    const category = new Category();

    Object.assign(category, {
      name,
      description,
      created_at: new Date()
    });

    this.categories.push(category);
  };

  list(): Category[] {
    return this.categories;
  };

  findByName(name: string): Category {
    const category = this.categories.find((category) => category.name === name);
    return category;
  };
}

export { CategoriesRepository };