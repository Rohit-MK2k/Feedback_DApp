import {createContext, useState, useEffect} from 'react'
import Web3 from "web3"
import fbContract from './Blockchain/feedback'

const feedbackContext = createContext()

export const FeedbackProvider = ({children}) =>{
    const [feedbackDisplay,setFeedbackDisplay] = useState([])
    const [web3, setweb3] = useState(null)
    const [feedLength, setFeedLength] = useState()
    const [isConnected, setConnected] = useState(false)
    const [acc, setAcc] = useState()
    useEffect(()=>{
        getFeedbackLength()
        getFeedback()
        Connected()
    },[])
    useEffect(()=>{
        Connected()
    },[acc[0]])
    const onConnect = async () =>{
        if(typeof window !== "undefined" && window.ethereum !== "undefined"){
        try{
            const account = await window.ethereum.request({method: "eth_requestAccounts"})
            const accounts = await window.ethereum.request({method: 'eth_accounts'})    
            setAcc(accounts)
            const web = new Web3(window.ethereum)
            setweb3(web)
            if(account.length){
                setConnected(true)
            }
            else{
                setConnected(false)
            }
        }
        catch(err){
            if(err.message === "User rejected the request."){
                setConnected(false)
            }
        }
        }
        else{
        console.log("Please install metamask")
        }
    }

    
    async function Connected() {
        const account = await window.ethereum.request({method: 'eth_accounts'});   
        if (account.length) {
            setConnected(true)
        } else {
            setConnected(false)
        }
    }


    const getFeedbackLength = async() =>{
        const length = await fbContract.methods.getFeedbackCount().call()
        setFeedLength(length)
    }


    const getFeedback = async ()=>{
        const count = await fbContract.methods.getFeedbackCount().call();
        const loadedFeedbacks = [];
        for (let i = 0; i < count; i++) {
            const feed = await fbContract.methods.getFeedback(i).call();
            loadedFeedbacks.push({
                feedback: feed[1],
                rating: feed[0]
            })
        }
        setFeedbackDisplay(loadedFeedbacks)
    }


    const addFeedback = async(newFeedback) =>{
        const accounts = await window.ethereum.request({method: 'eth_accounts'}); 
        let rating = newFeedback.rating
        let comments = newFeedback.feedback
        await fbContract.methods.addFeedback(Number(rating), comments).send({
            from: accounts[0]
        })
        getFeedbackLength()
        getFeedback()
    }

    return (<feedbackContext.Provider value ={{
        feedbackDisplay,
        addFeedback,
        onConnect,
        isConnected,
        feedLength
    }}>
        {children}
    </feedbackContext.Provider>)
}
export default feedbackContext
