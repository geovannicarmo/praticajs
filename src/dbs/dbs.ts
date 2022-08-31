
import pg from 'pg';

const { Pool } = pg;

const connection = new Pool({
  user: 'postgres',
  host: 'localhost',
  port: 5432,
  database: 'starfighters',
  password: '735644'
});

export default connection