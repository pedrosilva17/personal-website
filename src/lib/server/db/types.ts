export type NumberInfo = {
	id: number;
	number: number;
	description: string;
};

export type Project = {
	id: number;
	title: string;
	description: string;
	tags: string[];
	link: string;
	hasImage: boolean;
};

export type ProjectTag = {
	id: number;
	title: string;
	description: string;
	tag: string;
	link: string;
	hasImage: boolean;
};
