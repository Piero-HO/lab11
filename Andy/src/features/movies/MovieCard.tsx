import { Button } from "@/components/ui/button";
import type { Movie } from "@/types/movie";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

interface MovieCardProps {
  movie: Movie;
}

export function MovieCard({ movie }: MovieCardProps) {
  return (
    <div className="overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900 transition-colors hover:border-zinc-700">
      <img
        src={`${IMAGE_BASE_URL}${movie.poster_path}`}
        alt={movie.title}
        className="aspect-[2/3] w-full object-cover"
      />
      <div className="flex flex-col gap-3 p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-semibold leading-snug text-white">{movie.title}</h3>
          <span className="shrink-0 rounded bg-zinc-800 px-2 py-0.5 text-xs text-yellow-400">
            ★ {movie.vote_average.toFixed(1)}
          </span>
        </div>
        <p className="text-sm text-zinc-400">{movie.release_date}</p>
        <Button className="mt-3 w-full bg-red-600 text-white hover:bg-red-700">
          Comprar ticket
        </Button>
      </div>
    </div>
  );
}
