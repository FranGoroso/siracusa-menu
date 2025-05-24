import { MenuDataRecord } from '../types';
import { spanishMenu } from './es';
import { englishMenu } from './en';
import { frenchMenu } from './fr';
import { germanMenu } from './de';
import { italianMenu } from './it';
import { russianMenu } from './ru';
import { chineseMenu } from './cn';
import { japaneseMenu } from './jp';

export const menuData: MenuDataRecord = {
  es: spanishMenu,
  en: englishMenu,
  fr: frenchMenu,
  de: germanMenu,
  it: italianMenu,
  ru: russianMenu,
  cn: chineseMenu,
  jp: japaneseMenu,
};