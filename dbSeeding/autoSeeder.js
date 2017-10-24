// This start script is currently not working. 
// See below for a version to seed the DB manually. 

const Plant = require("../models/Plant.js");

// Plant seed data
var plantData = [
  {
    "title": "Tomatoes",
    "Climate": "Tomatoes need warmth; plant in late spring and early summer for most breeds",
    "Sunlight": "Tomates need at least 6-8 hours of sun to bring out their best flavors, so devote a prime sunny spot to them",
    "Support": "Cages, Stakes, Trellis",
    "Spacing": "Give each individual plant room to grow. Long-vined species need to be placed about 3ft apart, stockier species can be placed 2ft apart.",
    "Water": "Water regularly",
    "Special": "Recommend burying two-thirds of the stem when planting (note method of deep planting only works with tomatoes)",
    "description": null,
    "bullets": null,
    "skillLevel": "Intermediate",
    "parentLevel": true,
    "parentCat": null
  },
  {
    "title": "Bell Peppers",
    "Climate": "Peppers need at least 70oF for germination, and 65oF for successful transplanting.",
    "Sunlight": "Peppers are heat sensitive especially in desert climates. Different species require differing amounts of sunlight",
    "Support": "Cages, Stakes",
    "Spacing": "Transplant seedlings outdoors, 18 to 24 inches apart (but keep paired plants close to touching)",
    "Water": "Water regularly",
    "Special": "Start pepper seeds three to a pot, and thin out the weakest seedling. Let the remaining two pepper plants spend their entire lives together as one plant. The leaves of two plants help protect peppers against sunscald and the yield is often twice as good as two segregated plants.",
    "description": null,
    "bullets": null,
    "skillLevel": "Intermediate",
    "parentLevel": true,
    "parentCat": null
  },
  {
    "title": "Broccoli",
    "Climate": "Broccoli is a cool-season crop that, like spinach, can be grown in the spring or fall. Broccoli can germinate in soil with temperatures as low as 40°F.",
    "Sunlight": "Best exposed to full sun",
    "Support": "No requirements",
    "Spacing": "Within a row, space your plants 12 to 24 inches apart with 36 inches between each row.",
    "Water": "Water frequently, keep up moisture but do not wet head.",
    "Special": "Do not get developing heads wet when watering. Roots are very shallow, do not cultivate. Use mulch to keep soil temperature low.",
    "description": null,
    "bullets": null,
    "skillLevel": "Intermediate",
    "parentLevel": true,
    "parentCat": null
  }
];

// Seeds plant data
for (let i = 0; i < plantData.length; i++){
	console.log("iteration");
	console.log("Checking...");
	console.log(plantData[i]);
	Plant.create(plantData[i], function (err, small) {
		console.log("Model used")
	    if (err) {
	      console.log(err);
	    } else {
	      // saved!
	      if (!err) console.log(small);
	      console.log("Saved");
	    }; 
	});
};


// To seed the DB manually, run this command in the Mongo command line: 

db.plants.insertMany([
  {
    "title": "Tomatoes",
    "Climate": "Tomatoes need warmth; plant in late spring and early summer for most breeds",
    "Sunlight": "Tomates need at least 6-8 hours of sun to bring out their best flavors, so devote a prime sunny spot to them",
    "Support": "Cages, Stakes, Trellis",
    "Spacing": "Give each individual plant room to grow. Long-vined species need to be placed about 3ft apart, stockier species can be placed 2ft apart.",
    "Water": "Water regularly",
    "Special": "Recommend burying two-thirds of the stem when planting (note method of deep planting only works with tomatoes)",
    "description": null,
    "bullets": null,
    "skillLevel": "Intermediate",
    "parentLevel": true,
    "parentCat": null,
    "imageURL": "http://assets.nydailynews.com/polopoly_fs/1.2834910.1476795531!/img/httpImage/image.jpg_gen/derivatives/article_750/488059328.jpg"
  },
  {
    "title": "Bell Peppers",
    "Climate": "Peppers need at least 70oF for germination, and 65oF for successful transplanting.",
    "Sunlight": "Peppers are heat sensitive especially in desert climates. Different species require differing amounts of sunlight",
    "Support": "Cages, Stakes",
    "Spacing": "Transplant seedlings outdoors, 18 to 24 inches apart (but keep paired plants close to touching)",
    "Water": "Water regularly",
    "Special": "Start pepper seeds three to a pot, and thin out the weakest seedling. Let the remaining two pepper plants spend their entire lives together as one plant. The leaves of two plants help protect peppers against sunscald and the yield is often twice as good as two segregated plants.",
    "description": null,
    "bullets": null,
    "skillLevel": "Intermediate",
    "parentLevel": true,
    "parentCat": null,
    "imageURL": "https://img.buzzfeed.com/buzzfeed-static/static/2017-05/4/12/asset/buzzfeed-prod-fastlane-01/sub-buzz-20636-1493915918-9.jpg?downsize=715:*&output-format=auto&output-quality=auto"
  },
  {
    "title": "Broccoli",
    "Climate": "Broccoli is a cool-season crop that, like spinach, can be grown in the spring or fall. Broccoli can germinate in soil with temperatures as low as 40°F.",
    "Sunlight": "Best exposed to full sun",
    "Support": "No requirements",
    "Spacing": "Within a row, space your plants 12 to 24 inches apart with 36 inches between each row.",
    "Water": "Water frequently, keep up moisture but do not wet head.",
    "Special": "Do not get developing heads wet when watering. Roots are very shallow, do not cultivate. Use mulch to keep soil temperature low.",
    "description": null,
    "bullets": null,
    "skillLevel": "Intermediate",
    "parentLevel": true,
    "parentCat": null, 
    "imageURL": "https://www.cookforyourlife.org/wp-content/uploads/2015/08/shutterstock_294838064-min.jpg"
  }
])

// Format for guide data: 
// Body expect an array of strings, each string representing one paragraph.
[
    {
        title: ,
        body: ,
        photoLink: 
    },
    {
        title: ,
        body: ,
        photoLink: 
    },
    {
        title: ,
        body: ,
        photoLink: 
    }
];

// Format for plant data
[
    {
        "title": ,
        "Climate": ,
        "Sunlight": ,
        "Support": ,
        "Spacing": ,
        "Water": ,
        "Special": ,
        "description": ,
        "bullets": ,
        "skillLevel": ,
        "parentLevel": BOOLEAN,
        "parentCat": , 
        "imageURL": 
    }
]

// Format for plant category data
[
    {
        title: ,
        description: ,
        childPlants: ARRAY OF PLANT NAMES,
    }
]

// For putting a test plant cat in the database
db.plants.insertOne({
        title: 'Melons',
        description: "Toward the end of the growing season, pinch off any small melons so the larger melons will ripen and sweeten up.",
        childPlants: [{title: 'Watermelon', description: "Add watermelon description.", imageURL: "https://www.organicfacts.net/wp-content/uploads/2013/05/watermelon2.jpg"}, {title: 'Cantaloupe', description: "Add cantaloupe description.", imageURL: "https://groceries.morrisons.com/productImages/251/251646011_0_640x640.jpg?identifier=d85d41c1540345090c691ef4e3af7b53"}, {title: 'Honeydew', description: "Add honeydew description.", imageURL: "http://vanhornerestaurant.com/wp-content/uploads/2016/09/how-to-tell-honeydew-melon-is-ripe.jpg"}],
        imageURL: "https://groceries.morrisons.com/productImages/210/210305011_0_640x640.jpg?identifier=6ff605c91cd0384439fa1acbd7de32a1",
        parentLevel: true
    })