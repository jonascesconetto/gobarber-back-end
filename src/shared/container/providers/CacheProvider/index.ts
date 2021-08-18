import { container } from 'tsyringe';
import ICacheProvider from './models/ICacheProvider';
import RegisCacheProvider from './implementations/RegisCacheProvider';

const provider = {
    redis: RegisCacheProvider,
};

container.registerSingleton<ICacheProvider>('CacheProvider', provider.redis);
