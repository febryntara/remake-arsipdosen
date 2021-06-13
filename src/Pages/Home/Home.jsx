//import library
import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

//import component
import FormComp from "../Global-Component/FormComp";
import DataWebsite from "../DataWebsite/DataWebsite";

//import css
import "./Home.css";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      websites: [],
      profile: "",
      nim: "",
      url: "",
      id: "",
      status: true
    }
  }
  resetState = () => {
    this.setState({
      id : '',
      profile : '',
      nim : '',
      url : ''
    })
  }
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
  handleSubmit = (event) => {
    event.preventDefault();
    if(this.state.id===''){
      this.setState({
        websites : [
          ...this.state.websites, {
            id : this.state.websites.length+1,
            profile : this.state.profile,
            nim : this.state.nim,
            url : this.state.url
          }
        ]
      })
    } else {
      const unSelected = this.state.websites.filter((website)=> website.id !== this.state.id).map((website)=> {return website});
      this.setState({
        websites : [
          ...unSelected, {
            id : this.state.id,
            profile : this.state.profile,
            nim : this.state.nim,
            url : this.state.url
          }
        ]
      })
    }
    this.resetState();
    this.statusAbs();
  }
  statusCheck = (id) => {
    this.setState({
      status : !this.state.status
    })
    this.editData(id);
  }
  statusAbs = () => {
    this.setState({
      status : true
    })
    this.resetState();
  }
  editData = (id) => {
    const selected = this.state.websites.filter((website)=> website.id === id).map((website)=> {return website});
    this.setState({
      id : selected[0].id,
      profile : selected[0].profile,
      nim : selected[0].nim,
      url : selected[0].url
    })
  }
  deleteData = (id) => {
    const selected = this.state.websites.filter((website)=> website.id !== id).map((website)=> {return website});
    this.setState({
      websites : [...selected]
    })
  }
  render() {
    console.log(this.state.status);
    return (
      <>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact>
              <FormComp {...this.state} handleChange={this.handleChange} handleSubmit={this.handleSubmit} statusAbs={this.statusAbs}/>
            </Route>
            <Route path="/data-website">
              <DataWebsite websites={this.state.websites} status={this.statusCheck} editData={this.editData} deleteData={this.deleteData}/>
            </Route>
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}
