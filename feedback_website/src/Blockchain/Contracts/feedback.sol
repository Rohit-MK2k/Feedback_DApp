// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract FeedbackContract {
    struct Feedback {
        uint8 rating;
        string comments;
    }

    Feedback[] private feedbacks;

    function addFeedback(uint8 _rating, string memory _comments) public {
        Feedback memory newFeedback = Feedback(_rating, _comments);
        feedbacks.push(newFeedback);
    }

    function getFeedbackCount() public view returns (uint256) {
        return feedbacks.length;
    }

    function getFeedback(uint256 _index) public view returns (uint8, string memory) {
        require(_index < feedbacks.length, "Index out of range");
        Feedback memory feedback = feedbacks[_index];
        return (feedback.rating, feedback.comments);
    }

    function deleteFeedback(uint256 _index) public {
        require(_index < feedbacks.length, "Index out of range");
        feedbacks[_index] = feedbacks[feedbacks.length - 1];
        feedbacks.pop();
    }
     function getAllFeedbacks() public view returns (Feedback[] memory) {
        return feedbacks;
    }
}
