import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { CategoryMapper } from './category.mapper'
import { CategoryService } from './category.service'
import { CategoryPublic } from './dto/category'
import { CategoryInput } from './dto/category.input'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
@Resolver(of => CategoryPublic)
export class CategoryResolver {
  constructor(private readonly categoryService: CategoryService) {}

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @Query(returns => [CategoryPublic])
  async getAllCategories(): Promise<CategoryPublic[]> {
    return this.categoryService.findAll()
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @Mutation(returns => CategoryPublic, { name: 'createCategory' })
  async createCategory(
    @Args('input') input: CategoryInput
  ): Promise<CategoryPublic> {
    return this.categoryService.create(CategoryMapper.toEntity(input))
  }
}
