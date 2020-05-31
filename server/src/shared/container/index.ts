import { container } from 'tsyringe';

import '@modules/users/providers';

import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';
import IUsersRepository from '@modules/users/repositories/IUsersRepository';

import GatewaysRepository from '@modules/gateways/infra/typeorm/repositories/GatewaysRepository';
import IGatewaysRepository from '@modules/gateways/repositories/IGatewaysRepository';

import EndnodesRepository from '@modules/endnodes/infra/typeorm/repositories/EndnodesRepository';
import IEndnodesRepository from '@modules/endnodes/repositories/IEndnodesRepository';

container.registerSingleton<IGatewaysRepository>(
  'GatewaysRepository',
  GatewaysRepository,
);

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);

container.registerSingleton<IEndnodesRepository>(
  'EndnodesRepository',
  EndnodesRepository,
);
