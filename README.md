# kotlinjs-jquery-demo
A demo of using KotlinJS/kotlinx.html with JQuery 

## 简介

这个项目提供一个把 KotlinJS 、kotlinx-html、JQuery 三者结合起来使用的一个最简易的应用示例，其中使用到的依赖和其作用有：

- `kotlin-stdlib-js`：Kotlin 官方的 JavaScript 平台标准库（用 Kotlin 来写 JS）
- `kotlinx-html-js`：用 Kotlin DSL 来构建生成 HTML （可在 JavaScript 平台或 JVM 平台用）
- `kotlin-js-jquery`：其实是一个 JQuery 的 Kotlin 强类型声明库

关于用 Kotlin 来写原生客户端 JS，一直以来都问题不大，写起来倍儿爽！

有问题的是，Kotlin 写 JQuery ，JQuery 需要 Kotlin 环境下的强类型声明，虽然官方提供了一个 [ts2kt工具](https://github.com/Kotlin/ts2kt) 来帮助把它在 TypeScript 的类型声明转换成 Kotlin 的类型声明，但是在我每次使用过程中都会有很多错误，很令人头疼。

今天在 Slack 上看到个 Kotlin 大佬说这个 [ts2kt项目](https://github.com/Kotlin/ts2kt) 确实是有问题的，然后他提供了个规范好的 JQuery 的类型声明文件，然后就可以直接拿来用了，这样就解决问题了。

## 如何使用

1. Clone 这个项目
2. Maven导入依赖
3. Maven 执行 clean
4. Maven 执行 package
5. 打开 index.html 就能看到效果 

每次修改完 Kotlin 源代码之后，Maven 执行一下 compile 就能更新生成的 js 文件了。

