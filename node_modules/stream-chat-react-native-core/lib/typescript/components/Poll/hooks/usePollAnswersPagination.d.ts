import type { PollAnswer, PollAnswersQueryParams } from 'stream-chat';
export type UsePollAnswersPaginationParams = {
    loadFirstPage?: boolean;
    paginationParams?: PollAnswersQueryParams;
};
export type UsePollAnswersReturnType = {
    error: Error | undefined;
    hasNextPage: boolean;
    loading: boolean;
    loadMore: () => void;
    next: string | null | undefined;
    pollAnswers: PollAnswer[];
};
/**
 * A hook that queries answers for a given Poll and returns them in a paginated fashion.
 * Should be used instead of the latest_answers property within the reactive state in the
 * event that we need more than the top 10 answers. The returned property pollAnswers will
 * automatically be updated and trigger a state change when paginating further.
 *
 * @param loadFirstPage {boolean} Signifies whether the first page should be automatically loaded whenever
 * the hook is first called.
 * @param paginationParams {PollAnswersQueryParams} The pagination params we might want to use for our custom
 * needs when invoking the hook.
 *
 * @returns {UsePollAnswersReturnType} An object containing all of the needed pagination values as well as the
 * answers.
 **/
export declare const usePollAnswersPagination: ({ loadFirstPage, paginationParams, }?: UsePollAnswersPaginationParams) => UsePollAnswersReturnType;
//# sourceMappingURL=usePollAnswersPagination.d.ts.map