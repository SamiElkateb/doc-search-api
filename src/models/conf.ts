import { z } from 'zod';

export const portNumberSchema = z.preprocess(
  (x) => parseInt(z.string().parse(x), 10),
  z.number().positive().max(65_535),
);

export const cachingDurationSchema = z.preprocess(
  (x) => parseInt(z.string().parse(x), 10),
  z.number().positive(),
);

export const numberResultsSchema = z.preprocess(
  (x) => parseInt(z.string().parse(x), 10),
  z.number().positive(),
);
