import './UserContactCard.css'

const ContactUserCard = () => {
  return (
    <div className='contactCard'>
      <img className='contactCard-img' src='./src/profile.png'></img>
      <div className='contactCard-user'>
        <h4>Jordan Walke</h4>
        <h5>React Creator</h5>
        <p>lorem ipsem</p>
      </div>
    </div>
  )
}

export default ContactUserCard