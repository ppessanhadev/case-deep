import { Test } from '@nestjs/testing';
import { computersStub } from '@test/stubs/computers.stub';
import { ComputerRepository } from '@infra/repositories/computer.repository';
import { ListComputersUseCase } from '@domain/computer/list-computers.usecase';
import { mockListComputersModule } from '@test/domain/computer/computer-test-setup';

describe('ListComputersUseCase', () => {
  let listComputersUseCase: ListComputersUseCase;
  let computerRepository: ComputerRepository;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: mockListComputersModule,
    }).compile();

    listComputersUseCase = moduleRef.get(ListComputersUseCase);
    computerRepository = moduleRef.get(ComputerRepository);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(listComputersUseCase).toBeDefined();
    expect(computerRepository).toBeDefined();
  });

  describe('list()', () => {
    it('should list branches successfully', async () => {
      jest.spyOn(listComputersUseCase, 'list');
      const response = await listComputersUseCase.list();

      expect(listComputersUseCase.list).toHaveBeenCalledTimes(1);
      expect(response).toStrictEqual(computersStub);
    });
  });
});
