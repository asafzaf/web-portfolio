import "reflect-metadata";
import { IApiProvider, ApiProviderConfig } from "types/api-provider.types";
import { ProviderRegistry } from "../providers/registry";

const API_PROVIDER_METADATA = Symbol("api-provider");

export function ApiProvider(config: ApiProviderConfig) {
  return function <T extends new (...args: any[]) => IApiProvider>(
    constructor: T
  ) {
    Reflect.defineMetadata(API_PROVIDER_METADATA, config, constructor);

    if (config.autoRegister !== false) {
      const registry = ProviderRegistry.getInstance();
      registry.registerProvider(config.name, constructor, config);
    }

    return constructor;
  };
}
export function getProviderMetadata(
  constructor: any
): ApiProviderConfig | undefined {
  return Reflect.getMetadata(API_PROVIDER_METADATA, constructor);
}
