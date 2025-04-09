import React from 'react';
import { Reaction } from '../../types/types';
import { AvatarProps } from '../Avatar/Avatar';
export type MessageUserReactionsAvatarProps = {
    /**
     * The reaction object
     */
    reaction: Reaction;
} & Partial<Pick<AvatarProps, 'size'>>;
export declare const MessageUserReactionsAvatar: (props: MessageUserReactionsAvatarProps) => React.JSX.Element;
//# sourceMappingURL=MessageUserReactionsAvatar.d.ts.map