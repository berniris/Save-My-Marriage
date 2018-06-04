import React, { Component }  from 'react';
import Parallax from 'react-springy-parallax';
import '../App.css';
// import Animate from 'react-simple-animate';
import First from './First';
import Second from './Second';
// import Third from './Third';
import Nav from './Nav';

class Home extends Component {
  constructor(props){
  super(props)

}
  render() {

  return (

  <div>
  <Nav/>
  <img src="https://i.imgur.com/D5YIHjg.png" alt="logo" className="logo"></img>
  <div className="left-pane">
    </div>
      <div className="right-pane">
    </div>

  <Parallax ref="parallax" pages={3}>

                <Parallax.Layer offset={0} speed={1}/>
                <Parallax.Layer offset={1} speed={1}/>
                <Parallax.Layer offset={2} speed={1}/>

                <Parallax.Layer
                    offset={0}
                    speed={0.5}
                    onClick={() => this.refs.parallax.scrollTo(1)}>

                <First/>

                </Parallax.Layer>

                <Parallax.Layer
                    offset={1}
                    speed={-0.1}
                    onClick={() => this.refs.parallax.scrollTo(2)}>
                    <div>
                <Second/>
                    </div>
                </Parallax.Layer>

                <Parallax.Layer
                    offset={2}
                    speed={0.5}
                    onClick={() => this.refs.parallax.scrollTo(0)}>

                </Parallax.Layer>

            </Parallax>
</div>

    );
  }
}

export default Home;
