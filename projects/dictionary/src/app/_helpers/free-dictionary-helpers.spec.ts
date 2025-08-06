import { FreeDictionaryHelpers } from './free-dictionary-helpers';
import { DictionaryEntry } from '../_models/dictionary.model';


describe('FreeDictionaryHelpers', () => {
  function createMockDictionaryEntry(overrides: Partial<DictionaryEntry> = {}): DictionaryEntry {
    return {
      word: 'test',
      phonetic: '/test/',
      phonetics: [
        {
          text: '/test2/',
          audio: 'https://api.dictionaryapi.dev/media/pronunciations/en/test-uk.mp3'
        }
      ],
      meanings: [
        {
          partOfSpeech: 'noun',
          definitions: [
            {
              definition: '(body building) testosterone',
              synonyms: [],
              antonyms: []
            }
          ],
          synonyms: [],
          antonyms: []
        }
      ],
      sourceUrls: ['https://en.wiktionary.org/wiki/test'],
      ...overrides
    };
  }

  describe('getPhoneticText', () => {
    it('should return main phonetic text when available', () => {
      const mockEntry = createMockDictionaryEntry();

      const result = FreeDictionaryHelpers.getPhoneticText(mockEntry);

      expect(result).toEqual('/test/');
    });

    it('should return first phonetic with text when main phonetic is undefined', () => {
      const mockEntry = createMockDictionaryEntry({
        phonetic: undefined
      });

      const result = FreeDictionaryHelpers.getPhoneticText(mockEntry);

      expect(result)
        .withContext(`${ result } should be equal to /test2/`)
        .toEqual('/test2/');
    });

    it('should return second phonetic with text when first has both text and audio', () => {
      const mockEntry = createMockDictionaryEntry({
        phonetic: undefined,
        phonetics: [
          { text: '', audio: '' },
          { text: '', audio: 't2' },
          { text: 't2', audio: '' },
          { text: 't1', audio: 't1' }
        ]
      });

      const result = FreeDictionaryHelpers.getPhoneticText(mockEntry);

      expect(result)
        .withContext(`${ result } should be equal to t1`)
        .toEqual('t1');
    });

    it('should return empty string when no phonetics have text', () => {
      const mockEntry = createMockDictionaryEntry({
        phonetic: undefined,
        phonetics: [
          { text: '', audio: '' },
          { text: '', audio: 'audio1' }
        ]
      });

      const result = FreeDictionaryHelpers.getPhoneticText(mockEntry);

      expect(result)
        .withContext(`${ result } should be equal to empty string`)
        .toEqual('');
    });

    it('should return empty string when phonetics array is empty', () => {
      const mockEntry = createMockDictionaryEntry({
        phonetic: undefined,
        phonetics: []
      });

      const result = FreeDictionaryHelpers.getPhoneticText(mockEntry);

      expect(result).toEqual('');
    });

  });

  describe('getPhoneticAudio', () => {
    it('should return first phonetic with audio', () => {
      const mockEntry = createMockDictionaryEntry();

      const result = FreeDictionaryHelpers.getPhoneticAudio(mockEntry);

      expect(result).toEqual('https://api.dictionaryapi.dev/media/pronunciations/en/test-uk.mp3');
    });

    it('should return first phonetic with audio when phonetic is undefined', () => {
      const mockEntry = createMockDictionaryEntry({
        phonetic: undefined
      });

      const result = FreeDictionaryHelpers.getPhoneticAudio(mockEntry);

      expect(result).toEqual('https://api.dictionaryapi.dev/media/pronunciations/en/test-uk.mp3');
    });

    it('should return the phonetic with audio when it has both text and audio', () => {
      const mockEntry = createMockDictionaryEntry({
        phonetic: undefined,
        phonetics: [
          { text: '', audio: '' },
          { text: '', audio: 't2' },
          { text: 't2', audio: '' },
          { text: 't1', audio: 't1' }
        ]
      });

      const result = FreeDictionaryHelpers.getPhoneticAudio(mockEntry);

      expect(result).toEqual('t1');
    });

    it('should return empty string when no phonetics have audio', () => {
      const mockEntry = createMockDictionaryEntry({
        phonetic: undefined,
        phonetics: [
          { text: '', audio: '' },
          { text: 't1', audio: '' }
        ]
      });

      const result = FreeDictionaryHelpers.getPhoneticAudio(mockEntry);

      expect(result).toEqual('');
    });

    it('should return empty string when phonetics array is empty', () => {
      const mockEntry = createMockDictionaryEntry({
        phonetic: undefined,
        phonetics: []
      });

      const result = FreeDictionaryHelpers.getPhoneticAudio(mockEntry);

      expect(result).toEqual('');
    });

  });

  describe('both getPhoneticText and getPhoneticAudio', () => {

    let mockEntry: DictionaryEntry;

    beforeEach(() => {
      mockEntry = createMockDictionaryEntry({
        phonetic: undefined,
        phonetics: [
          { text: '', audio: '' },
          { text: 'textOnly', audio: '' },
          { text: '', audio: 'audioOnly' },
          { text: 'both', audio: 'both' }
        ]
      });
    });

    it('should handle phonetic priority correctly - main phonetic takes precedence and still get an audio', () => {
      mockEntry.phonetic = 'test';

      const text = FreeDictionaryHelpers.getPhoneticText(mockEntry);
      const audio = FreeDictionaryHelpers.getPhoneticAudio(mockEntry);

      expect(text).toEqual('test');
      expect(audio).toBeDefined();
    });

    it('should get the entry when it contains both text and audio', () => {
      const text = FreeDictionaryHelpers.getPhoneticText(mockEntry);
      const audio = FreeDictionaryHelpers.getPhoneticAudio(mockEntry);

      expect(text).toEqual('both');
      expect(audio).toEqual('both');
    });

    it('should get the entry when it contains only text or audio', () => {
      mockEntry.phonetics = [
        { text: '', audio: '' },
        { text: 'textOnly', audio: '' },
        { text: '', audio: 'audioOnly' }
      ];

      const text = FreeDictionaryHelpers.getPhoneticText(mockEntry);
      const audio = FreeDictionaryHelpers.getPhoneticAudio(mockEntry);

      expect(text).toEqual('textOnly');
      expect(audio).toEqual('audioOnly');
    });
  });

  describe('hasPhoneticAudio', () => {

    let mockEntry: DictionaryEntry;

    beforeEach(() => {
      mockEntry = createMockDictionaryEntry();
    });

    it('should return true when phonetic has audio', () => {
      let res = FreeDictionaryHelpers.hasPhoneticAudio(mockEntry);

      expect(res).toBeTrue();
    });

    it('should return false when phonetic has no audio', () => {
      mockEntry.phonetics = [{ text: 'test', audio: '' }];

      let res = FreeDictionaryHelpers.hasPhoneticAudio(mockEntry);

      expect(res).toBeFalse();
    });

    it('should return false when phonetic has no audio - 2', () => {
      mockEntry.phonetics = [];

      let res = FreeDictionaryHelpers.hasPhoneticAudio(mockEntry);

      expect(res).toBeFalse();
    });

    it('should return false when audio is undefined', () => {
      mockEntry.phonetics = [{ text: 'test', audio: undefined }];

      let res = FreeDictionaryHelpers.hasPhoneticAudio(mockEntry);

      expect(res).toBeFalse();
    });

    it('should return false when audio is undefined', () => {
      mockEntry.phonetics = [{ text: 'test', audio: undefined }];

      let res = FreeDictionaryHelpers.hasPhoneticAudio(mockEntry);

      expect(res).toBeFalse();
    });
  });
});
