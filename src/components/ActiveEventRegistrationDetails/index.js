// Write your code here
import './index.css'

const ActiveEventRegistrationDetails = props => {
  const initialRegistrationItem = (
    <p className="initial">
      Click on an event, to view its registration details
    </p>
  )
  const yetToRegisterItem = (
    <div className="registration-card">
      <img
        className="registration-img"
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
      />
      <p className="registration-content">
        A live performance brings so much to your relationship with dance.
        Seeing dance live can often make you fall totally in love with this
        beautiful art form.
      </p>
      <button className="registration-btn" type="button">
        Register Here
      </button>
    </div>
  )
  const registeredItem = (
    <div className="registration-card">
      <img
        className="registration-img"
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
      />
      <h1 className="registration-title">
        You have already registered for the event
      </h1>
    </div>
  )
  const registrationClosedItem = (
    <div className="registration-card">
      <img
        className="registration-img"
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
      />
      <h1 className="registration-title">Registrations Are Closed Now!</h1>
      <p className="registration-content">
        Stay tuned. We will reopen the registrations soon!
      </p>
    </div>
  )
  const {registrationStatus} = props
  switch (registrationStatus) {
    case 'INITIAL':
      return initialRegistrationItem
    case 'YET_TO_REGISTER':
      return yetToRegisterItem
    case 'REGISTERED':
      return registeredItem
    case 'REGISTRATIONS_CLOSED':
      return registrationClosedItem
    default:
      return null
  }
}

export default ActiveEventRegistrationDetails
