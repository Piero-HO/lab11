import tmdb from "@/lib/tmdb";
import type { Movie } from "@/types/movie";

interface PopularMoviesResponse {
  results: Movie[];
}

export async function getPopularMovies(): Promise<Movie[]> {
  const { data } = await tmdb.get<PopularMoviesResponse>("/movie/popular");
  return data.results;
}
