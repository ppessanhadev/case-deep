import { Test } from '@nestjs/testing';
import { NotFoundException } from '@nestjs/common';
import { computersStub } from '@test/stubs/computers.stub';
import { ComputerRepository } from '@infra/repositories/computer.repository';
import { CreateComputerUseCase } from '@domain/computer/create-computer.usecase';
import { mockCreateComputerModule } from '@test/domain/computer/computer-test-setup';

describe('CreateComputerUseCase', () => {
  let createComputerUseCase: CreateComputerUseCase;
  let computerRepository: ComputerRepository;
  const [computerStub] = computersStub;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: mockCreateComputerModule,
    }).compile();

    createComputerUseCase = moduleRef.get(CreateComputerUseCase);
    computerRepository = moduleRef.get(ComputerRepository);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(createComputerUseCase).toBeDefined();
    expect(computerRepository).toBeDefined();
  });

  describe('delete()', () => {
    it('should throw an error if branch id does not exists', async () => {
      const response = () => createComputerUseCase.create({ name: 'error' });

      expect(response).rejects.toThrow(NotFoundException);
      expect(response).rejects.toThrowError('Branch not found.');
    });

    it('should create a new computer successfully', async () => {
      jest.spyOn(createComputerUseCase, 'create');
      await createComputerUseCase.create({ ...computerStub, branchId: 'any-id' });

      expect(createComputerUseCase.create).toHaveBeenCalledTimes(1);
      expect(createComputerUseCase.create).toHaveBeenCalledWith({ ...computerStub, branchId: 'any-id' });
    });
  });
});
