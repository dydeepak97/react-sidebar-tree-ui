import React, { Component } from 'react';
import TreeNode from './TreeNode';
import { fileData } from './data';
import './sidebar.css';

export default class SideBar extends Component {
  getNodes() {
    return fileData.map((node) => {
      return <TreeNode node={node} />
    });
  }

  render() {
    return (
      <div className='sidebar'>
        <div className="tree-container">
          {this.getNodes()}
        </div>
      </div>
    )
  }
}
