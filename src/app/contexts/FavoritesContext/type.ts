export type FavoritesContextType = {
    favorites: number[];
    toggleFavorite: (id: number) => void;
};