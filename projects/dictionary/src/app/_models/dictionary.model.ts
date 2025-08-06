export interface DictionaryEntry {
  word: string;
  phonetic?: string;
  phonetics: {
    text: string;
    audio?: string;
  }[];
  meanings: {
    partOfSpeech: string;
    definitions: {
      definition: string;
      example?: string;
      synonyms: string[];
      antonyms: string[];
    }[];
    synonyms: string[];
    antonyms: string[];
  }[];
  sourceUrls: string[];
}
