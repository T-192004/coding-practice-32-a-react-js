// Write your code here
import './index.css'

const EventItem = props => {
  const {event, clickedEventItem, clickEventItemId} = props
  const {id, imageUrl, name, location, registrationStatus} = event
  const clicked = clickEventItemId === id ? 'clicked' : ''
  const onclickItem = () => {
    clickedEventItem(registrationStatus, id)
  }
  return (
    <li className="event-item-card" onClick={onclickItem}>
      <button className={`event-img-btn ${clicked}`}>
        <img className="event-img" src={imageUrl} alt="event" />
      </button>
      <p className="event-title">{name}</p>
      <p className="event-location">{location}</p>
    </li>
  )
}

export default EventItem
