import { Test } from '@nestjs/testing';
import { ConflictException } from '@nestjs/common';
import { BranchRepository } from '@infra/repositories/branch.repository';
import { CreateBranchUseCase } from '@domain/branch/create-branch.usecase';
import { mockCreateBranchModule } from '@test/domain/branch/branch-test-setup';

describe('CreateBranchUseCase', () => {
  let createBranchUseCase: CreateBranchUseCase;
  let branchRepository: BranchRepository;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: mockCreateBranchModule,
    }).compile();

    createBranchUseCase = moduleRef.get(CreateBranchUseCase);
    branchRepository = moduleRef.get(BranchRepository);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(createBranchUseCase).toBeDefined();
    expect(branchRepository).toBeDefined();
  });

  describe('create()', () => {
    it('should throw an error if branch names already registered', async () => {
      const response = () => createBranchUseCase.create({ name: 'error' });

      expect(response).rejects.toThrow(ConflictException);
      expect(response).rejects.toThrowError('Branch already exists.');
    });

    it('should create successfully', async () => {
      jest.spyOn(createBranchUseCase, 'create');
      await createBranchUseCase.create({ name: 'anything' });

      expect(createBranchUseCase.create).toHaveBeenCalledTimes(1);
      expect(createBranchUseCase.create).toHaveBeenCalledWith({ name: 'anything' });
    });
  });
});
