"use strict";

import React from "react";
import "./index.scss";
import { Tree, Icon } from "antd";

const { TreeNode } = Tree;
// import { Treebeard } from "react-treebeard";

const data = {
  name: "",
  toggled: true,
  children: [
    {
      name: "Built Skills with Skills kit.",
      children: [{ name: "child1" }, { name: "child2" }]
    },
    {
      name: "Quick Reference",
      loading: true,
      children: []
    },
    {
      name: "Tools and Create and manage skills",
      children: [
        {
          name: "nested parent",
          children: [{ name: "nested child 1" }, { name: "nested child 2" }]
        }
      ]
    }
  ]
};

export default class TreeExample extends React.Component {
  onSelect = (selectedKeys, info) => {
    console.log("selected", selectedKeys, info);
  };
  render() {
    return (
      <div className="nav-tree">
        <Tree showIcon showLine defaultExpandedKeys={["0-0-0", "1-0-0"]} defaultExpandAll={true} onSelect={this.onSelect}>
          <TreeNode title="Built Skills with Skills kit." key="0-0">
            <TreeNode title="parent 1-0" key="0-0-0">
              <TreeNode switcherIcon={<Icon type="small-dash" />} title="leaf" key="0-0-0-0" />
              <TreeNode switcherIcon={<Icon type="small-dash" />} title="leaf" key="0-0-0-1" />
              <TreeNode switcherIcon={<Icon type="small-dash" />} title="leaf" key="0-0-0-2" />
            </TreeNode>
            <TreeNode title="parent 1-1" key="0-0-1">
              <TreeNode switcherIcon={<Icon type="small-dash" />} title="leaf" key="0-0-1-0" />
            </TreeNode>
          </TreeNode>
          <TreeNode title="Quick Reference" key="1-0">
            <TreeNode title="parent 1-0" key="1-0-0">
              <TreeNode switcherIcon={<Icon type="small-dash" />} title="leaf" key="1-0-0-0" />
              <TreeNode switcherIcon={<Icon type="small-dash" />} title="leaf" key="1-0-0-1" />
              <TreeNode switcherIcon={<Icon type="small-dash" />} title="leaf" key="1-0-0-2" />
            </TreeNode>
            <TreeNode title="parent 1-1" key="1-0-1">
              <TreeNode switcherIcon={<Icon type="small-dash" />} title="leaf" key="1-0-1-0" />
            </TreeNode>
          </TreeNode>
          <TreeNode title="Tools and create and manage skills" key="2-0">
            <TreeNode title="parent 1-0" key="2-0-0">
              <TreeNode switcherIcon={<Icon type="small-dash" />} title="leaf" key="2-0-0-0" />
              <TreeNode switcherIcon={<Icon type="small-dash" />} title="leaf" key="2-0-0-1" />
              <TreeNode switcherIcon={<Icon type="small-dash" />} title="leaf" key="2-0-0-2" />
            </TreeNode>
            <TreeNode title="parent 1-1" key="2-0-1">
              <TreeNode switcherIcon={<Icon type="small-dash" />} title="leaf" key="2-0-1-0" />
            </TreeNode>
          </TreeNode>
          <TreeNode title="Build Skills with alexa Skills kit." key="3-0">
            <TreeNode title="parent 1-0" key="3-0-0">
              <TreeNode switcherIcon={<Icon type="small-dash" />} title="leaf" key="3-0-0-0" />
              <TreeNode switcherIcon={<Icon type="small-dash" />} title="leaf" key="3-0-0-1" />
              <TreeNode switcherIcon={<Icon type="small-dash" />} title="leaf" key="3-0-0-2" />
            </TreeNode>
            <TreeNode title="parent 1-1" key="3-0-1">
              <TreeNode switcherIcon={<Icon type="small-dash" />} title="leaf" key="3-0-1-0" />
            </TreeNode>
          </TreeNode>
        </Tree>
       </div>
    );
  }
}
