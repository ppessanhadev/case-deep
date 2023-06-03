import { Test } from '@nestjs/testing';
import { branchesStub } from '@test/stubs/branches.stub';
import { BranchRepository } from '@infra/repositories/branch.repository';
import { ListBranchesUseCase } from '@domain/branch/list-branches.usecase';
import { mockListBranchesModule } from '@test/domain/branch/branch-test-setup';

describe('ListBranchUseCase', () => {
  let listBranchesUseCase: ListBranchesUseCase;
  let branchRepository: BranchRepository;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: mockListBranchesModule,
    }).compile();

    listBranchesUseCase = moduleRef.get(ListBranchesUseCase);
    branchRepository = moduleRef.get(BranchRepository);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(listBranchesUseCase).toBeDefined();
    expect(branchRepository).toBeDefined();
  });

  describe('list()', () => {
    it('should list branches successfully', async () => {
      jest.spyOn(listBranchesUseCase, 'list');
      const response = await listBranchesUseCase.list();

      expect(listBranchesUseCase.list).toHaveBeenCalledTimes(1);
      expect(response).toStrictEqual(branchesStub);
    });
  });
});
