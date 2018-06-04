import React, { Component }  from 'react';
import '../App.css';


class BetterDoctor extends Component {
constructor (props) {
  super(props);
  this.state = {
    doctors:[]
  }

this.doctorSearch = this.doctorSearch.bind(this);
}

doctorSearch() {
  const url = 'https://api.betterdoctor.com/2016-03-01/doctors?specialty_uid=family-psychologist&location=ca-berkeley&user_location=40.7128%2C%2074.0060&skip=0&limit=10&user_key=6d011bef8ed81cebe9760f2e5b00bed1'
  fetch(url)
  .then((resp) => resp.json())
  .then(data => {
    this.setState({
      doctors: data
      .then(console.log(this.doctor))
    })
  })
}


render() {
    return (

<div className="container">
</div>


    );

}
}

export default BetterDoctor;
