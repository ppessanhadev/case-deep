import { Test } from '@nestjs/testing';
import { NotFoundException } from '@nestjs/common';
import { BranchRepository } from '@infra/repositories/branch.repository';
import { mockDeleteBranchModule } from '@test/domain/branch/branch-test-setup';
import { DeleteBranchUseCase } from '@domain/branch/delete-branch.usecase';

describe('DeleteBranchUseCase', () => {
  let deleteBranchUseCase: DeleteBranchUseCase;
  let branchRepository: BranchRepository;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: mockDeleteBranchModule,
    }).compile();

    deleteBranchUseCase = moduleRef.get(DeleteBranchUseCase);
    branchRepository = moduleRef.get(BranchRepository);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(deleteBranchUseCase).toBeDefined();
    expect(branchRepository).toBeDefined();
  });

  describe('delete()', () => {
    it('should throw an error if branch doesnt exists', async () => {
      const response = () => deleteBranchUseCase.delete('nonexist-id');

      expect(response).rejects.toThrow(NotFoundException);
      expect(response).rejects.toThrowError('User does not exists.');
    });

    it('should delete successfully', async () => {
      jest.spyOn(deleteBranchUseCase, 'delete');
      await deleteBranchUseCase.delete('any-id');

      expect(deleteBranchUseCase.delete).toHaveBeenCalledTimes(1);
      expect(deleteBranchUseCase.delete).toHaveBeenCalledWith('any-id');
    });
  });
});
