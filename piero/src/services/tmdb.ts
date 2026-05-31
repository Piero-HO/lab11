const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

export interface Movie {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
  release_date: string;
  vote_average: number;
}

// Mock data for testing
const MOCK_MOVIES: Movie[] = [
  {
    id: 1,
    title: 'The Shawshank Redemption',
    poster_path: '/lyQBXzYvjiI6NlJTZa2W3SBTM0l.jpg',
    overview: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
    release_date: '1994-09-23',
    vote_average: 9.3,
  },
  {
    id: 2,
    title: 'The Godfather',
    poster_path: '/3bhkrj58Vtu7enYsRolD1fZdja1.jpg',
    overview: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his youngest son.',
    release_date: '1972-03-14',
    vote_average: 9.2,
  },
  {
    id: 3,
    title: 'The Dark Knight',
    poster_path: '/1hqwGsib1KfB6fhwi6bjiIcmeqO.jpg',
    overview: 'When the menace known as The Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest tests.',
    release_date: '2008-07-14',
    vote_average: 9.0,
  },
  {
    id: 4,
    title: 'Inception',
    poster_path: '/9gk7adHYeDMPS6QqByDo0O2dCmD.jpg',
    overview: 'A skilled thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea.',
    release_date: '2010-07-16',
    vote_average: 8.8,
  },
  {
    id: 5,
    title: 'Pulp Fiction',
    poster_path: '/dM2w364MScsjFjitZeF7aIekmYF.jpg',
    overview: 'The lives of two mob hitmen, a boxer, a gangster and his wife intertwine in four tales of violence and redemption.',
    release_date: '1994-10-14',
    vote_average: 8.9,
  },
  {
    id: 6,
    title: 'Forrest Gump',
    poster_path: '/clEJZYnMjzqyChMwQedhzUZeDRJ.jpg',
    overview: 'The presidencies of Kennedy and Johnson unfold through the perspective of an Alabama man with an IQ of 75.',
    release_date: '1994-07-06',
    vote_average: 8.8,
  },
  {
    id: 7,
    title: 'The Matrix',
    poster_path: '/lJwSvq305C2ytkJJrec3k9tvrCl.jpg',
    overview: 'A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.',
    release_date: '1999-03-31',
    vote_average: 8.7,
  },
  {
    id: 8,
    title: 'Interstellar',
    poster_path: '/gEU2QniE6E77NI6lCu244UZsbVi.jpg',
    overview: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival.',
    release_date: '2014-11-07',
    vote_average: 8.6,
  },
];

export const getPopularMovies = async (language: string = 'es-ES'): Promise<Movie[]> => {
  try {
    // First try to fetch from TMDb API
    const response = await fetch(
      `${BASE_URL}/movie/popular?language=${language}`,
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          'Content-Type': 'application/json;charset=utf-8',
        },
      }
    );

    if (!response.ok) {
      console.log('TMDb API not available, using mock data');
      // If API fails, return mock data
      console.log('TMDB Response:', MOCK_MOVIES);
      return MOCK_MOVIES;
    }

    const data = await response.json();
    console.log('TMDB Response:', data.results);
    return data.results;
  } catch (error) {
    console.log('Error fetching from TMDb, using mock data:', error);
    console.log('TMDB Response:', MOCK_MOVIES);
    return MOCK_MOVIES;
  }
};
