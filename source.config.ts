import { defineConfig, defineDocs } from 'fumadocs-mdx/config';
import { metaSchema, pageSchema } from 'fumadocs-core/source/schema';
import { z } from 'zod';

const customPageSchema = pageSchema.extend({
  excludeFromSearch: z.boolean().default(false),
});

export const ca5Docs = defineDocs({
  dir: 'content/ca5',
  docs: {
    schema: customPageSchema,
    postprocess: { includeProcessedMarkdown: true },
  },
  meta: { schema: metaSchema },
});

export const ca6Docs = defineDocs({
  dir: 'content/ca6',
  docs: {
    schema: customPageSchema,
    postprocess: { includeProcessedMarkdown: true },
  },
  meta: { schema: metaSchema },
});

export const docs = defineDocs({
  dir: 'content/docs',
  docs: {
    schema: customPageSchema,
    postprocess: { includeProcessedMarkdown: true },
  },
  meta: { schema: metaSchema },
});

export default defineConfig({
  mdxOptions: {},
});