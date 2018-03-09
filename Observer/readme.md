### 观察者模式和订阅/发布模式的区别

- 在观察者模式中，观察者们(Observers)知晓主体(Object)的存在，并且主体维护着一组观察者(Observers)。但在订阅/发布模式中，订阅者和发布者并不需要知晓彼此的存在。他们只是在消息队列或中间者的帮助下进行通信。
- 相对观察者模式来说，订阅发布模式只是松散的耦合。
- 通常情况下，观察者模式以同步的方式进行封装，（当事件发生变化时，主体会调用所有观察者的特定方法）。而大多数订阅发布模式是以异步的方式进行封装（使用消息队列）。
- 观察者模式需要在单一的应用地址空间进行封装。相反的，订阅发布模式是一种跨应用的模式。