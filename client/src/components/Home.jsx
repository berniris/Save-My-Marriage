import React from 'react';
import '../App.css';

function Home(props) {

  return (

  <div>
    <div className="container">
    <div style={{backgroundImage: `url(https://images.unsplash.com/photo-1525662665495-915530b703a9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4d44e2f01c46a533a85935f77e8b120d&auto=format&fit=crop&w=1050&q=80)`}} className="splash-header" >
    </div>
    <div className="infobox-1 splash-flex" ></div>
    </div>
    <img className="couple" src="https://img00.deviantart.net/d4cb/i/2016/202/9/4/couple_png_by_valeemcyrus-daavl4b.png"></img>
   <div className="testimonial"><h1>"We were undoubtedly on the path to divorce. Constant fighting and nothing seemed to be getting better. I decided to give Save 
   		My Marriage a try and we began to repair our relationship. We owe everything to this app"</h1></div>
</div>

    );
  }


export default Home;
