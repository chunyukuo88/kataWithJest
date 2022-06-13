// https://www.codewars.com/kata/514a024011ea4fb54200004b/train/javascript

export function domainName(url){
  const startingSegments = ['http://www.', 'https://www.', 'https://', 'http://', 'www.'];
  // const beginningOfUrl = startingSegments.filter(segment => url.includes(segment));
  let beginningOfUrl;
  for (const segment of startingSegments) {
    if (url.includes(segment)) {
      console.log('segment:   ', segment);
      beginningOfUrl = segment;
      break;
    }
  }
  return url
    .split(beginningOfUrl)[1]
    .split('.')[0];
}
