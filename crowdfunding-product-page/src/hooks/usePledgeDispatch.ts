import React, { useContext } from 'react';
import { PledgeDispatchContext } from '../state/PledgeStateProvider';
import { TAction } from '../state/pledgeReducer';

export const usePledgeDispatch = () => {
    const dispatch = useContext(PledgeDispatchContext);

    if (!dispatch) {
        throw new Error('usePledgeDispatch must be used inside PledgeStateProvider');
    }

    return dispatch;
};
