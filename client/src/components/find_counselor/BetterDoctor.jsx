import React, { Component }  from 'react';
import Doctor from './Doctor';
import Geocode from 'react-geocode';
import '../../App.css';


class BetterDoctor extends Component {
constructor (props) {
  super(props);
  this.state = {
    body: "",
    doctors: [],
    lat: '',
    lng: '',
    baseurl: 'https://api.betterdoctor.com/2016-03-01/doctors?'
  }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.getAddress = this.getAddress.bind(this)
}

handleSubmit(e) {
  e.preventDefault();
  this.getAddress();
}

handleChange(e) {
  e.preventDefault() 
  this.setState({
  [e.target.name]: e.target.value
  })
}

setKey () {
Geocode.setApiKey('AIzaSyCahbTylmYY7urc_nF7MhdBE2Q9CboNNsg');
}

enableLogs() {
Geocode.enableDebug();
}

getAddress() {
Geocode.fromAddress(this.state.body)
.then(response => {
    const { lat, lng } = response.results[0].geometry.location;
    console.log(lat, lng)
    this.setState({
    lat: lat,
    lng: lng
  })
  },
  error => {
    console.error(error);
  },
)
this.getDoctorData()
}


getDoctorData () {
  let url = new URL("https://api.betterdoctor.com/2016-03-01/doctors?"),
  params = `specialty_uid=psychologist&location=${this.state.lat},${this.state.lng},10&skip=2&limit=10&user_key=6d011bef8ed81cebe9760f2e5b00bed1`
  console.log(`${url}${params}`)
  fetch(`${url}${params}`)
  .then(response => {
    return response.json();
  }).then(data => {
    this.setState({
      doctors: data.data
    });
    console.log("doctors", this.state.doctors)
  })
  .catch(err => console.log(err))
}

componentDidMount() {
  this.getAddress();

  //remember to clear cookies from the Application tab to reset access to API 
}


render() {
  console.log(this.state.lat + "," + this.state.lng)
  const doctors = this.state.doctors.map(doctor => {
    return (
      <Doctor 
       key={doctor.id}
       firstName={doctor.profile.first_name}
       lastName={doctor.profile.last_name}
       title={doctor.profile.title}
       img={doctor.profile.image_url}
     />
      )
  })
    return (


    <div className="container">
    <div style={{backgroundImage: `url(https://images.unsplash.com/photo-1455824048252-3571df13b276?ixlib=rb-0.3.5&s=931758a7caa9e4aefb7990f31e776b85&auto=format&fit=crop&w=1192&q=80)`}} className="splash-header" >
    </div>
    <div className="flex">
    <div className="infobox-1">
    <p>Would you like to speak to someone in person? Please enter your zipcode to see available counselors in your area</p>
        <form onSubmit={this.handleSubmit}>
        <div className="doctor-search-form">
          <label htmlFor="doctor-search">Enter your city and state:</label>
            <input
                    value={this.state.body}
                    type="text"
                    name="body"
                    onChange={this.handleChange} />
          </div>
            <button type="submit" value="submit">Search</button>
        </form>
    </div>
    <div className="counselor">{doctors}</div>
    </div>
    </div>


    );

}
}

export default BetterDoctor;
