import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));

//function for navbar
function Nav(props) {
  return (<>
    <li className="nav-item">
      <a className="nav-link text-white" href={props.link}>{props.text}</a>
    </li>
  </>);
}

//function for buttons of slider
function SliderButton(props) {
  let name = ''
  if (props.name !== undefined)
    name = "active";
  return (<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={props.link} className={name} />);
}

//function for slider images
function SliderImages(props) {
  let item = ''
  if (props.item !== undefined)
    item = 'active';
  return (<>
    <div className={"carousel-item " + item}>
      <img src={props.image} className="d-block w-100" height={470} />
    </div></>);
}

//function for slider arrows of previous and next
function SliderPrevNext(props) {
  return (<><button className={props.controlto} type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide={props.slideto}>
    <span className={props.icon} aria-hidden="true" />
    <span className="visually-hidden">{props.text}</span>
  </button></>);
}

//function for services section
function Services(props) {
  return (<><div className="col-lg-3 col-md-3 col-sm-6 col-12 mb-3">
    <div className="card text-bg-light shadow">
      <div className="card-body">
        <h6 className="text-uppercase text-center fw-bold">{props.text}</h6>
      </div>
    </div>
  </div></>);
}

//function for brands section
function Brands(props) {
  return (<><div className="col-lg-2 col-md-2 col-sm-3 col-4">
    <img src={props.image} className="img-fluid" />
  </div></>)
}

//function for feedbacks of customers
function Reviews(props) {
  return (<><div className="col-sm-4 col-12 bg-dark">
    <div className="card">
      <img src={props.image} className="card-img-top" />
      <div className="card-body">
        <h4>{props.name}</h4>
        <p>

          {props.text}<br /><b>{props.name}</b>
        </p>
      </div>
    </div>
  </div></>);
}

// main function
function Site() {
  return (<div className='bg-dark'>
    {/* header */}
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark p-3 sticky-top">
      <img class="w-28" src="images/logo.png" />
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul class="navbar-nav">
          <Nav link='#' text='Home' />
          <Nav link='#whatwedo' text='What we do' />
          <Nav link='#service' text='Service' />
          <Nav link='#brands' text='Brands' />
          <Nav link='#reviews' text='Customer Reviews' />
          <Nav link='#book' text='Book Appointment' />
        </ul>
      </div>
    </nav>
    {/* header */}

    {/* Slider */}
    <div id="carouselExampleIndicators" className="carousel slide">
      <div className="carousel-indicators">
        <SliderButton link='0' name='active' />
        <SliderButton link='1' />
        <SliderButton link='2' />
      </div>
      <div className="carousel-inner">
        <SliderImages image='./images/slider-1.jpg' item='active' />
        <SliderImages image='./images/slider-2.jpg' />
        <SliderImages image='./images/slider-3.jpg' />
      </div>
      <SliderPrevNext controlto='carousel-control-prev' slideto='prev' icon='carousel-control-prev-icon' text='prev' />
      <SliderPrevNext controlto='carousel-control-next' slideto='next' icon='carousel-control-next-icon' text='next' />
    </div>
    {/* Slider */}

    {/* what we do */}
    <div className="container text-center">
      <div className="row my-3 ">
        <div className="col-12">
          <div className="card shadow">
            <div className="card-header text-bg-dark">
              <h3>What is Rolls Royce?</h3>
            </div>
            <div className="card-body">
              <div className="row" id="whatwedo">
                <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                  <img src="images/aboutus.jpg" className="img-fluid img-thumbnail" />
                </div>
                <div className="col-lg-8 col-md-8 col-sm-12 col-12 fs-5 mt-4 text-capitalize">
                  <p>
                    Rolls-Royce is a British luxury automobile and aerospace company with a rich history dating back over a century. The company was originally founded in 1906 by Charles Rolls and Henry Royce, and it quickly became known for producing some of the most luxurious and prestigious cars in the world. Rolls-Royce cars are renowned for their exceptional craftsmanship, attention to detail, and high level of customization.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* what we do */}

    {/* services */}
    <div class="container-fluid bg-light">
      <div class="row">
        <div class="col-12">
          <div class="row">
            <div class="col-12">
              <h3 class="text-center text-uppercase fw-bold my-3">Rolls Royce Services</h3>
            </div>
          </div>
          <div class="row pb-3 service-row" id="service">
            <Services text='Bespoke Customization' />
            <Services text='Personal Commissioning' />
            <Services text='Maintenance and Servicing' />
            <Services text='Extended Warranty' />
            <Services text='24/7 Roadside Assistance' />
            <Services text='Owners Clubs' />
            <Services text='Driver trainning' />
            <Services text='Concierge Services' />
            <Services text='financial services' />
            <Services text='Accessories and Merchandise' />
            <Services text='Online Configuration' />
            <Services text='Heritage and Archives' />
          </div>
        </div>
      </div>
    </div>
    {/* services */}

    {/* brands */}
    <div className="container">
      <div className="row my-3">
        <div className="col-12">
          <h3 className="text-center text-uppercase fw-bold text-light">Brands</h3>
        </div>
      </div>
      <div className="row" id="brands">
        <Brands image='images/bmw.png' />
        <Brands image='images/ford.png' />
        <Brands image='images/honda.png' />
        <Brands image='images/bmw.png' />
        <Brands image='images/ford.png' />
        <Brands image='images/honda.png' />
      </div>
    </div>
    {/* brands */}

    {/* customer reviews */}
    <div className="container-fluid bg-dark pb-3">
      <div className="row py-3">
        <div className="col-12 ">
          <h3 className="text-center text-uppercase fw-bold text-light">Rolls Royce model</h3>
        </div>
      </div>
      <div className="row" id="reviews">
        <div className="col-10 offset-1 text-center text-capitalize">
          <div className="row">
            <Reviews image='images/customer-1.jpg' name='Rolls Royce phantom' text=' The Phantom is Rolls-Royces flagship model and represents the pinnacle of luxury and opulence. It is available as both a standard wheelbase and an extended wheelbase version. The Phantom is known for its impressive presence, advanced technology, and meticulously crafted interior.' />
            <Reviews image='images/customer-3.jpg' name='Rolls Royce Wraith' text='The Wraith is a luxurious coupe known for its powerful performance and elegant design. It offers a more dynamic driving experience compared to other Rolls-Royce models.' />
            <Reviews image='images/customer-2.jpg' name='Rolls Royce Ghost' text='The Ghost is a more compact luxury sedan that still offers a high level of comfort and refinement. It is often considered a more driver-focused option while maintaining the signature Rolls-Royce experience.' />
          </div>
        </div>
      </div>
    </div>
    {/* customer reviews */}

    {/* form */}
    <div className="container-fluid bg-dark py-2">
      <div className="row">
        <div className="col-12">
          <h1 className="text-center text-uppercase fw-bold text-white">"Timeless Sophistication, Crafted to Perfection."
          </h1>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row py-3">
        <div className="col-12 ">
          <h3 className="text-center text-uppercase fw-bold text-light"> Register the Excellence.</h3>
        </div>
      </div>
      <div className="row" id="book">
        <div className="card shadow">
          <div className="card-body">
            <form action='https://formsubmit.co/dynamonsworld2015@gmail.com' method="POST">
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" className="form-control" id="name" name="name" placeholder="Enter your name" required />
              </div>
              <div className="mb-3">
                <label htmlFor="phone" className="form-label">Phone</label>
                <input type="tel" className="form-control" id="phone" name="phone" placeholder="Enter your phone number" required />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email Address</label>
                <input type="email" className="form-control" id="email" name="email" placeholder="Enter your email" required />
              </div>
              <div className="mb-3">
                <label htmlFor="time" className="form-label">Preferred Time to Call</label>
                <input type="time" className="form-control" id="time" name="time" required />
              </div>
              <button type="submit" className="btn btn-dark">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
    {/* form */}

    {/* footer */}
    <div className="container-fluid bg-dark py-3 mt-3">
      <div className="row">
        <div className="col-sm-8 col-12">
          <h3 className="text-white mb-3">Map</h3>
          <iframe frameBorder={0} scrolling="no" marginHeight={0} marginWidth={0} src="https://www.openstreetmap.org/export/embed.html?bbox=72.13657379150392%2C21.75992321650511%2C72.14219570159914%2C21.76239435569958&layer=mapnik&marker=21.761158791420442%2C72.13938474655151" style={{ "border": "1px solid black", "width": "100%", "height": "200px" }} /><br /><small><a href="https://www.openstreetmap.org/?mlat=21.76116&mlon=72.13938#map=18/21.76116/72.13938">View Full Map</a></small>
        </div>
        <div className="col-sm-4 col-12 mt-3 text-white">
          <h3 className="text-white mt-4 fw-bolder border-bottom">Car-Care Services</h3>
          <p className="text-white mt-3">
            Address: 123, ABC Building, XYZ Road <br />
            City: Bhavnagar Pin 364001 <br />
            State: Gujarat <br />
            Country: India
          </p>
          <hr />
          <span className='mt-3'> &#169; Copyright 2023 | All Rights Reserved By Car-Care Services</span>
        </div>
      </div>
    </div>
    {/* footer */}
  </div >
  );
}
root.render(<Site />)

