Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapStorableToPoll = void 0;
var mapStorableToPoll = exports.mapStorableToPoll = function mapStorableToPoll(pollRow) {
  var allow_answers = pollRow.allow_answers,
    allow_user_suggested_options = pollRow.allow_user_suggested_options,
    answers_count = pollRow.answers_count,
    created_at = pollRow.created_at,
    created_by = pollRow.created_by,
    created_by_id = pollRow.created_by_id,
    description = pollRow.description,
    enforce_unique_vote = pollRow.enforce_unique_vote,
    id = pollRow.id,
    is_closed = pollRow.is_closed,
    latest_answers = pollRow.latest_answers,
    latest_votes_by_option = pollRow.latest_votes_by_option,
    max_votes_allowed = pollRow.max_votes_allowed,
    name = pollRow.name,
    options = pollRow.options,
    own_votes = pollRow.own_votes,
    updated_at = pollRow.updated_at,
    vote_count = pollRow.vote_count,
    vote_counts_by_option = pollRow.vote_counts_by_option,
    voting_visibility = pollRow.voting_visibility;
  return {
    allow_answers: allow_answers,
    allow_user_suggested_options: allow_user_suggested_options,
    answers_count: answers_count,
    created_at: created_at,
    created_by: JSON.parse(created_by),
    created_by_id: created_by_id,
    description: description,
    enforce_unique_vote: enforce_unique_vote,
    id: id,
    is_closed: is_closed,
    latest_answers: JSON.parse(latest_answers),
    latest_votes_by_option: JSON.parse(latest_votes_by_option),
    max_votes_allowed: max_votes_allowed,
    name: name,
    options: JSON.parse(options),
    own_votes: own_votes ? JSON.parse(own_votes) : [],
    updated_at: updated_at,
    vote_count: vote_count,
    vote_counts_by_option: JSON.parse(vote_counts_by_option),
    voting_visibility: voting_visibility
  };
};
//# sourceMappingURL=mapStorableToPoll.js.map