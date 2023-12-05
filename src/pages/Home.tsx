const Home = () => {
  return (
    <div>
      {/* Big Image Placeholder */}
      <div
        style={{
          backgroundImage:
            "url('https://i1.wp.com/heritagehillsgermanshepherds.com/wp-content/uploads/2017/11/Legacy-Headshot-2-1.jpg')", // Replace with your image URL
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "500px", // Adjust the height as needed
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
        }}
      >
        {/* Text Holder */}
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
        </div>

        {/* Button */}
        <div
          style={{
            position: "absolute",
            top: "43%",
            right: "458px", // Adjust the distance from the right side
            transform: "translateY(-50%)",
            textAlign: "left",
            color: "#fff",
          }}
        >
          <button className="btn btn-secondary">ADOPT</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
