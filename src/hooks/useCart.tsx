import { useContext } from 'react';

import { CartContext } from '@/providers';

const useCart = () => useContext(CartContext);

export { useCart };
