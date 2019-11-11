import typescript from 'highlight.js/lib/languages/typescript';
import xml from 'highlight.js/lib/languages/xml';
import { HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';

export function hljsLanguages() {
  return [
    { name: 'typescript', func: typescript },
    { name: 'xml', func: xml }
  ];
}

export const HightlightOptionsService = {
  provide: HIGHLIGHT_OPTIONS,
  useValue: {
    languages: hljsLanguages
  }
};
