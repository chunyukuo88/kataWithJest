//Source:
//https://www.codewars.com/kata/525c65e51bf619685c000059/train/javascript

export function mapFieldsToArrayOfObjects(recipeObject){
  const result = [];
  for (const [ingredient, amount] of Object.entries(recipeObject)){
    const ingredientValuePair = {};
    ingredientValuePair[ingredient] = amount;
    result.push(ingredientValuePair);
  }
  console.log(result);
  return result;
}
