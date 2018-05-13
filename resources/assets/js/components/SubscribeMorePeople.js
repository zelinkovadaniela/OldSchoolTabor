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
      <div className="row defult-hidden">
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
            <label>datum narození</label>
            <input name="dateOfBirth" type="date" className="form-control" onChange={this.handleChangeDOB}/>
          </div>
        </div>
      </div>
    )
  }
}
export default Subscription;