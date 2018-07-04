import React, { Component }  from 'react';
import Doctor from './Doctor';
import '../App.css';


class BetterDoctor extends Component {
constructor (props) {
  super(props);
  this.state = {
    doctors: []
  };

}

getDoctorData () {
  fetch('https://api.betterdoctor.com/2016-03-01/doctors?specialty_uid=psychologist&location=37.773%2C-122.413%2C100&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=6d011bef8ed81cebe9760f2e5b00bed1')
  .then(response => {
    return response.json();
  }).then(data => {
    this.setState({doctors: data.data});
    console.log("state", this.state.doctors)
  })
}


componentDidMount() {
  this.getDoctorData();
}


render() {
console.log(this.state.doctors)
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
    <div className="infobox-1">Would you like to speak to someone in person? Please enter your zipcode to see available counselors in your area.</div>
    <div className="infobox-2">{doctors}</div>
    </div>
    </div>


    );

}
}

export default BetterDoctor;
