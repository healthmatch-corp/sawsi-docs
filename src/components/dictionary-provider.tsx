'use client';

import { createContext, useContext, type ReactNode } from 'react';
import type { Dictionary } from '@/dictionaries';

/**
 * Client-side bridge for the server-loaded i18n dictionary.
 *
 * `getDictionary()` is server-only, so client components can't import it
 * directly. Instead, the [lang]/layout.tsx server component awaits the
 * dictionary and passes the (JSON-serializable) value into this provider,
 * making it available to descendant client components via {@link useDictionary}.
 */
const DictionaryContext = createContext<Dictionary | null>(null);

export function DictionaryProvider({
  value,
  children,
}: {
  value: Dictionary;
  children: ReactNode;
}) {
  return (
    <DictionaryContext.Provider value={value}>
      {children}
    </DictionaryContext.Provider>
  );
}

export function useDictionary(): Dictionary | null {
  return useContext(DictionaryContext);
}
