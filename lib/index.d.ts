/// <reference types="cheerio" />
export declare function parse($: cheerio.Root): {
    name: string | undefined;
    servings: number;
    readyInTime: string;
    prepTime: string;
    cookTime: string;
    nutrition: {
        [k: string]: string;
    };
    ingredients: any[];
    steps: any[];
};
export default function scrape(url: string): Promise<{
    name: string | undefined;
    servings: number;
    readyInTime: string;
    prepTime: string;
    cookTime: string;
    nutrition: {
        [k: string]: string;
    };
    ingredients: any[];
    steps: any[];
} & {
    url: string;
}>;
