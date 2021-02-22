/// <reference types="cheerio" />
import type { Recipie } from './types';
export declare function parse($: cheerio.Root): Omit<Recipie, 'url'>;
export default function scrape(url: string): Promise<Recipie>;
