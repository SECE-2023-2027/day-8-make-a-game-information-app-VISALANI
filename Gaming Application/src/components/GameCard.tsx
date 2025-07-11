type Game = {
    id: number;
    name: string;
    poster: string;
    releaseYear: string;
    developer: string;
    category: string;
};

export default function GameCard({ game }: { game: Game }) {
    return (
        <div className="bg-white p-4 rounded-xl shadow-md">
            <img src={game.poster} alt={game.name} className="w-full h-40 object-cover rounded-md" />
            <h2 className="mt-2 text-lg font-bold">{game.name}</h2>
            <p className="text-sm">Developer: {game.developer}</p>
            <p className="text-sm">Released: {game.releaseYear}</p>
        </div>
    );
}
