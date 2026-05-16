import { useReducer, createContext } from 'react';
import { TPledgeState, defaultPledgeState } from './metadata';
import { pledgeReducer, TAction } from './pledgeReducer';

export const PledgeStateContext = createContext<TPledgeState>(defaultPledgeState);
export const PledgeDispatchContext = createContext<React.Dispatch<TAction> | null>(null);

const PledgeStateProvider = ({ children }: { children: React.ReactNode }) => {
    const [state, dispatch] = useReducer(pledgeReducer, defaultPledgeState);

    return (
        <PledgeStateContext.Provider value={state}>
            <PledgeDispatchContext.Provider value={dispatch}>{children}</PledgeDispatchContext.Provider>
        </PledgeStateContext.Provider>
    );
};

export default PledgeStateProvider;
