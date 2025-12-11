import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Pool } from 'pg';

@Injectable()
export class DatabaseService implements OnModuleInit, OnModuleDestroy {
  private pool: Pool;

  constructor(private configService: ConfigService) {}

  async onModuleInit() {
    await this.connect();
  }

  async onModuleDestroy() {
    await this.disconnect();
  }

  private async connect() {
    try {
      // PostgreSQL connection configuration
      this.pool = new Pool({
        host: this.configService.get<string>('POSTGRES_HOST') || 'localhost',
        port: this.configService.get<number>('POSTGRES_PORT') || 5432,
        user: this.configService.get<string>('POSTGRES_USER') || 'postgres',
        password: this.configService.get<string>('POSTGRES_PASSWORD'),
        database: this.configService.get<string>('POSTGRES_DATABASE') || 'TestStandDB',
        max: 10,
        idleTimeoutMillis: 30000,
        connectionTimeoutMillis: 30000,
      });

      // Test connection
      const client = await this.pool.connect();
      console.log('✅ Connected to PostgreSQL');
      client.release();
    } catch (error) {
      console.error('❌ PostgreSQL connection error:', error);
      throw error;
    }
  }

  private async disconnect() {
    if (this.pool) {
      await this.pool.end();
      console.log('🔌 Disconnected from PostgreSQL');
    }
  }

  getPool(): Pool {
    if (!this.pool) {
      throw new Error('Database connection not initialized');
    }
    return this.pool;
  }
}
