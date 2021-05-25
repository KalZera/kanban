import React from 'react';
import { Modal as ModalB } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FiX } from 'react-icons/fi';
import { Body, Container, CloseButton } from './styles';

interface Props {
	open: boolean;
	handleClose: () => void;
	title?: string;
	children: JSX.Element;
}

export const Modal: React.FC<Props> = ({ open, handleClose, title, children }) => {
	return (
		<ModalB show={open} onHide={handleClose}>
			<Container>
				<ModalB.Header>
					<ModalB.Title>{title || ''}</ModalB.Title>
					<CloseButton onClick={handleClose}>
						<FiX />
					</CloseButton>
				</ModalB.Header>
				<Body>{children}</Body>
			</Container>
		</ModalB>
	);
};
