// variables & API reference
var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
var searchTerm;

url += '?' + $.param({
  'api-key': "78c4f6c8342d44759b652617290d4c1e",
  'q': searchTerm
})

$.ajax ({
    url: url,
    method: "GET"
}).then(function(response) {


});
