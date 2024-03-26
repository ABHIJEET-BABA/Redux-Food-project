const INIT_STATE = {
    carts: []
};

export const cartreducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case "ADD_CART":
            const itemIndex = state.carts.findIndex((item) => item.id === action.payload.id);
            if (itemIndex >= 0) {
                const updatedCarts = state.carts.map((item, index) => {
                    if (index === itemIndex) {
                        return { ...item, qnty: item.qnty + 1 };
                    }
                    return item;
                });
                return {
                    ...state,
                    carts: updatedCarts
                };
            } else {
                const newItem = { ...action.payload, qnty: 1 };
                return {
                    ...state,
                    carts: [...state.carts, newItem]
                };
            }

        case "RMV_CART":
            const itemIndexDec = state.carts.findIndex((item) => item.id === action.payload.id);
            if (itemIndexDec >= 0) {
                const updatedCarts = state.carts.map((item, index) => {
                    if (index === itemIndexDec) {
                        return { ...item, qnty: item.qnty - 1 };
                    }
                    return item;
                });
                return {
                    ...state,
                    carts: updatedCarts.filter(item => item.qnty > 0)
                };
            } else {
                return state;
            }

        default:
            return state;
    }
};
