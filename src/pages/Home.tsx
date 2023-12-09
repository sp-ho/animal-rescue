import backgroundImage from "../images/german-shepherd-dog.jpg";

const Home = () => {
  return (
    <div>
      {/* Big Image */}
      <div
        style={{
          backgroundImage: `url(${backgroundImage})`, // image
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "900px", // adjust the height as needed
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          textAlign: "center",
        }}
      >
        {/* Text and Button */}
        <div
          style={{
            position: "absolute",
            top: "30%",
            right: "200px", // Adjust the distance from the right side
            transform: "translateY(-50%)",
            textAlign: "left",
            maxWidth: "60%",
            color: "#fff",
            wordWrap: "break-word",
          }}
        >
          <h1>Three of Us For</h1>
          <h1>German Shepherds</h1>
          <h1>Foundation</h1>
          <button className="btn btn-secondary">ADOPT</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
