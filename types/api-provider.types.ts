export interface IApiProvider {
  name: string;
  isHealthy(): Promise<boolean>;
}

export interface ApiProviderConfig {
  name: string;
  autoRegister?: boolean;
}

export interface RegisteredProvider {
  name: string;
  instance: IApiProvider;
  config: ApiProviderConfig;
}