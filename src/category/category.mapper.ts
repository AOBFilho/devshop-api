import { Category } from './category.entity'
import { CategoryInput } from './dto/category.input'

export class CategoryMapper {
  public static toEntity(input: CategoryInput): Category {
    const entity = new Category()
    entity.name = input.name
    entity.slug = input.slug
    return entity
  }
}
