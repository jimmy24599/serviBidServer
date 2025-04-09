import React from 'react';
export type PollInputDialogProps = {
    closeDialog: () => void;
    onSubmit: (text: string) => void;
    title: string;
    visible: boolean;
    initialValue?: string;
};
export declare const PollInputDialog: ({ closeDialog, initialValue, onSubmit, title, visible, }: PollInputDialogProps) => React.JSX.Element;
//# sourceMappingURL=PollInputDialog.d.ts.map