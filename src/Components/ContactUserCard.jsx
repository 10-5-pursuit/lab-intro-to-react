function ContactUserCard({ fullName, job, lorem }) {
  return (
    <>
      <img src="./src/profile.png" alt="User" />
      <h3 className="fullName">{fullName}</h3>
      <h4 className="job">{job}</h4>
      <p className="lorem">{lorem}</p>
    </>
  );
}

export default ContactUserCard;
