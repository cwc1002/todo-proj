// const korean = 'ko'
// const english = 'en'
// const japanese = 'ja'
// const chinese = 'zh'
// const spanish = 'es'

// type LanguageCode = 'ko' | 'en' | 'ja' | 'zh' | 'es'

// const code: LanguageCode = korean

enum LanguageCode {
  korean = 'ko',
  english = 'en',
  japanese = 'ja',
  chinese = 'zh',
  spanish = 'es',
}

const code: LanguageCode = LanguageCode.english;
console.log(code); // en


enum ArrowKey {
  Up = 1,
  Down,   // =2
  Left = 20,
  Right,  // =21
}

console.log(ArrowKey);
console.log(ArrowKey.Left); // 20
console.log(ArrowKey[20]);  // Left