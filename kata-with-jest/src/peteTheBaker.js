//Source:
//https://www.codewars.com/kata/525c65e51bf619685c000059/train/javascript

/**
 Target function:

 * */

export function cakes(recipe, available) {
  return (!canMakeAtLeastOne(recipe, available))
    ? 0
    : compareAmounts(recipe, available);
}

export function compareAmounts(recipe, available) {
  const cakesInTermsOfIngredients = [];
  Object.keys(recipe).forEach(ingredient => {
    const cakesPerIngredient = Math.floor((available[ingredient] / recipe[ingredient]));
    cakesInTermsOfIngredients.push(cakesPerIngredient);
  });
  const result = Math.min(...cakesInTermsOfIngredients);
  return result;
}

export function canMakeAtLeastOne(recipe, available) {
  let hasEnoughForOne = true;
  for (const ingredient in recipe) {
    if (!available.hasOwnProperty(ingredient)) {
      hasEnoughForOne = false;
      break;
    }
    if (available[ingredient] < recipe[ingredient]) {
      hasEnoughForOne = false;
      break;
    };
  };
  return hasEnoughForOne;
};
