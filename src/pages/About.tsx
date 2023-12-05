const About = () => {
  return (
    <div className="container mt-5">
      <h2 className="mb-4">About Us</h2>

      <div className="row">
        <div className="col-md-6">
          <img
            src="https://via.placeholder.com/400" // Replace with actual image URL
            alt="About Us Image"
            className="img-fluid rounded"
          />
        </div>
        <div className="col-md-6">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
            risus eu augue hendrerit, a hendrerit ex scelerisque. Vestibulum
            volutpat consectetur nunc, vel dignissim odio vestibulum id.
          </p>
          <p>
            Phasellus vehicula leo nec justo aliquam, eu convallis velit
            elementum. Suspendisse potenti. Integer et elit sed quam ultrices
            congue. Duis id ante vel tortor consectetur tincidunt.
          </p>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-md-6 order-md-2">
          <img
            src="https://via.placeholder.com/400" // Replace with actual image URL
            alt="About Us Image"
            className="img-fluid rounded"
          />
        </div>
        <div className="col-md-6 order-md-1">
          <p>
            Fusce quis libero eget neque commodo tristique nec et risus. Proin
            ac convallis metus. Suspendisse potenti. Aenean fermentum velit id
            odio lobortis, sit amet tincidunt justo bibendum.
          </p>
          <p>
            Duis malesuada est nec odio fermentum, sit amet facilisis velit
            venenatis. Vivamus ac lacus justo. Nullam at dolor vel risus
            tristique bibendum vel eget ligula.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
