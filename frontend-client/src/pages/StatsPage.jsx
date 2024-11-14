const StatsPage = (props) => {
  const { totalPost, mostLiked, leastLiked } = props;

  return (
    <div>
      <h2>Total number of post today: {totalPost}</h2>
      {mostLiked.length > 0 ? (
        <div>
          <h2>Most liked posts:</h2>
          {mostLiked.map((post, index) => {
            return <p key={index}>Details</p>;
          })}
        </div>
      ) : (
        <p>No post found!</p>
      )}
      {leastLiked.length > 0 ? (
        <div>
          <h2>Least liked posts:</h2>
          {leastLiked.map((post, index) => {
            return <p key={index}>Details</p>;
          })}
        </div>
      ) : (
        <p>No post found!</p>
      )}
    </div>
  );
};

export default StatsPage;
