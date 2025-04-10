/**
 * Vytvoří verzi zadané funkce s debounce, která zpozdí její provedení,
 * dokud neuplyne specifikované zpoždění od posledního volání.
 *
 * @param func - Funkce, kterou chcete debounce.
 * @param delay - Počet milisekund pro zpoždění provedení. Výchozí hodnota je 400ms.
 * @returns Verze zadané funkce s debounce.
 *
 * @example
 * ```typescript
 * const logMessage = (message: string) => console.log(message);
 * const debouncedLog = DEBOUNCE(logMessage, 500);
 *
 * debouncedLog("Ahoj");
 * debouncedLog("Svět");
 * // Pouze "Svět" bude zalogováno po 500ms, protože druhé volání resetuje časovač.
 * ```
 */
export const DEBOUNCE = (func: Function, delay = 400) => {
  let timeoutId: NodeJS.Timeout;

  return (...args: any) => {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
};
