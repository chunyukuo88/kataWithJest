//Source:
//https://www.codewars.com/kata/525c65e51bf619685c000059/train/javascript

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
