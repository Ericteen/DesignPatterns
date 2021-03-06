# Design Patterns in JavaScript

![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)
![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)

关于 JavaScript 设计模式的总结。

## 设计模式的分类

### 结构型设计模式

> 结构模式关注于对象组成和通常识别的方式实现不同对象之间的关系。该模式有助于在系统的某一部分发生改变的时候，整个系统结构不需要改变。该模式同样有助于对系统中某部分没有达到某一目的的部分进行重组。

- **装饰者模式(Decorator)**: 对对象已存在的特定方法进行动态增加或覆盖。
- **外观模式(Facade)**: 对大块的代码提供一个简洁的接口(Interface)。
- **享元模式(Flyweight)**: 减少操作大量相似对象时的开销。
- **适配器模式(Adaptor)**: 封装已有类来使不兼容的类来共同工作。
- **代理模式(Proxy)**: 提供给另一个对象占位符以此来控制存取，减少开销，降低复杂度。

### 行为设计模式

> 行为模式关注改善或精简在系统中不同对象间通信。

- **迭代模式**
- **中介者模式**: 在不同类之间建立简单的通信。
- **观察者模式**: 一种用于通知多个类变化，并以此来保证类之间一致性的方式。
- **访问者模式**: 在不改变类的前提下为类添加功能。

### 创建型设计模式

> 创建型设计模式旨在为你创建对象，而非直接实例化对象。这将对特定情境下的对象创建增加灵活性。

- **单例模式(Singleton)**: 确保一个类只有唯一的实例。
- **抽象工厂模式(Abstract Factory)**: 提供一个创建含相似内容对象的接口。
- **原型模式(Prototype)**: 用于拷贝或克隆的初始化实例。

## 设计原则和编程技巧

- **单一职责原则（SRP）**

体现为：一个对象（方法）只做一件事情。运用于*代理模式*、*迭代器模式*、*装饰这模式*和*单例模式*。

- **最少知识原则（LKP）**

体现为： 一个软件实体应当尽可能少的与其它实体发生相互作用。 见于*中介者模式*和*外观模式*。

- **开放封闭原则（OCP）**

体现为： 软件实体（类、模块、函数）等应该是可以扩展的，但是不可修改。

- **面向接口（Interface）**

接口是对象能响应的请求的集合。

## Lisense

> [MIT](https://opensource.org/licenses/MIT)

Copyright (c) 2017-present, Eric Cheng