export interface DictionaryError {
  title: string;
  message: string;
  resolution: string;
}

export function isDictionaryError(obj: any): obj is DictionaryError {
  return obj && typeof obj === 'object'
    && 'title' in obj
    && 'message' in obj
    && 'resolution' in obj;
}
