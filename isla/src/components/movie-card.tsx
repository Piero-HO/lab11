import { Calendar, Star } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import type { Movie } from '@/services/tmdb';

const TMDB_IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

interface MovieCardProps {
  movie: Movie;
}

export function MovieCard({ movie }: MovieCardProps) {
  const posterUrl = movie.poster_path
    ? `${TMDB_IMAGE_BASE_URL}${movie.poster_path}`
    : undefined;

  return (
    <Card className="group gap-0 overflow-hidden border-white/10 bg-card/80 py-0 transition duration-300 hover:-translate-y-1 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-950/30">
      <div className="aspect-2/3 overflow-hidden bg-muted">
        {posterUrl ? (
          <img
            alt={`${movie.title} poster`}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
            loading="lazy"
            src={posterUrl}
          />
        ) : (
          <div className="flex h-full items-center justify-center px-6 text-center text-sm text-muted-foreground">
            Poster unavailable
          </div>
        )}
      </div>

      <CardContent className="flex flex-1 flex-col gap-4 p-5">
        <div className="flex items-start justify-between gap-3">
          <h2 className="line-clamp-2 text-lg font-semibold leading-tight text-foreground">
            {movie.title}
          </h2>
          <Badge className="border-blue-400/20 bg-blue-500/15 text-blue-300">
            <Star className="size-3 fill-current" />
            {movie.vote_average.toFixed(1)}
          </Badge>
        </div>

        <p className="mt-auto flex items-center gap-2 text-sm text-muted-foreground">
          <Calendar className="size-4 text-blue-400" />
          {movie.release_date || 'Release date unavailable'}
        </p>
      </CardContent>

      <CardFooter className="px-5 pb-5">
        <Button className="w-full bg-blue-600 text-white hover:bg-blue-500">
          Buy Ticket
        </Button>
      </CardFooter>
    </Card>
  );
}
