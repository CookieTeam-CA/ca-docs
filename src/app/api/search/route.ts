import { source } from '@/lib/source';
import { createSearchAPI } from 'fumadocs-core/search/server';

export const revalidate = false;

export const { staticGET: GET } = createSearchAPI('advanced', {
  language: 'german',
  indexes: source.getPages()
    .filter((page) => page.slugs[0] !== 'ca5') // CA5 ORDNER WIRD HIER AUSGESCHLOSSEN!!! WICHTIG
    .map((page) => ({
      title: page.data.title,
      description: page.data.description,
      url: page.url,
      id: page.url,
      structuredData: page.data.structuredData,
    })),
});