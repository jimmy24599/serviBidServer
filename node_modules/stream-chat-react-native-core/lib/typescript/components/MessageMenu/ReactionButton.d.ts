import React from 'react';
import { IconProps } from '../../icons';
type ReactionButtonProps = {
    /**
     * Icon to display for the reaction button
     */
    Icon: React.ComponentType<IconProps>;
    /**
     * Whether the reaction button is selected
     */
    selected: boolean;
    /**
     * The type of reaction
     */
    type: string;
    /**
     * Function to call when the reaction button is pressed
     * @param reactionType
     * @returns
     */
    onPress?: (reactionType: string) => void;
};
export declare const ReactionButton: (props: ReactionButtonProps) => React.JSX.Element;
export {};
//# sourceMappingURL=ReactionButton.d.ts.map