const movies = [
    { title: 'Movie 1', id: 1 },
    { title: 'Movie 2', id: 2 },
    { title: 'Movie 3', id: 3 },
];

// Function to display movies
function displayMovies() {
    const movieContainer = document.getElementById('movieContainer');

    movies.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.classList.add('movie-card');

        const title = document.createElement('h2');
        title.textContent = movie.title;

        const bookButton = document.createElement('button');
        bookButton.classList.add('book-button');
        bookButton.textContent = 'Book Now';
        bookButton.addEventListener('click', () => bookMovie(movie.id));

        movieCard.appendChild(title);
        movieCard.appendChild(bookButton);
        movieContainer.appendChild(movieCard);
    });
}

// Function to simulate booking
function bookMovie(movieId) {
    alert(`Booking confirmed for Movie ${movieId}`);
}

// Display movies when the page loads
displayMovies();