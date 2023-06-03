import { Test } from '@nestjs/testing';
import { NotFoundException } from '@nestjs/common';
import { branchesStub } from '@test/stubs/branches.stub';
import { BranchRepository } from '@infra/repositories/branch.repository';
import { UpdateBranchUseCase } from '@domain/branch/update-branch.usecase';
import { mockUpdateBranchModule } from '@test/domain/branch/branch-test-setup';

describe('UpdateBranchUseCase', () => {
  let updateBranchUseCase: UpdateBranchUseCase;
  let branchRepository: BranchRepository;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [{ id, ...branchStub }] = branchesStub;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: mockUpdateBranchModule,
    }).compile();

    updateBranchUseCase = moduleRef.get(UpdateBranchUseCase);
    branchRepository = moduleRef.get(BranchRepository);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(updateBranchUseCase).toBeDefined();
    expect(branchRepository).toBeDefined();
  });

  describe('update()', () => {
    it('should throw an error if branch not exists', async () => {
      const response = () => updateBranchUseCase.update('non-exist', branchStub);

      expect(response).rejects.toThrow(NotFoundException);
      expect(response).rejects.toThrowError('Branch not found.');
    });

    it('should update successfully', async () => {
      jest.spyOn(updateBranchUseCase, 'update');
      await updateBranchUseCase.update('any-id', branchStub);

      expect(updateBranchUseCase.update).toHaveBeenCalledTimes(1);
      expect(updateBranchUseCase.update).toHaveBeenCalledWith('any-id', branchStub);
    });
  });
});
