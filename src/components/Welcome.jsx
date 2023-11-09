import HomepageProfile from "../molekul/Homepage-profile";
import WelcomeMessage from "../molekul/Welcome-msg";
function Wellcome() {
  return (
    <div className="welcome-wrapper">
      <HomepageProfile />
      <WelcomeMessage className="welcome-message" />
    </div>
  )
}

export default Wellcome;