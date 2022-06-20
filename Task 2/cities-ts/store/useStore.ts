import create from "zustand";

// Inteface for the store
interface ICounter {
    count: number;
    incrementCount: () => void;
    resetCounter: () => void;
    decrementCount: () => void;
}

const useStore = create<ICounter>((set) => ({
    // variable to keep track of the count
    count: 0,
    // Methods for updating the store
    incrementCount: () => set((state) => ({ count: state.count + 1 })),
    resetCounter: () => set(() => ({ count: 0 })),
    decrementCount: () => set((state) => ({ count: state.count - 1 })),
}));

export default useStore;
