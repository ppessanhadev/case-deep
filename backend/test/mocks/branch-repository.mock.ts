export const branchRepositoryMock = {
  findOne: jest.fn().mockImplementation((value: any) => {
    if (value.where.name.equals === 'error') return 'exists';
  }),
  create: jest.fn().mockImplementation((value: any) => ({ id: 'mocked-uuid', ...value })),
  delete: jest.fn(),
  update: jest.fn(),
  list: jest.fn(),
};
