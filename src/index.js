'use strict';

let {
    parseStrToAst
} = require('pfc-compiler');

let format = (source, {
    indent = 4
} = {}) => {
    if (!source) return '';

    let root = parseStrToAst(source);

    if (!root) return '';

    let sourceStack = [{
        node: root,
        visited: false,
        depth: 0
    }];

    let valueStack = [];

    while (sourceStack.length) {
        let sourceNode = sourceStack[sourceStack.length - 1];
        let {
            node,
            visited,
            depth
        } = sourceNode;
        if (node.type === 'function') {
            if (!visited) {
                let params = node.params;
                for (let i = 0; i < params.length; i++) {
                    sourceStack.push({
                        node: params[i],
                        visited: false,
                        depth: depth + 1
                    });
                }
                sourceNode.visited = true;
            } else {
                // pop from valueStack
                let len = node.params.length;
                let paramValues = [];
                for (let i = 0; i < len; i++) {
                    paramValues.push(valueStack.pop());
                }
                let code = formatFunction(node.name, paramValues, depth, indent);

                sourceStack.pop();
                valueStack.push(code);
            }
        } else if (node.type === 'atom') {
            sourceStack.pop();
            valueStack.push(formatAtom(node.value, depth, indent));
        } else if (node.type === 'variable') {
            sourceStack.pop();
            valueStack.push(formatVariable(node.name, depth, indent));
        }
    }

    return valueStack[0];
};

let formatAtom = (value, depth, indent) => {
    return getBlanks(depth * indent) + JSON.stringify(value);
};

let formatVariable = (value, depth, indent) => {
    return getBlanks(depth * indent) + value;
};

let formatFunction = (funName, params, depth, indent) => {
    let blanks = getBlanks(depth * indent);
    let head = blanks + funName + '(';

    if(!params.length) return `${head})`;

    let body = params.join(',\n');
    let foot = blanks + ')';

    return head + '\n' + body + '\n' + foot;
};

let getBlanks = (len) => {
    let str = '';
    for (let i = 0; i < len; i++) {
        str += ' ';
    }
    return str;
};

module.exports = {
    format
};
