import I18n from 'react-native-i18n';
import en from './Localization/en';
import ja from './Localization/ja';
import zhHans from './Localization/zh-Hans';
import zhHant from './Localization/zh-Hant';

I18n.fallbacks = true;

I18n.translations = {
  en,
  ja,
  zhHans,
  zhHant,
}

export default I18n;
