import DB from '../Database/Configurations/connection'

beforeEach(() => DB.build());
afterAll(() => DB.connection.end());