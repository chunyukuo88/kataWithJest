import { getIdTitleBoxart } from './RxJsCourseExercises';

/**
 Exercise 12: Retrieve id, title, and a 150x200 box art url for every video

 You've managed to flatten a tree that's two levels deep, let's try for three!
 Let's say that instead of a single boxart url on each video, we had a collection
 of boxart objects, each with a different size and url. Create a query that
 selects {id, title, boxart} for every video in the movieLists. This time though,
 the boxart property in the result will be the url of the boxart object with
 dimensions of 150x200px. Let's see if you can solve this problem with map(),
 concatAll(), and filter().

 There's just more one thing: you can't use indexers.
 * */

describe('getIdTitleBoxart()', ()=>{
  describe('WHEN: A list of genres', ()=>{
    it('THEN: It returns a list of objects containing target fields.', ()=>{
      const result = getIdTitleBoxart(genreLists);
      const expectedResult = [
        { "id": 70111470, "title": "Die Hard", "boxarts": { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" }},
        { "id": 654356453, "title": "Bad Boys", "boxarts": { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/BadBoys150.jpg" }},
        { "id": 65432445, "title": "The Chamber", "boxarts": { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/TheChamber150.jpg" },},
        { "id": 675465, "title": "Fracture", "boxarts": { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture150.jpg" }},
      ];

      expect(result).toEqual(expectedResult);
    });
  });
});




const genreLists = [
  {
    name: "Instant Queue",
    videos : [
      {
        "id": 70111470,
        "title": "Die Hard",
        "boxarts": [
          { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" },
          { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/DieHard200.jpg" }
        ],
        "url": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 4.0,
        "bookmark": []
      },
      {
        "id": 654356453,
        "title": "Bad Boys",
        "boxarts": [
          { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/BadBoys200.jpg" },
          { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/BadBoys150.jpg" }

        ],
        "url": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 5.0,
        "bookmark": [{ id: 432534, time: 65876586 }]
      }
    ]
  },
  {
    name: "New Releases",
    videos: [
      {
        "id": 65432445,
        "title": "The Chamber",
        "boxarts": [
          { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/TheChamber150.jpg" },
          { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg" }
        ],
        "url": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 4.0,
        "bookmark": []
      },
      {
        "id": 675465,
        "title": "Fracture",
        "boxarts": [
          { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture200.jpg" },
          { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture150.jpg" },
          { width: 300, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture300.jpg" }
        ],
        "url": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 5.0,
        "bookmark": [{ id: 432534, time: 65876586 }]
      }
    ]
  }
];