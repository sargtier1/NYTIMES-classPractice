// variables referencing HTML
var SearchTerm = $("#searchTerm");
var NumRec = $("#numRec");
var StartYr = $("#startYr");
var EndYr = $("#endYr");
var ExecSearch = $("#execSearch");
var Clear = $("#clear");

// variables & API reference
var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
var searchTerm = "hurricane";

url += '?' + $.param({
 'api-key': "78c4f6c8342d44759b652617290d4c1e",
 'q': searchTerm
})

$.ajax ({
   url: url,
   method: "GET"
}).then(function(object) {
   var results = object.response.docs;
   console.log(results);

   for(i=0; i < results.length; i++) {
       var articleName = results[i].headline.main;
       console.log(articleName);
   }
});

function test () {

};
