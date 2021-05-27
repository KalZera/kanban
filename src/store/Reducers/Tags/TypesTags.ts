export interface TagType {
	id: number;
	title: string;
}

export interface TagProps {
	tags: TagType[];
}

export type Action = { type: 'ADD_TAG'; payload: string };
