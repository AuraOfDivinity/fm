import { useContext } from 'react';
import { PledgeStateContext } from '../state/PledgeStateProvider';

export const usePledgeState = () => {
    const state = useContext(PledgeStateContext);
    if (!state) {
        throw new Error('usePledgeContext must be used within the app');
    }

    return state;
};
