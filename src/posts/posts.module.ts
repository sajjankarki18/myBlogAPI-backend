import { forwardRef, Module } from '@nestjs/common';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from './entities/post.entity';
import { PostRepository } from './repositories/repository.entity';
import { Comment } from 'src/comments/entities/comment.entity';
import { CommentsModule } from '../comments/comments.module';
import { Category } from 'src/categories/entities/category.entity';
import { CategoriesModule } from 'src/categories/categories.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Post, Comment, Category]),
    forwardRef(() => CommentsModule),
    forwardRef(() => CategoriesModule),
  ],
  controllers: [PostsController],
  providers: [PostsService, PostRepository],
  exports: [PostRepository],
})
export class PostsModule {}
