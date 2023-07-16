const Person = ({ name, date, imagePath }) => {
  return (
    <>
      <div className="d-flex align-items-start border-bottom mx-3 mb-4">
        <img className="image-avatar" alt="man" src={imagePath} />
        <div className="px-2">
          <p className="d-inline fs-5">{name}</p>
          <p className="fs-6">{date}</p>
        </div>
      </div>
    </>
  );
};

export default Person;