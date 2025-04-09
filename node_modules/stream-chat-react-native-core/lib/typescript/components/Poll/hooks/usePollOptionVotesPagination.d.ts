import { PollOption, PollOptionVotesQueryParams, PollVote } from 'stream-chat';
export type UsePollOptionVotesPaginationParams = {
    option: PollOption;
    loadFirstPage?: boolean;
    paginationParams?: PollOptionVotesQueryParams;
};
export type UsePollVotesReturnType = {
    error: Error | undefined;
    hasNextPage: boolean;
    loading: boolean;
    loadMore: () => void;
    next: string | null | undefined;
    votes: PollVote[];
};
/**
 * A hook that queries votes for a given Poll and returns them in a paginated fashion.
 * Should be used instead of the latestVotesByOption property within the reactive state in the
 * event that we need more than the top 10 votes for an option. The returned property votes will
 * automatically be updated and trigger a state change when paginating further. Querying for votes
 * can only be done on an option by option basis.
 *
 * @param option {PollOption} The option for which we want to load the votes.
 * @param loadFirstPage {boolean} Signifies whether the first page should be automatically loaded whenever
 * the hook is first called.
 * @param paginationParams {PollOptionVotesQueryParams} The pagination params we might want to use for our custom
 * needs when invoking the hook.
 *
 * @returns {UsePollVotesReturnType} An object containing all of the needed pagination values as well as the
 * answers.
 **/
export declare const usePollOptionVotesPagination: ({ loadFirstPage, option, paginationParams, }: UsePollOptionVotesPaginationParams) => UsePollVotesReturnType;
//# sourceMappingURL=usePollOptionVotesPagination.d.ts.map