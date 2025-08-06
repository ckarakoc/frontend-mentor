import { DictionaryEntry } from '../_models/dictionary.model';

export class FreeDictionaryHelpers {

  private constructor() {
  }

  /**
   * It either gets the main phonetic or the first phonetic with an audio or a phonetic without an audio or silently gets no phonetic
   * @param entry
   */
  static getPhoneticText(entry: DictionaryEntry): string {
    if (entry.phonetic) {
      return entry.phonetic;
    }
    return entry.phonetics.find(p => p.text && p.audio)?.text || entry.phonetics.find(p => p.text)?.text || '';
  }

  /**
   * It either gets the first matching audio with a text or a non-matching audio or silently gets no audio
   * @param entry
   */
  static getPhoneticAudio(entry: DictionaryEntry): string {
    return entry.phonetics.find(p => p.text && p.audio)?.audio || entry.phonetics.find(p => p.audio)?.audio || '';
  }

  static hasPhoneticAudio(entry: DictionaryEntry): boolean {
    return entry.phonetics.find(p => p.audio) !== undefined;
  }
}
