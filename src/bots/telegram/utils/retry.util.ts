export async function retry<T>(
  fn: () => Promise<T>,
  options?: {
    retries?: number;
    delayMs?: number;
    factor?: number;
  }
): Promise<T> {
  const { retries = 3, delayMs = 1000, factor = 2 } = options || {};

  let attempt = 0;
  let lastError: unknown;

  while (attempt < retries) {
    try {
      return await fn();
    } catch (err) {
      lastError = err;
      attempt++;

      if (attempt >= retries) break;
      const wait = delayMs * Math.pow(factor, attempt - 1);
      await new Promise((r) => setTimeout(r, wait));
    }
  }

  throw lastError;
}
