import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { NewsModule } from './news/news.module';
import { EventsModule } from './events/events.module';

@Module({
  imports: [ProductsModule, NewsModule, EventsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
