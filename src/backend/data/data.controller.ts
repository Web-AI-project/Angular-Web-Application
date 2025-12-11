import { Controller, Get, HttpException, HttpStatus } from '@nestjs/common';
import { DataService } from './data.service';

@Controller('api')
export class DataController {
  constructor(private readonly dataService: DataService) {}

  @Get('data')
  async getData() {
    try {
      const data = await this.dataService.getTableData();
      return data;
    } catch (error: any) {
      throw new HttpException(
        {
          error: 'Database query failed',
          details: error.message,
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Get('health')
  getHealth() {
    return { status: 'NestJS server is running' };
  }
}
