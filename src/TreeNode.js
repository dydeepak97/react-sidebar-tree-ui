import React, { Component } from 'react';

export default class TreeNode extends Component {
  constructor(props) {
    super(props);

    this.state = {
      expanded: false
    }

    this.handleNodeClick = this.handleNodeClick.bind(this);
  }

  handleNodeClick(event) {
    event.stopPropagation();
    if (this.props.node.type === 'folder') {
      this.setState({ expanded: !this.state.expanded });
    }
  }

  renderChildrenNodes(children) {
    return children.map((child) => {
      return <TreeNode node={child} />
    });
  }

  render() {
    return (
      <div className='tree-node' onClick={this.handleNodeClick}>
        <div className='tree-main-container'>
          <div className='tree-main'>
            <span className='tree-icon'>
              {this.props.node.type === 'folder' ?
                this.state.expanded ? 'v' : '>' :
                '-'
              }
            </span>
            {this.props.node.name}
          </div>
        </div>

        {
          this.state.expanded &&
          this.props.node.type === 'folder' &&

          <div className='tree-children' >
            {!!this.props.node.children.length &&
              <div className='tree-children-list'>
                {this.renderChildrenNodes(this.props.node.children)}
              </div>
            }

            {
              !this.props.node.children.length &&
              <div className='tree-message-empty'>Folder is empty</div>
            }
          </div>

        }
      </div>
    )
  }
}
