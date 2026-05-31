import { Button } from '@/components/ui/button';

function App() {
  const handleBuyTickets = () => {
    alert('Compra de entradas iniciada');
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black">
      <h1 className="text-6xl font-extrabold tracking-tight text-red-600">
        CineSpoilersS
      </h1>
      <p className="text-zinc-400">Your cinema experience</p>
      <Button 
        onClick={handleBuyTickets}
        className="mt-8 bg-red-600 hover:bg-red-700 text-white px-8 py-3 text-lg"
        size="lg"
      >
        Buy Tickets
      </Button>
    </main>
  );
}

export default App;