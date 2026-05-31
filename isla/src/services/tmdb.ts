import { api } from '@/lib/axios';

export interface Movie {
  id: number;
  poster_path: string | null;
  release_date: string;
  title: string;
  vote_average: number;
}

interface PopularMoviesResponse {
  results: Movie[];
}

export async function getPopularMovies(): Promise<Movie[]> {
  const response = await api.get<PopularMoviesResponse>('/movie/popular');

  return response.data.results;
}
