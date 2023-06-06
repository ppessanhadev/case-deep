import { ApiParamOptions, ApiQueryOptions, ApiResponseMetadata } from '@nestjs/swagger';

export interface DefineRouteOptions {
  summary?: string;
  method?: 'GET' | 'POST' | 'UPDATE' | 'DELETE';
  route?: string | '';
  code?: number | 200;
  response?: Pick<ApiResponseMetadata, 'type' | 'description'>;
  queries?: ApiQueryOptions[];
  params?: ApiParamOptions[];
}
