import { DictionaryEntry } from '../models/dictionary.model';

export class FreeDictionaryHelpers {
  // todo: implement all Helper methods
  static getPhoneticText(entry: DictionaryEntry): string {
    if (entry.phonetic) {
      return entry.phonetic;
    }
    return entry.phonetics.find(p => p.text && p.audio)?.text || entry.phonetics.find(p => p.text)?.text || '';
  }

  static getPhoneticAudio(entry: DictionaryEntry): string {
    return entry.phonetics.find(p => p.audio)?.audio || '';
  }

  static hasPhoneticAudio(entry: DictionaryEntry): boolean {
    return entry.phonetics.find(p => p.audio) !== undefined;
  }
}
