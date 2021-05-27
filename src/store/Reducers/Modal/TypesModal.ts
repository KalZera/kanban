type formType = 'item' | 'column' | 'tag';
export interface ModalProps {
	modal: { open: boolean; form: formType };
}

type Actions = 'TOGGLE_MODAL_ITEM' | 'TOGGLE_MODAL_COLUMN' | 'TOGGLE_MODAL_TAG';

export type ActionModal = { type: Actions };
