import { Injectable } from '@nestjs/common';
import { DatabaseService } from './database.service';

@Injectable()
export class DataService {
  constructor(private readonly databaseService: DatabaseService) {}

  async getTableData(): Promise<any[]> {
    const pool = this.databaseService.getPool();
    const result = await pool.query('SELECT * FROM public.test_station_1 LIMIT 100');
    return result.rows;
  }
}
