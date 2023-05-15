import { useContext } from "react"
import feedbackContext from "../FeedbackContext"
function Header() {
  const {onConnect, isConnected} = useContext(feedbackContext)
  return (
    <header className="header">
      <div className="header-text">Feedback UI</div>
      <div className="help-btn">
        {!isConnected && (
          <button className="btn" onClick={ onConnect }>Connect Wallet</button>
        )}
        {isConnected && (
          <span>You are connected to MetaMask</span>
        )}

      </div>
    </header>
  )
}

export default Header