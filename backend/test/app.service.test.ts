import { Test } from '@nestjs/testing';
import { AppService } from '@application/app.service';

describe('App service', () => {
  let appService: AppService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [AppService],
    }).compile();

    appService = moduleRef.get<AppService>(AppService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(appService).toBeDefined();
  });

  describe('getHello()', () => {
    it('should return "Hello World!" when is called', () => {
      const response = appService.getHello();

      expect(response).not.toEqual('HeLLO world!');
      expect(response).toEqual('Hello World!');
    });
  });
});
