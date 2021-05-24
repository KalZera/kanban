import React from 'react';
import { Modal as ModalB } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

interface Props {
	open: boolean;
	handleClose: () => void;
}

export const Modal: React.FC<Props> = ({ open, handleClose }) => {
	return (
		<ModalB show={open} onHide={handleClose}>
			<ModalB.Header closeButton>
				<ModalB.Title>Modal title</ModalB.Title>
			</ModalB.Header>

			<ModalB.Body>
				<p>Modal body text goes here.</p>
			</ModalB.Body>
		</ModalB>
	);
};
