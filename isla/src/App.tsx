import { useEffect, useState } from 'react';

import { MovieCard } from '@/components/movie-card';
import { getPopularMovies, type Movie } from '@/services/tmdb';

function App() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const loadMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
      } catch (error) {
        console.error(error);
        setErrorMessage('Unable to load movies. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    loadMovies();
  }, []);

  return (
    <main className="min-h-screen bg-background">
      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
        <header className="mb-10 max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
            Now showing
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Popular movies
          </h1>
          <p className="mt-4 text-base leading-7 text-muted-foreground">
            Discover this week&apos;s audience favorites and book your next
            movie night.
          </p>
        </header>

        {isLoading && (
          <p className="text-sm text-muted-foreground">Loading movies...</p>
        )}

        {errorMessage && (
          <p className="rounded-lg border border-destructive/40 bg-destructive/10 p-4 text-sm text-destructive">
            {errorMessage}
          </p>
        )}

        {!isLoading && !errorMessage && (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {movies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}

export default App;
