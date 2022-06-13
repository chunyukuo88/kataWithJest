// https://www.codewars.com/kata/514a024011ea4fb54200004b/train/javascript

/** My original: */
// export function domainName(url){
//   const startingSegments = ['http://www.', 'https://www.', 'https://', 'http://', 'www.'];
//   let beginningOfUrl;
//   for (const segment of startingSegments) {
//     if (url.includes(segment)) {
//       beginningOfUrl = segment;
//       break;
//     }
//   }
//   return (!beginningOfUrl)
//     ? url.split('.')[0]
//     : url.split(beginningOfUrl)[1].split('.')[0];
// }

/** Ultra-concise alternative: */
export function domainName(url){
  return url
    .replace('https://', '')
    .replace('http://', '')
    .replace('www.', '')
    .split('.')[0];
};