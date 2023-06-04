import { Test } from '@nestjs/testing';
import { NotFoundException } from '@nestjs/common';
import { ComputerRepository } from '@infra/repositories/computer.repository';
import { DeleteComputerUseCase } from '@domain/computer/delete-computer.usecase';
import { mockDeleteComputerModule } from '@test/domain/computer/computer-test-setup';

describe('DeleteComputerUseCase', () => {
  let deleteComputerUseCase: DeleteComputerUseCase;
  let computerRepository: ComputerRepository;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: mockDeleteComputerModule,
    }).compile();

    deleteComputerUseCase = moduleRef.get(DeleteComputerUseCase);
    computerRepository = moduleRef.get(ComputerRepository);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(deleteComputerUseCase).toBeDefined();
    expect(computerRepository).toBeDefined();
  });

  describe('delete()', () => {
    it('should throw an error if computer doesnt exists', async () => {
      const response = () => deleteComputerUseCase.delete('nonexist-id');

      expect(response).rejects.toThrow(NotFoundException);
      expect(response).rejects.toThrowError('Computer does not exists.');
    });

    it('should delete computer successfully', async () => {
      jest.spyOn(deleteComputerUseCase, 'delete');
      await deleteComputerUseCase.delete('any-id');

      expect(deleteComputerUseCase.delete).toHaveBeenCalledTimes(1);
      expect(deleteComputerUseCase.delete).toHaveBeenCalledWith('any-id');
    });
  });
});
