import { IApiProvider, RegisteredProvider } from 'types/api-provider.types';

export class ProviderRegistry {
  private static instance: ProviderRegistry;
  private providers = new Map<string, RegisteredProvider>();

  static getInstance(): ProviderRegistry {
    if (!ProviderRegistry.instance) {
      ProviderRegistry.instance = new ProviderRegistry();
      ProviderRegistry.instance.autoRegisterProviders();
    }
    return ProviderRegistry.instance;
  }

  private autoRegisterProviders(): void {
    // This will be called automatically when getInstance is first called
    // The providers will register themselves via the decorator when their modules are imported
    console.log('🚀 Provider registry initialized');
  }

  registerProvider(name: string, ProviderClass: any, config: any): void {
    try {
      const instance = new ProviderClass();

      this.providers.set(name, {
        name,
        instance,
        config
      });

      console.log(`✅ Provider '${name}' registered successfully`);
    } catch (error) {
      console.error(`❌ Failed to register provider '${name}':`, error);
      throw error;
    }
  }

  getProvider<T extends IApiProvider>(name: string): T {
    const provider = this.providers.get(name);
    if (!provider) {
      throw new Error(`Provider '${name}' not found. Available providers: ${Array.from(this.providers.keys()).join(', ')}`);
    }
    return provider.instance as T;
  }

  getAllProviders(): RegisteredProvider[] {
    return Array.from(this.providers.values());
  }

  async healthCheck(): Promise<Record<string, boolean>> {
    const results: Record<string, boolean> = {};
    
    for (const [name, { instance }] of this.providers) {
      try {
        results[name] = await instance.isHealthy();
      } catch (error) {
        console.error(`Health check failed for provider '${name}':`, error);
        results[name] = false;
      }
    }
    
    return results;
  }
}

