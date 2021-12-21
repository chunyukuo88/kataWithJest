//Source:
//https://www.codewars.com/kata/525c65e51bf619685c000059/train/javascript

/** Note: The function name 'cakes' is not semantic but is required by the kata spec on Codewars. */
export const cakes = (needs, has) => (!canMakeAtLeastOne(needs, has))
  ? 0
  : calculatePossibleCakes(needs, has);

export function calculatePossibleCakes(needs, has) {
  const ratios = Object.keys(needs).map(ingredient => Math.floor((has[ingredient] / needs[ingredient])));
  return Math.min(...ratios);
}

export function canMakeAtLeastOne(needs, has) {
  let hasEnoughForOne = true;
  for (const ingredient in needs) {
    if (!has.hasOwnProperty(ingredient)) {
      hasEnoughForOne = false;
      break;
    }
    if (has[ingredient] < needs[ingredient]) {
      hasEnoughForOne = false;
      break;
    };
  };
  return hasEnoughForOne;
};
