import React, { Component } from 'react';
import "styled-components/macro";

const fruits = [
  'Apple',
  'Banana',
  'Cherry',
  'Grape',
  'Kiwi',
  'Lemon',
  'Pear',
  'Pineapple',
]
const stagger = 100;

class Item extends Component {
  render() {
    return (
      <div css={`
        width: 252px;
        padding: 24px;
        color: #1c1c1c;
        background: #aaaaaa;
        border-bottom: 1px solid #939393;
        transform: ${this.props.isVisible ? 'translateX(100%)' : 'translate(0)'};
        transition: transform 0.5s ${stagger * this.props.index}ms ease-in-out;
      `}>
        {this.props.name}
      </div>
    );
  }
}

export default class App extends Component {
  state = {
    isVisible: false,
  }
  render() {

    return (
      <div css={`
        width: 300px;
        overflow: hidden;
        background-color: #5e5c5c;
      `}>

        <button
          onClick={this.toggle}
          css={`
            width: 300px;
            padding: 10px;
            border: none;
            cursor: pointer;
            border-radius: 0;
            font-weight: bold;
            &::-moz-focus-inner {
              border: 0;
            }
            &:hover {
              background-color: #cccccc;
            }
            &:active {
              background-color: #eae9e9;
            }
          `}
        >
          TOGGLE
        </button>

        {fruits.map((fruit, index) => {
          return (
            <Item
              key={index}
              isVisible={this.state.isVisible}
              index={index}
              name={fruit}
            />
          )
        })}

      </div>
    );
  }
  toggle = () => {
    this.setState({ isVisible: !this.state.isVisible })
  }
}

