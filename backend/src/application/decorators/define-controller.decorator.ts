import { ApiTags } from '@nestjs/swagger';
import { ZodValidationPipe } from 'nestjs-zod';
import { applyDecorators, Controller, UsePipes } from '@nestjs/common';

/**
 * @param {string} [path] - receive a path to define controller (optional).
 * @example
 * .@DefineRoute('Route')
 * class AnyRoute {
 *    ...
 * }
 */
export const DefineController = (path?: string) => {
  return applyDecorators(
    ApiTags(path.toLowerCase() || ''),
    Controller(path.toLowerCase() || ''),
    UsePipes(ZodValidationPipe),
  );
};
