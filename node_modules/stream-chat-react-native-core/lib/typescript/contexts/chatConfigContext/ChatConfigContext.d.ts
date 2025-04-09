import React, { PropsWithChildren } from 'react';
export type ChatConfigContextValue = {
    /**
     * This option allows you to specify a list of CDNs that offer image resizing.
     */
    resizableCDNHosts?: string[];
};
export declare const chatConfigContextDefaultvalue: {
    resizableCDNHosts: string[];
};
export declare const ChatConfigContext: React.Context<ChatConfigContextValue>;
export declare const ChatConfigProvider: ({ children, value, }: PropsWithChildren<{
    value?: ChatConfigContextValue;
}>) => React.JSX.Element;
export declare const useChatConfigContext: () => ChatConfigContextValue;
//# sourceMappingURL=ChatConfigContext.d.ts.map