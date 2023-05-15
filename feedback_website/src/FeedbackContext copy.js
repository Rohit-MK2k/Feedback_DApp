import {createContext, useState, useEffect} from 'react'
import Web3 from "web3"
import feedbackContract from './Blockchain/feedback'

const feedbackContext = createContext()

export const FeedbackProvider = ({children}) =>{
    const [feedback,setFeedback] = useState([])
    const [newFeedback, setNewFeedback] = useState({
        item : {},
        edit : false
    })
    const [feedLength, setFeedLength] = useState()
    const [isConnected, setConnected] = useState(false)
    const [web3, setweb3] = useState(null)
    const [address, setAddress] = useState(null)
    const [fbContract, setFbContract] = useState(null)

    useEffect(()=>{
        fetchData()
        Connected()
    
    },[])
    useEffect(()=>{
        if(fbContract)  getFeedbackLength()
    },[fbContract,address])


    const onConnect = async () =>{
        if(typeof window !== "undefined" && window.ethereum !== "undefined"){
            try{
                const account = await window.ethereum.request({method: "eth_requestAccounts"})
                const web = new Web3(window.ethereum)
                setweb3(web)
                const accounts = await web3.eth.getAccount()
                setAddress(accounts[0])
                const fb = feedbackContract(web3)
                setFbContract(fb)
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
        const accounts = await window.ethereum.request({method: 'eth_accounts'}); 
         
        if (accounts.length) {
            setConnected(true)
        } else {
            setConnected(false)
        }   
    }
    const getFeedbackLength = async() =>{
        const length = await fbContract.methods.getFeedbackCount().call()
        setFeedLength(length)
    }


  







    const handleDelete = async(id) =>{
        if(window.confirm("Are you want delete?")){
            await fetch(`http://localhost:5000/feedback/${id}`,{method:'DELETE'})
            let filterFeeback = feedback.filter((item)=> item.id !== id)
            setFeedback(filterFeeback)
        }
    }
    const addFeedback = async (newFeedback) =>{
        console.log(newFeedback)
        const response = await fetch('http://localhost:5000/feedback?_sort=id?_order=desc',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newFeedback)
        })
        let data = await response.json()
        console.log(data)
        setFeedback([data,...feedback])
    }
    const editFeedback = (item) =>{
        setNewFeedback({
            item,
            edit: true,
        }
        )
    }

    const fetchData = async () =>{
        const fetchFeedback = await fetch('http://localhost:5000/feedback?_sort=id?_order=desc')
        let data = await fetchFeedback.json()
        setFeedback(data)
    }
    const updateFeedback = async(id, upItem) =>{
        const response = await fetch(`http://localhost:5000/feedback/${id}`,{
            method: 'PUT',
            headers:{
                'Content-type': 'application/json'
            },
            body: JSON.stringify(upItem)
        })
        let data = await response.json()
        setFeedback(feedback.map((item)=>(item.id === id ? {...item, ...data} : item )))
    }







    return (<feedbackContext.Provider value ={{
        feedback,
        newFeedback,
        handleDelete,
        addFeedback,
        editFeedback,
        updateFeedback,
        onConnect,
        isConnected,
        feedLength
        
    }}>
        {children}
    </feedbackContext.Provider>)
}
export default feedbackContext
