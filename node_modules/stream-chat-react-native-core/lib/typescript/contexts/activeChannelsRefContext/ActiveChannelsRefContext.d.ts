import React, { PropsWithChildren } from 'react';
type ActiveChannels = React.MutableRefObject<string[]>;
export declare const ActiveChannelsProvider: ({ children, value, }: PropsWithChildren<{
    value: ActiveChannels;
}>) => React.JSX.Element;
export declare const useActiveChannelsRefContext: () => ActiveChannels;
export {};
//# sourceMappingURL=ActiveChannelsRefContext.d.ts.map