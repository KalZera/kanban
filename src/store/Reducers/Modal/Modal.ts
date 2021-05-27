import { ModalProps, ActionModal } from './TypesModal';
const INITIAL_STATE: ModalProps = {
	modal: {
		open: false,
		form: 'column',
	},
};

export const ModalReducer = (state: ModalProps = INITIAL_STATE, action: ActionModal): ModalProps => {
	switch (action.type) {
		case 'TOGGLE_MODAL_ITEM':
			return { modal: { open: !state.modal.open, form: 'item' } };
		case 'TOGGLE_MODAL_COLUMN':
			return { modal: { open: !state.modal.open, form: 'column' } };
		case 'TOGGLE_MODAL_TAG':
			return { modal: { open: !state.modal.open, form: 'tag' } };
		default:
			return state;
	}
};
