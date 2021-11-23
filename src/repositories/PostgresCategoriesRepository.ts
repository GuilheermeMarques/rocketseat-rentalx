import { Category } from "../model/category";
import { ICategoriesRepository, iCreateCategoryDTO } from "./ICategoriesRepository";


class PostgresCategoryRepository implements ICategoriesRepository {
  findByName(name: string): Category {
    console.log(name);
    return null;
    //throw new Error("Method not implemented.");
  }
  list(): Category[] {
    return null;
    //throw new Error("Method not implemented.");
  }
  create({ name, description }: iCreateCategoryDTO): void {
    console.log(name, description);
    //throw new Error("Method not implemented.");
  }

};

export { PostgresCategoryRepository };