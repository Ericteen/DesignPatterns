# Design Patterns in JavaScript

### Intro
关于 JavaScript 设计模式的总结。

### Category

#### 设计模式的分类
1. **结构设计模式**
结构模式关注于对象组成和通常识别的方式实现不同对象之间的关系。该模式有助于在系统的某一部分发生改变的时候，整个系统结构不需要改变。该模式同样有助于对系统中某部分没有达到某一目的的部分进行重组。
在该分类下的模式有：*装饰者模式*，*外观模式*，*享元模式*，*适配器模式*和*代理模式*。

2. **行为设计模式**
行为模式关注改善或精简在系统中不同对象间通信。
行为模式包括：*迭代模式*，*中介者模式*，*观察者模式*和*访问者模式*。

#### 设计原则和编程技巧
1. **单一职责原则（SRP）**
体现为：  一个对象（方法）只做一件事情。运用于*代理模式*、*迭代器模式*、*装饰这模式*和*单例模式*。

2. **最少知识原则（LKP）**
体现为： 一个软件实体应当尽可能少的与其它实体发生相互作用。 见于*中介者模式*和*外观模式*。

3. **开放封闭原则（OCP）**
体现为： 软件实体（类、模块、函数）等应该是可以扩展的，但是不可修改。

4. **面向接口（Interface）**
接口是对象能响应的请求的集合。

### Lisense
[MIT](https://opensource.org/licenses/MIT)

Copyright (c) 2017-present, Eric Cheng