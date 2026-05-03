export const supportedLocales = ['en-IN', 'hi-IN', 'ta-IN'] as const;
export type Locale = (typeof supportedLocales)[number];
