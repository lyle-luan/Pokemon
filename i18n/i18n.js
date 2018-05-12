import I18n from 'react-native-i18n';
import en from './Localization/en';
import zh from './Localization/zh';
import ja from './Localization/ja';

I18n.fallbacks = true;
I18n.defaultLocale = 'zh';
I18n.translations = {
  en,
  zh,
  ja,
};

export default I18n;
