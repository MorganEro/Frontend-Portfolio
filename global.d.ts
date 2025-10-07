declare global {
  interface Grecaptcha {
    execute(siteKey: string, options: { action: string }): Promise<string>;
    ready(callback: () => void): void;
  }

  // declare the global window variable
  interface Window {
    grecaptcha: Grecaptcha;
  }

  // declare grecaptcha globally for direct use
  const grecaptcha: Grecaptcha;
}

export {};
