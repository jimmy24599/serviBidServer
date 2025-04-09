import React from 'react';
export type KeyboardContextValue = {
    dismissKeyboard: () => void;
};
export declare const KeyboardContext: React.Context<{
    dismissKeyboard: () => void;
}>;
type Props = React.PropsWithChildren<{
    value: KeyboardContextValue;
}>;
export declare const KeyboardProvider: ({ children, value }: Props) => React.JSX.Element;
export declare const useKeyboardContext: () => {
    dismissKeyboard: () => void;
};
export {};
//# sourceMappingURL=KeyboardContext.d.ts.map