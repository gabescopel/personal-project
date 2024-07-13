'use client';

import React, { 
    createContext, 
    useState, 
    useContext, 
    ReactNode, 
    useEffect 
} from 'react';
import { CartContextType } from './type';

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [cart, setCart] = useState<number[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const savedCart = localStorage.getItem('cart');
        if (savedCart) {
            setCart(JSON.parse(savedCart));
        }
        setLoading(false);
    }, []);

    useEffect(() => {
        if (!loading) {
            localStorage.setItem('cart', JSON.stringify(cart));
        }
    }, [cart, loading]);

    const toggleCart = (id: number) => {
        setCart((prevCart) =>
            prevCart.includes(id)
                ? prevCart.filter((cartId) => cartId !== id)
                : [...prevCart, id]
        );
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <CartContext.Provider value={{ cart, toggleCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('usar dentro do provider');
    }
    return context;
};
