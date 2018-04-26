import React, {Component} from 'react';

class Subscription extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      lastName: '',
      phone: '',
      email: '',
      dateOfBirth: '',
      address: '',
      numberOfPeople: '',
      totalPrice: '',
      comment: ''};

    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeLastName = this.handleChangeLastName.bind(this);
    this.handleChangePhone = this.handleChangePhone.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangeDOB = this.handleChangeDOB.bind(this);
    this.handleChangeAddress = this.handleChangeAddress.bind(this);
    this.handleChangePeople = this.handleChangePeople.bind(this);
    this.handleChangeComment = this.handleChangeComment.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeName(e){
    this.setState({
      name: e.target.value
    })
  }

  handleChangeLastName(e){
    this.setState({
      lastName: e.target.value
    })
  }
  handleChangePhone(e) {
    this.setState({
      phone: e.target.value
    });
  }
  handleChangeEmail(e){
    this.setState({
      email: e.target.value
    })
  }
  handleChangeDOB(e){
    this.setState({
      dateOfBirth: e.target.value
    })
  }
  handleChangeAddress(e) {
    this.setState({
      address: e.target.value
    });
  }
  handleChangePeople(e){
    this.setState({
      numberOfPeople: e.target.value,
      totalPrice: this.state.numberOfPeople * 4900
    })
  }
  handleChangeComment(e) {
    this.setState({
      comment: e.target.value
    });
  }

  handleSubmit(e){
    e.preventDefault();
    const data = {
      name: this.state.name,
      lastName: this.state.lastName,
      phone: this.state.phone,
      email: this.state.email,
      dateOfBirth: this.state.dateOfBirth,
      address: this.state.address,
      numberOfPeople: this.state.numberOfPeople,
      totalPrice: this.state.totalPrice,
      comment: this.state.comment
    };

    let uri = 'http://localhost:8000/subscription';
    axios.post(uri, data).then((response) => {
      // browserHistory.push('/display-item');
    });
  }

  render() {
    return (
      <div className="wrapper">
        <div className="hero_img">
          <div className="container">
            <div className="heading_wrapper">
              <h1 className="heading">přihláška na tábor</h1>
              <p>termín: 11. - 16.9.2018</p>
              <p>místo: Rekreační středisko Naděje</p>
              <p>souřadnice: 49.7245819N, 16.0503658E</p>
              <p>cena za osobu: 4900,- Kč</p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="main_contentWrapper main_contentForm">
            <h2 className="heading2">
              vyplňte prosím svoje údaje
            </h2>
            <form onSubmit={this.handleSubmit} id="subscriptionForm">
              <div className="row">
                <div className="col-md-4">
                  <div className="form-group">
                    <label>jméno</label>
                    <input name="name" type="text" className="form-control" onChange={this.handleChangeName} value={this.state.name}/>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label>příjmení</label>
                    <input name="lastName" type="text" className="form-control" onChange={this.handleChangeLastName} value={this.state.lastName}/>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label>telefon</label>
                    <input name="phone" type="text" className="form-control" onChange={this.handleChangePhone} value={this.state.phone}/>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <div className="form-group">
                    <label>email</label>
                    <input name="email" type="text" className="form-control" onChange={this.handleChangeEmail}/>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label>adresa</label>
                    <input name="address" type="text" className="form-control" onChange={this.handleChangeAddress}/>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label>datum narození</label>
                    <input name="dateOfBirth" type="date" className="form-control" onChange={this.handleChangeDOB}/>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-8">
                  <div className="form-group">
                    <label>komentář/dotaz/zvláštní požadavek</label>
                    <input name="comment" type="text" className="form-control" onChange={this.handleChangeComment} value={this.state.comment}/>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <div className="row">
                    <div className="form-group  col-md-6">
                      <label>počet osob</label>
                      <input name="numberOfPeople" type="text" className="form-control" onChange={this.handleChangePeople}/>
                    </div>
                    <div className="col-md-6">
                  <span className="form-price">
                    x 4900,-
                  </span>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label>celková cena</label>
                    <input name="totalPrice" disabled type="text" className="form-control" onChange={this.handleChangePeople} value={this.state.totalPrice}/>
                  </div>
                </div>
              </div>
              <div>
              </div>
              <br />
              <div className="row">
                <div className="col-md-4">
                  <div className="form-group">
                    <button type="submit" className="btn btn_primary btn_fullWidth">odeslat</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
export default Subscription;