import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { getPopularMovies, type Movie } from '@/services/tmdb';

function App() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadMovies = async () => {
      try {
        setLoading(true);
        const popularMovies = await getPopularMovies('es-ES');
        setMovies(popularMovies);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error loading movies');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadMovies();
  }, []);

  const handleBuyTickets = () => {
    alert('Compra de entradas iniciada');
  };

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="flex flex-col items-center justify-center py-12 border-b border-red-600">
        <h1 className="text-6xl font-extrabold tracking-tight text-red-600 mb-2">
          CineSpoilersS
        </h1>
        <p className="text-zinc-400 mb-6">Your cinema experience</p>
        <Button 
          onClick={handleBuyTickets}
          className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 text-lg"
          size="lg"
        >
          Buy Tickets
        </Button>
      </div>

      {/* Movies Section */}
      <div className="px-8 py-12">
        <h2 className="text-4xl font-bold mb-8 text-red-600">Popular Movies</h2>

        {loading && (
          <div className="text-center py-12">
            <p className="text-zinc-400">Cargando películas...</p>
          </div>
        )}

        {error && (
          <div className="text-center py-12">
            <p className="text-red-500">Error: {error}</p>
          </div>
        )}

        {!loading && !error && movies.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {movies.map((movie) => (
              <div
                key={movie.id}
                className="bg-gray-900 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-300 cursor-pointer"
              >
                {movie.poster_path && (
                  <img
                    src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                    alt={movie.title}
                    className="w-full h-auto object-cover"
                  />
                )}
                <div className="p-4">
                  <h3 className="font-bold text-white mb-2 line-clamp-2">
                    {movie.title}
                  </h3>
                  <p className="text-zinc-400 text-sm mb-3 line-clamp-3">
                    {movie.overview}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-yellow-500 font-bold">
                      ⭐ {movie.vote_average.toFixed(1)}
                    </span>
                    <span className="text-zinc-500 text-xs">
                      {movie.release_date}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}

export default App;