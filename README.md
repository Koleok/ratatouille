# ratatouille

ratatouille is a Node.js scrapper for allrecipes.com. It allows you to
extract basic information about a recipe, the ingredients required, and
the steps involved.

### Installation

```
npm install @koleok/ratatouille
```

### Usage

```typescript
import ratatouille from '@koleok/ratatouille'

const recipe = ratatouille(
  'http://allrecipes.com/recipe/254910/kicked-up-mac-cheese'
)
```

### Result

```json
{
  "name": "Kicked Up Mac & Cheese",
  "servings": 4,
  "readyInTime": "25 mins",
  "prepTime": "10 mins",
  "cookTime": "15 mins",
  "nutrition": {
    "calories": "830",
    "protein": "28.1g",
    "carbohydrates": "120.5g",
    "fat": "30.7g",
    "cholesterol": "77.8mg",
    "sodium": "1670.8mg"
  },
  "ingredients": [
    "1 (14.5 ounce) package macaroni and cheese mix",
    "½ cup milk",
    "½ cup butter, divided",
    "1 (15 ounce) can Libby's® Sweet Peas, drained",
    "1 (15 ounce) can Libby's® Whole Kernel Sweet Corn, drained",
    "1 (4 ounce) jar diced pimentos, drained",
    "1 ½ cups panko bread crumbs"
  ],
  "steps": [
    "Prepare macaroni and cheese with milk and 1/4 cup butter, following package directions. Gently stir in peas, corn and pimentos.",
    "Place in 3-quart casserole dish.",
    "Melt remaining 1/4 cup butter, mix with breadcrumbs, and sprinkle evenly over casserole. Place under broiler about 2 minutes or until top is lightly browned."
  ],
  "url": "https://allrecipes.com/recipe/254910/kicked-up-mac-cheese"
}
```
