---
title: vue转react的踩坑和不同 (2019-10-10)
date: '2019-10-10 19:32:00'
type: weekly
tag:
meta:
  -
    name: description
    content: cobainby
  -
    name: keywords
    content: cobainby
author: cobainby
poster: /images/weekly-4.jpeg
---

# vue转react的点

### 记录本人从vue转react过程中学习或踩的坑。

## 一、对于this

1.jsx回调函数中的this，class的方法不会默认绑定this。最好在构造函数里提前绑定一次

如：

```javascript
class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // 为了在回调中使用 `this`，这个绑定是必不可少的
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}

ReactDOM.render(
  <Toggle />,
  document.getElementById('root')
);
```

2.也可以使用箭头函数,此语法问题在于每次渲染 LoggingButton 时都会创建不同的回调函数。在大多数情况下，这没什么问题，但如果该回调函数作为 prop 传入子组件时，这些组件可能会进行额外的重新渲染。所以这种方法不是很好。

```javascript
class LoggingButton extends React.Component {
  handleClick() {
    console.log('this is:', this);
  }

  render() {
    // 此语法确保 `handleClick` 内的 `this` 已被绑定。
    return (
      <button onClick={(e) => this.handleClick(e)}>
        Click me
      </button>
    );
  }
}

```

## 二、阻止默认行为

不能使用return false来阻止默认行为，必须显式的使用preventDefault,例如阻止链接弹出新页面：

```javascript
function ActionLink() {
  function handleClick(e) {
    e.preventDefault();
    console.log('The link was clicked.');
  }

  return (
    <a href="#" onClick={handleClick}>
      Click me
    </a>
  );
}
```

## 三、state和props的确定

个人理解：

该数据不是由父组件传递，并且不是由计算得到。会随机变化的值。

例如 输入框，复选框这种值

## 四、写法的适应

之前写vue写惯了。vue是类html的用法，页面的html和js。css分割开。

react是jsx，react是js里写html。css/

相当于js做一切。自由度比vue高一点。

### 暂时感想待续



