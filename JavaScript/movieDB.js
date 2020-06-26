var movies = [
    {
        title: '"In Bruges"',
        rating: 5,
        hasWatched: true
    },
    {
        title: '"Frozen"',
        rating: 4.5,
        hasWatched: false
    },
    {
        title: '"Les Miserables"',
        rating: 3.5,
        hasWatched: false
    },
    {
        title: '"Mad Max Fury Road"',
        rating: 5,
        hasWatched: true
    }
]

for(let i =0; i < movies.length; i++) {
    if(movies[i].hasWatched == true) {
        console.log("You have watched " + movies[i].title + " - " + movies[i].rating + " stars");
    }
    else {
        console.log("You have not watched " + movies[i].title + " - " + movies[i].rating + " stars")
    }
}