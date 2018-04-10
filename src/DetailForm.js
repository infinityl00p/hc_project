import React, { Component } from 'react';

export default class DetailForm extends Component {
  render() {
    return (
      <form className='text-center'>
        <input placeholder="First Name" required />
        <br />
        <input placeholder="Last Name" required />
        <br />
        <select placeholder="Position" default='Position'>
          <option>Position</option>
          <option>Left Wing</option>
          <option>Right Wing</option>
          <option>Center</option>
          <option>Defense</option>
          <option>Goalie</option>
        </select>
        <br />
        <a type='submit' className='btn-ghost' href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'>Sign Me Up Coach!</a>
      </form>
    );
  }
}