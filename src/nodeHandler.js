/*
* 定义一个AST的节点处理器
* 参考：https://juejin.im/post/5c55485a51882561de4a8341?utm_source=gold_browser_extension
* */

// 节点处理器
const nodeHandler = {
	Program (){},
	VariableDeclaration (){},
	ExpressionStatement (){},
	MemberExpression (){},
	CallExpression (){},
	Identifier (){}
};

