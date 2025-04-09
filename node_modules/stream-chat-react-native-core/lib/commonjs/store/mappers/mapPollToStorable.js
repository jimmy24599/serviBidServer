Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapPollToStorable = void 0;
var _mapDateTimeToStorable = require("./mapDateTimeToStorable");
var mapPollToStorable = exports.mapPollToStorable = function mapPollToStorable(poll) {
  var allow_answers = poll.allow_answers,
    allow_user_suggested_options = poll.allow_user_suggested_options,
    answers_count = poll.answers_count,
    created_at = poll.created_at,
    created_by = poll.created_by,
    created_by_id = poll.created_by_id,
    description = poll.description,
    enforce_unique_vote = poll.enforce_unique_vote,
    id = poll.id,
    is_closed = poll.is_closed,
    latest_answers = poll.latest_answers,
    latest_votes_by_option = poll.latest_votes_by_option,
    max_votes_allowed = poll.max_votes_allowed,
    name = poll.name,
    options = poll.options,
    own_votes = poll.own_votes,
    updated_at = poll.updated_at,
    vote_count = poll.vote_count,
    vote_counts_by_option = poll.vote_counts_by_option,
    voting_visibility = poll.voting_visibility;
  return {
    allow_answers: allow_answers,
    allow_user_suggested_options: allow_user_suggested_options,
    answers_count: answers_count,
    created_at: (0, _mapDateTimeToStorable.mapDateTimeToStorable)(created_at),
    created_by: JSON.stringify(created_by),
    created_by_id: created_by_id,
    description: description,
    enforce_unique_vote: enforce_unique_vote,
    id: id,
    is_closed: is_closed,
    latest_answers: JSON.stringify(latest_answers),
    latest_votes_by_option: JSON.stringify(latest_votes_by_option),
    max_votes_allowed: max_votes_allowed,
    name: name,
    options: JSON.stringify(options),
    own_votes: JSON.stringify(own_votes),
    updated_at: updated_at,
    vote_count: vote_count,
    vote_counts_by_option: JSON.stringify(vote_counts_by_option),
    voting_visibility: voting_visibility
  };
};
//# sourceMappingURL=mapPollToStorable.js.map