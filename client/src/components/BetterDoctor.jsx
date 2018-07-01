import React, { Component }  from 'react';
import '../App.css';


class BetterDoctor extends Component {
constructor (props) {
  super(props);
  this.state = {
    doctors: []
  };

}


componentDidMount() {
  fetch('https://api.betterdoctor.com/2016-03-01/doctors?specialty_uid=psychologist&location=37.773%2C-122.413%2C100&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=6d011bef8ed81cebe9760f2e5b00bed1')
  .then(results => {
    return results.json();
  }).then(data => {
    console.log(data);
    let doctors = data.results;
    this.setState({doctors: doctors});
    console.log("state", this.state.doctors)
  })
}


render() {
    return (

<div className="container">
{this.state.pictures}
</div>


    );

}
}

export default BetterDoctor;
