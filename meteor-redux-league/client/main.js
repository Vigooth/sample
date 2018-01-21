import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import { render } from 'react-dom';
import App from '../src/index'


Meteor.startup(() => {
  render(<App />, document.getElementById('render-target'));
});