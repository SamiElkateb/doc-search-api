import { z } from 'zod';

export const searchResultSchema = z.object({
  link: z.string(),
  websiteName: z.string(),
  pageTitle: z.string(),
});

export type SearchResult = z.infer<typeof searchResultSchema>;
