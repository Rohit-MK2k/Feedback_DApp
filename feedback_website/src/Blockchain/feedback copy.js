const abi = [{"inputs":[{"internalType":"uint8","name":"_rating","type":"uint8"},{"internalType":"string","name":"_comments","type":"string"}],"name":"addFeedback","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_index","type":"uint256"}],"name":"deleteFeedback","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_index","type":"uint256"}],"name":"getFeedback","outputs":[{"internalType":"uint8","name":"","type":"uint8"},{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getFeedbackCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]

const feedbackContract = (web3) =>{
    new web3.eth.Contract(
        abi, 
        "0xeb143a6206fac7293d37f666520973eb9ec103de"
    )
}


export default feedbackContract