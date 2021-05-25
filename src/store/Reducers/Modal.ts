type formType = 'item' | 'column';
export interface ModalProps {
	modal: { open: boolean; form: formType };
}

const INITIAL_STATE: ModalProps = {
	modal: {
		open: false,
		form: 'column',
	},
};

type ActionModal = { type: string };

export const ModalReducer = (state: ModalProps = INITIAL_STATE, action: ActionModal): ModalProps => {
	switch (action.type) {
		case 'TOGGLE_MODAL_ITEM':
			return { modal: { open: !state.modal.open, form: 'item' } };
		case 'TOGGLE_MODAL_COLUMN':
			return { modal: { open: !state.modal.open, form: 'column' } };
		default:
			return state;
	}
};
