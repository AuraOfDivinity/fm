import { ModalState } from '../components/modals/ModalCard';
import { EModalState, TPledgeState } from './metadata';

export enum ActionType {
    Select = 'SELECT',
    Pledge = 'PLEDGE',
    Unselect = 'UNSELECT',
    ToggleModal = 'TOGGLEMODAL',
    Proceed = 'PROCEED',
    ResetModal = 'RESETMODAL',
    ToggleBookmark = 'TOGGLEBOOKMARK',
    ToggleMobileNavbar = 'TOGGLEMOBILENAVBAR',
}

export type TAction =
    | { type: ActionType.Select; id: number }
    | { type: ActionType.Pledge; amount: number; id: number }
    | { type: ActionType.Unselect; id: number }
    | { type: ActionType.ToggleModal }
    | { type: ActionType.Proceed }
    | { type: ActionType.ResetModal }
    | { type: ActionType.ToggleBookmark }
    | { type: ActionType.ToggleMobileNavbar };

export const pledgeReducer = (state: TPledgeState, action: TAction): TPledgeState => {
    switch (action.type) {
        case ActionType.Select:
            return {
                ...state,
                pledges: state.pledges.map((pledge) => {
                    if (pledge.id === action.id) {
                        return { ...pledge, state: ModalState.Active };
                    } else if (pledge.state === ModalState.Inactive) {
                        return pledge;
                    } else {
                        return { ...pledge, state: ModalState.Default };
                    }
                }),
            };
        case ActionType.Unselect:
            return {
                ...state,
                pledges: state.pledges.map((pledge) => {
                    if (pledge.id === action.id) {
                        return {
                            ...pledge,
                            state: ModalState.Default,
                        };
                    } else {
                        return pledge;
                    }
                }),
            };
        case ActionType.Pledge:
            return {
                ...state,
                pledges: state.pledges.map((pledge) => {
                    if (pledge.id === action.id) {
                        return {
                            ...pledge,
                            pledgeAmount: action.amount,
                        };
                    } else return pledge;
                }),
            };
        case ActionType.ToggleModal:
            return {
                ...state,
                isModalOpen: !state.isModalOpen,
            };
        case ActionType.Proceed:
            return {
                ...state,
                modalState: EModalState.Confirming,
            };
        case ActionType.ResetModal:
            return {
                ...state,
                modalState: EModalState.Pledging,
                isModalOpen: false,
            };
        case ActionType.ToggleBookmark:
            return {
                ...state,
                bookMarked: !state.bookMarked,
            };
        case ActionType.ToggleMobileNavbar:
            return {
                ...state,
                isMobileNavbarOpen: !state.isMobileNavbarOpen,
            };
        default:
            return state;
    }
};
