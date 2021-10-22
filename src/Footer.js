export default function Footer() {
  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">Illustrations</h6>
        </div>
        <div className="card-body">
          <div className="text-center">
            <img
              className="img-fluid px-3 px-sm-4 mt-3 mb-4"
              src="https://i.pinimg.com/originals/80/a7/2b/80a72b7c3fd64307630ea93f895ca394.jpg"
              alt="..."
            />
          </div>
          <p>
            Add some quality, svg illustrations to your project courtesy of
            unDraw, a constantly updated collection of beautiful svg images that
            you can use completely free and without attribution!
          </p>
        </div>
      </div>

      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">
            Development Approach
          </h6>
        </div>
        <div className="card-body">
          <p>
            SB Admin 2 makes extensive use of Bootstrap 4 utility classes in
            order to reduce CSS bloat and poor page performance. Custom CSS
            classes are used to create custom components and custom utility
            classes.
            <br /> <br />
            Before working with this theme, you should become familiar with the
            Bootstrap framework, especially the utility classes.
          </p>
        </div>
      </div>
    </div>
  );
}
