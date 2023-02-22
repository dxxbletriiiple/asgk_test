export interface IPushForm {
	marker: string;
	isOpen: boolean;
	onClose: () => void;
}

export interface FormFields {
	ids: HTMLInputElement;
	msg: HTMLInputElement;
}
