import Web3 from 'web3'

const web3 = new Web3(window.ethereum) /*MetaMask Provider*/
// Infura provider
// const provider = new Web3.providers.HttpProvider(
//     // "https://sepolia.infura.io/v3/73b8064dfc7c4813b208ede665ea91ad",
//     web
// )
// const web3 = new Web3(provider) 

const abi = [{"inputs":[{"internalType":"uint8","name":"_rating","type":"uint8"},{"internalType":"string","name":"_comments","type":"string"}],"name":"addFeedback","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_index","type":"uint256"}],"name":"deleteFeedback","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getAllFeedbacks","outputs":[{"components":[{"internalType":"uint8","name":"rating","type":"uint8"},{"internalType":"string","name":"comments","type":"string"}],"internalType":"struct FeedbackContract.Feedback[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_index","type":"uint256"}],"name":"getFeedback","outputs":[{"internalType":"uint8","name":"","type":"uint8"},{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getFeedbackCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]

const fbContract = new web3.eth.Contract(abi, "0xc504a16f9994c2b3f3681ad5f7a7c504314f498c")

export default fbContract