const WorkContent = ({ img, name, category }) => {
  return (
    <div className="work-content">
      <img src={img} alt={name} />
      <h2>{name}</h2>
      <p>{category}</p>
    </div>
  );
};

export default WorkContent;
