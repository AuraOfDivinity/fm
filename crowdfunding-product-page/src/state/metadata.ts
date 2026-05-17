import { ModalState } from '../components/modals/ModalCard';

export type PledgeItem = {
    id: number;
    title: string;
    subTitle?: string;
    seatCount?: number;
    description: string;
    state: ModalState;
    pledgeAmount?: number;
    selected: boolean;
    mininmumPledgeAmount?: number;
};

export enum EModalState {
    Pledging = 'Pledging',
    Confirming = 'Confirming',
}

export type TPledgeState = {
    pledges: PledgeItem[];
    modalState: EModalState;
    isModalOpen: boolean;
};

export const defaultPledgeState: TPledgeState = {
    pledges: [
        {
            id: 0,
            title: 'Pledge with no reward',
            description:
                'Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email',
            state: ModalState.Default,
            pledgeAmount: 0,
            selected: false,
            // mininmumPledgeAmount: 0,
        },
        {
            id: 1,
            title: 'Bamboo Stand',
            description:
                "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list",
            state: ModalState.Default,
            subTitle: 'Pledge $25 or more',
            seatCount: 101,
            pledgeAmount: 0,
            selected: false,
            mininmumPledgeAmount: 25,
        },
        {
            id: 2,
            title: 'Black Edition Stand',
            description:
                'You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.',
            state: ModalState.Default,
            subTitle: 'Pledge $75 or more',
            seatCount: 64,
            pledgeAmount: 0,
            selected: false,
            mininmumPledgeAmount: 75,
        },
        {
            id: 3,
            title: 'Mahogany Special Edition',
            description:
                'You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list.  Shipping is included.',
            state: ModalState.Inactive,
            subTitle: 'Pledge $200 or more',
            seatCount: 0,
            pledgeAmount: 0,
            selected: false,
            mininmumPledgeAmount: 200,
        },
    ],
    modalState: EModalState.Pledging,
    isModalOpen: false,
};
