import React, { PropsWithChildren } from 'react';
export declare const allOwnCapabilities: {
    banChannelMembers: string;
    castPollVote: string;
    deleteAnyMessage: string;
    deleteOwnMessage: string;
    flagMessage: string;
    pinMessage: string;
    queryPollVotes: string;
    quoteMessage: string;
    readEvents: string;
    sendLinks: string;
    sendMessage: string;
    sendPoll: string;
    sendReaction: string;
    sendReply: string;
    sendTypingEvents: string;
    updateAnyMessage: string;
    updateOwnMessage: string;
    uploadFile: string;
};
export type OwnCapability = keyof typeof allOwnCapabilities;
export type OwnCapabilitiesContextValue = Record<OwnCapability, boolean>;
export declare const OwnCapabilitiesContext: React.Context<OwnCapabilitiesContextValue>;
export declare const OwnCapabilitiesProvider: ({ children, value, }: PropsWithChildren<{
    value: OwnCapabilitiesContextValue;
}>) => React.JSX.Element;
export declare const useOwnCapabilitiesContext: () => OwnCapabilitiesContextValue;
//# sourceMappingURL=OwnCapabilitiesContext.d.ts.map