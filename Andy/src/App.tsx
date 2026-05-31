import { useEffect, useState } from "react";
import { getPopularMovies } from "@/features/movies/api";
import { MovieCard } from "@/features/movies/MovieCard";
import type { Movie } from "@/types/movie";

function App() {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const loadMovies = async () => {
      try {
        const data = await getPopularMovies();
        setMovies(data);
      } catch (error) {
        console.error(error);
      }
    };
    loadMovies();
  }, []);

  return (
    <main className="min-h-screen bg-black px-8 py-14 sm:px-12 lg:px-16">
      <h1 className="mb-12 text-center text-5xl font-extrabold tracking-tight text-red-500">
        CineSpoilerS
      </h1>
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-4">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </main>
  );
}

export default App;
