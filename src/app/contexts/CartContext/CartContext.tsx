'use client'

import React, { 
    createContext, 
    useState, 
    useContext, 
    ReactNode, 
    useEffect 
} from 'react';

type CartContextType = {
    cart: number[];
    toggleCart: (id: number) => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [cart, setCart] = useState<number[]>(() => {
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const toggleCart = (id: number) => {
        setCart((prevCart) =>
            prevCart.includes(id)
                ? prevCart.filter((cartId) => cartId !== id)
                : [...prevCart, id]
        );
    };

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
