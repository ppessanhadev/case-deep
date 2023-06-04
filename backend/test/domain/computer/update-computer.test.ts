import { Test } from '@nestjs/testing';
import { NotFoundException } from '@nestjs/common';
import { computersStub } from '@test/stubs/computers.stub';
import { ComputerRepository } from '@infra/repositories/computer.repository';
import { UpdateComputerUseCase } from '@domain/computer/update-computer.usecase';
import { mockUpdateComputerModule } from '@test/domain/computer/computer-test-setup';

describe('UpdateComputerUseCase', () => {
  let updateComputerUseCase: UpdateComputerUseCase;
  let computerRepository: ComputerRepository;
  const [{ id, ...computerStub }] = computersStub;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: mockUpdateComputerModule,
    }).compile();

    updateComputerUseCase = moduleRef.get(UpdateComputerUseCase);
    computerRepository = moduleRef.get(ComputerRepository);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(updateComputerUseCase).toBeDefined();
    expect(computerRepository).toBeDefined();
  });

  describe('update()', () => {
    it('should throw an error if computer doesnt exists', async () => {
      const response = () => updateComputerUseCase.update(id, computerStub);

      expect(response).rejects.toThrow(NotFoundException);
      expect(response).rejects.toThrowError('Computer does not exists.');
    });

    it('should delete computer successfully', async () => {
      jest.spyOn(updateComputerUseCase, 'update');
      await updateComputerUseCase.update('any-id', computerStub);

      expect(updateComputerUseCase.update).toHaveBeenCalledTimes(1);
      expect(updateComputerUseCase.update).toHaveBeenCalledWith('any-id', computerStub);
    });
  });
});
