import { branchesStub } from '@test/stubs/branches.stub';

export const branchRepositoryMock = {
  findOne: jest.fn().mockImplementation((value: any) => {
    if (value.where.name?.equals === 'error' || value.where.id === 'any-id') return 'exists';
  }),
  create: jest.fn().mockImplementation((value: any) => ({ id: 'mocked-uuid', ...value })),
  delete: jest.fn(),
  update: jest.fn().mockImplementation((id: string, obj: any) => ({ id, ...obj })),
  list: jest.fn().mockReturnValue(branchesStub),
};
