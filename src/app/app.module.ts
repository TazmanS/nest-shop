import { Module } from '@nestjs/common';
import { UsersModule } from '../users/users.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthModule } from '../auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: async (configService: ConfigService) => {
        return {
          uri: configService.get<string>('MONGODB_URL')
        }
      },
      inject: [ConfigService],
    }),
    ConfigModule.forRoot({
      isGlobal: true
    }),
    UsersModule,
    AuthModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
