export interface IConfirmationModalOptions {
    iconSize?: number,
    confirmBtnText?: string;
    cancelBtnText?: string;
    modalClass?: 'primary' | 'danger' | 'success' | 'warning' | 'info',
}

interface IInfoModalOptions {
    iconSize?: number,
    btnText?: string;
    modalClass?: 'primary' | 'danger' | 'success' | 'warning' | 'info',
    staticBackdrop?: boolean
}
