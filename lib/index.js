"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parse = void 0;
const tslib_1 = require("tslib");
const cheerio_1 = tslib_1.__importDefault(require("cheerio"));
const node_fetch_1 = tslib_1.__importDefault(require("node-fetch"));
function getName($) {
    return $("meta[property='og:title']").attr('content');
}
function getServings($) {
    const rawString = $('.recipe-adjust-servings__size-quantity').text();
    const numServings = rawString.match(/\d+/g);
    return numServings ? parseInt(numServings[0], 10) : 0;
}
function getReadyInTime($) {
    return $('.two-subcol-content-wrapper:nth-of-type(1) > .recipe-meta-item:nth-of-type(3) > .recipe-meta-item-body')
        .text()
        .trim();
}
function getPrepTime($) {
    return $('.two-subcol-content-wrapper:nth-of-type(1) > .recipe-meta-item:nth-of-type(1) > .recipe-meta-item-body')
        .text()
        .trim();
}
function getCookTime($) {
    return $('.two-subcol-content-wrapper:nth-of-type(1) > .recipe-meta-item:nth-of-type(2) > .recipe-meta-item-body')
        .text()
        .trim();
}
function getNutrition($) {
    return Object.fromEntries($('.recipe-nutrition-section > div:nth-child(2)')
        .text()
        .trim()
        .split(';')
        .map(pair => pair.split(' ').filter(Boolean))
        .map(([key, val], i, arr) => /\d/.test(key)
        ? [val, key]
        : [key, i === arr.length - 1 ? val.slice(0, arr.length + 2) : val]));
}
function getIngredients($) {
    return Array.from($('.ingredients-item-name')).map(({ children }) => children[0].data.trim());
}
function getSteps($) {
    return Array.from($('.instructions-section-item p')).map(({ children }) => children[0].data.trim());
}
function parse($) {
    return {
        name: getName($),
        servings: getServings($),
        readyInTime: getReadyInTime($),
        prepTime: getPrepTime($),
        cookTime: getCookTime($),
        nutrition: getNutrition($),
        ingredients: getIngredients($),
        steps: getSteps($),
    };
}
exports.parse = parse;
function scrape(url) {
    return node_fetch_1.default(url)
        .then(res => res.text())
        .then(cheerio_1.default.load)
        .then(parse)
        .then(recipie => Object.assign(recipie, { url }));
}
exports.default = scrape;
