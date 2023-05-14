import { cachingDurationSchema, numberResultsSchema, portNumberSchema } from '../models/conf';

const {
  PORT_NUMBER,
  CACHING_DURATION_HOURS,
  NUMBER_RESULTS,
} = process.env;

export const portNumber = portNumberSchema.parse(PORT_NUMBER);
export const cachingDuration = cachingDurationSchema.parse(CACHING_DURATION_HOURS) * 3_600;
export const numberResults = numberResultsSchema.parse(NUMBER_RESULTS);
