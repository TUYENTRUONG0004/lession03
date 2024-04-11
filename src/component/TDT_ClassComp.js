import React, { Component } from 'react';

class TDT_ClassComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "Truong",
      lastName: "Tuyen",
      userName: "k22cnt3",
    };
  }

  Member = (props) => {
    return (
      <div className='alert alert-success'>
        <h3>xin chao: {props.fullName} - ban da {props.age} tuoi.</h3>
      </div>
    );
  };

  ListMember = () => {
    return (
      <>
        <this.Member fullName="Truong Dinh Tuyen" age="20" />
        <this.Member fullName="Truong Dinh a" age="22" />
        <this.Member fullName="Truong Dinh b" age="23" />
        <this.Member fullName="Truong Dinh c" age="21" />
      </>
    );
  };

  render() {
    return (
      <div className='alert alert-danger'>
        <h2>Class component Demo</h2>
        <hr />
        <h3>du lieu trong state</h3>
        <h3>xin chao: {this.state.firstName} {this.state.lastName}</h3>
        <hr />
        <h3>du lieu tu props</h3>
        <p>company: {this.props.company}</p>
        <p>course: {this.props.course}</p>
        <hr />
        <this.Member fullName="Truong Dinh Tuyen" age="20" />
        <hr />
        {this.ListMember()}
      </div>
    );
  }
}

export default TDT_ClassComp;