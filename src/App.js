import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import myImage from './img1.png';


class App extends Component {

constructor(props) {
  super(props);

  this.state = {
    fullName: "KOUASSI",
    Bio : " Very Good",
    imgSrc : myImage,
    Profession : "Webdesigner",
    show : false
  }

  this.toggleShow = this.toggleShow.bind(this);
} 


  toggleShow () {

    const {show} = this.state;
    if (show){
      this.setState ({show:false})

    }else {
      this.setState ({show:true})
    }

  }

  render() {
    const {fullName, Bio, imgSrc, Profession} = this.state;
    return (
      <div>

<div class="d-grid gap-2 col-6 mx-auto">
  <button class="btn btn-primary" type="button" onClick={this.toggleShow}>Show profile</button>
{this.state.show ? (<div className="card" style={{width: '18rem'}}>
  <img src= {imgSrc} className="card-img-top" />
    <div className="card-body">
        <h5 className="card-title"><b>FULL NAME: </b>{fullName}</h5>
        <h5 className="card-title"><b>BIO: </b>{Bio}</h5>
        <h5 className="card-title"><b>PROFESSION: </b>{Profession}</h5>
       
    </div>
</div>) : null}
</div>

</div>
    );
  }
}

export default App;

