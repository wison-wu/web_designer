(this["webpackJsonp"] = this["webpackJsonp"] || []).push([[50],{

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/scss/scss.js":
/*!************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/scss/scss.js ***!
  \************************************************************************/
/*! exports provided: conf, language */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"conf\", function() { return conf; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"language\", function() { return language; });\n/*---------------------------------------------------------------------------------------------\n *  Copyright (c) Microsoft Corporation. All rights reserved.\n *  Licensed under the MIT License. See License.txt in the project root for license information.\n *--------------------------------------------------------------------------------------------*/\n\nvar conf = {\n    wordPattern: /(#?-?\\d*\\.\\d\\w*%?)|([@$#!.:]?[\\w-?]+%?)|[@#!.]/g,\n    comments: {\n        blockComment: ['/*', '*/'],\n        lineComment: '//'\n    },\n    brackets: [\n        ['{', '}'],\n        ['[', ']'],\n        ['(', ')']\n    ],\n    autoClosingPairs: [\n        { open: '{', close: '}', notIn: ['string', 'comment'] },\n        { open: '[', close: ']', notIn: ['string', 'comment'] },\n        { open: '(', close: ')', notIn: ['string', 'comment'] },\n        { open: '\"', close: '\"', notIn: ['string', 'comment'] },\n        { open: '\\'', close: '\\'', notIn: ['string', 'comment'] },\n    ],\n    surroundingPairs: [\n        { open: '{', close: '}' },\n        { open: '[', close: ']' },\n        { open: '(', close: ')' },\n        { open: '\"', close: '\"' },\n        { open: '\\'', close: '\\'' },\n    ],\n    folding: {\n        markers: {\n            start: new RegExp(\"^\\\\s*\\\\/\\\\*\\\\s*#region\\\\b\\\\s*(.*?)\\\\s*\\\\*\\\\/\"),\n            end: new RegExp(\"^\\\\s*\\\\/\\\\*\\\\s*#endregion\\\\b.*\\\\*\\\\/\")\n        }\n    }\n};\nvar language = {\n    defaultToken: '',\n    tokenPostfix: '.scss',\n    ws: '[ \\t\\n\\r\\f]*',\n    identifier: '-?-?([a-zA-Z]|(\\\\\\\\(([0-9a-fA-F]{1,6}\\\\s?)|[^[0-9a-fA-F])))([\\\\w\\\\-]|(\\\\\\\\(([0-9a-fA-F]{1,6}\\\\s?)|[^[0-9a-fA-F])))*',\n    brackets: [\n        { open: '{', close: '}', token: 'delimiter.curly' },\n        { open: '[', close: ']', token: 'delimiter.bracket' },\n        { open: '(', close: ')', token: 'delimiter.parenthesis' },\n        { open: '<', close: '>', token: 'delimiter.angle' }\n    ],\n    tokenizer: {\n        root: [\n            { include: '@selector' },\n        ],\n        selector: [\n            { include: '@comments' },\n            { include: '@import' },\n            { include: '@variabledeclaration' },\n            { include: '@warndebug' },\n            ['[@](include)', { token: 'keyword', next: '@includedeclaration' }],\n            ['[@](keyframes|-webkit-keyframes|-moz-keyframes|-o-keyframes)', { token: 'keyword', next: '@keyframedeclaration' }],\n            ['[@](page|content|font-face|-moz-document)', { token: 'keyword' }],\n            ['[@](charset|namespace)', { token: 'keyword', next: '@declarationbody' }],\n            ['[@](function)', { token: 'keyword', next: '@functiondeclaration' }],\n            ['[@](mixin)', { token: 'keyword', next: '@mixindeclaration' }],\n            ['url(\\\\-prefix)?\\\\(', { token: 'meta', next: '@urldeclaration' }],\n            { include: '@controlstatement' },\n            { include: '@selectorname' },\n            ['[&\\\\*]', 'tag'],\n            ['[>\\\\+,]', 'delimiter'],\n            ['\\\\[', { token: 'delimiter.bracket', next: '@selectorattribute' }],\n            ['{', { token: 'delimiter.curly', next: '@selectorbody' }],\n        ],\n        selectorbody: [\n            ['[*_]?@identifier@ws:(?=(\\\\s|\\\\d|[^{;}]*[;}]))', 'attribute.name', '@rulevalue'],\n            { include: '@selector' },\n            ['[@](extend)', { token: 'keyword', next: '@extendbody' }],\n            ['[@](return)', { token: 'keyword', next: '@declarationbody' }],\n            ['}', { token: 'delimiter.curly', next: '@pop' }],\n        ],\n        selectorname: [\n            ['#{', { token: 'meta', next: '@variableinterpolation' }],\n            ['(\\\\.|#(?=[^{])|%|(@identifier)|:)+', 'tag'],\n        ],\n        selectorattribute: [\n            { include: '@term' },\n            [']', { token: 'delimiter.bracket', next: '@pop' }],\n        ],\n        term: [\n            { include: '@comments' },\n            ['url(\\\\-prefix)?\\\\(', { token: 'meta', next: '@urldeclaration' }],\n            { include: '@functioninvocation' },\n            { include: '@numbers' },\n            { include: '@strings' },\n            { include: '@variablereference' },\n            ['(and\\\\b|or\\\\b|not\\\\b)', 'operator'],\n            { include: '@name' },\n            ['([<>=\\\\+\\\\-\\\\*\\\\/\\\\^\\\\|\\\\~,])', 'operator'],\n            [',', 'delimiter'],\n            ['!default', 'literal'],\n            ['\\\\(', { token: 'delimiter.parenthesis', next: '@parenthizedterm' }],\n        ],\n        rulevalue: [\n            { include: '@term' },\n            ['!important', 'literal'],\n            [';', 'delimiter', '@pop'],\n            ['{', { token: 'delimiter.curly', switchTo: '@nestedproperty' }],\n            ['(?=})', { token: '', next: '@pop' }],\n        ],\n        nestedproperty: [\n            ['[*_]?@identifier@ws:', 'attribute.name', '@rulevalue'],\n            { include: '@comments' },\n            ['}', { token: 'delimiter.curly', next: '@pop' }],\n        ],\n        warndebug: [\n            ['[@](warn|debug)', { token: 'keyword', next: '@declarationbody' }],\n        ],\n        import: [\n            ['[@](import)', { token: 'keyword', next: '@declarationbody' }],\n        ],\n        variabledeclaration: [\n            ['\\\\$@identifier@ws:', 'variable.decl', '@declarationbody'],\n        ],\n        urldeclaration: [\n            { include: '@strings' },\n            ['[^)\\r\\n]+', 'string'],\n            ['\\\\)', { token: 'meta', next: '@pop' }],\n        ],\n        parenthizedterm: [\n            { include: '@term' },\n            ['\\\\)', { token: 'delimiter.parenthesis', next: '@pop' }],\n        ],\n        declarationbody: [\n            { include: '@term' },\n            [';', 'delimiter', '@pop'],\n            ['(?=})', { token: '', next: '@pop' }],\n        ],\n        extendbody: [\n            { include: '@selectorname' },\n            ['!optional', 'literal'],\n            [';', 'delimiter', '@pop'],\n            ['(?=})', { token: '', next: '@pop' }],\n        ],\n        variablereference: [\n            ['\\\\$@identifier', 'variable.ref'],\n            ['\\\\.\\\\.\\\\.', 'operator'],\n            ['#{', { token: 'meta', next: '@variableinterpolation' }],\n        ],\n        variableinterpolation: [\n            { include: '@variablereference' },\n            ['}', { token: 'meta', next: '@pop' }],\n        ],\n        comments: [\n            ['\\\\/\\\\*', 'comment', '@comment'],\n            ['\\\\/\\\\/+.*', 'comment'],\n        ],\n        comment: [\n            ['\\\\*\\\\/', 'comment', '@pop'],\n            ['.', 'comment'],\n        ],\n        name: [\n            ['@identifier', 'attribute.value'],\n        ],\n        numbers: [\n            ['(\\\\d*\\\\.)?\\\\d+([eE][\\\\-+]?\\\\d+)?', { token: 'number', next: '@units' }],\n            ['#[0-9a-fA-F_]+(?!\\\\w)', 'number.hex'],\n        ],\n        units: [\n            ['(em|ex|ch|rem|vmin|vmax|vw|vh|vm|cm|mm|in|px|pt|pc|deg|grad|rad|turn|s|ms|Hz|kHz|%)?', 'number', '@pop']\n        ],\n        functiondeclaration: [\n            ['@identifier@ws\\\\(', { token: 'meta', next: '@parameterdeclaration' }],\n            ['{', { token: 'delimiter.curly', switchTo: '@functionbody' }],\n        ],\n        mixindeclaration: [\n            // mixin with parameters\n            ['@identifier@ws\\\\(', { token: 'meta', next: '@parameterdeclaration' }],\n            // mixin without parameters\n            ['@identifier', 'meta'],\n            ['{', { token: 'delimiter.curly', switchTo: '@selectorbody' }],\n        ],\n        parameterdeclaration: [\n            ['\\\\$@identifier@ws:', 'variable.decl'],\n            ['\\\\.\\\\.\\\\.', 'operator'],\n            [',', 'delimiter'],\n            { include: '@term' },\n            ['\\\\)', { token: 'meta', next: '@pop' }],\n        ],\n        includedeclaration: [\n            { include: '@functioninvocation' },\n            ['@identifier', 'meta'],\n            [';', 'delimiter', '@pop'],\n            ['(?=})', { token: '', next: '@pop' }],\n            ['{', { token: 'delimiter.curly', switchTo: '@selectorbody' }],\n        ],\n        keyframedeclaration: [\n            ['@identifier', 'meta'],\n            ['{', { token: 'delimiter.curly', switchTo: '@keyframebody' }],\n        ],\n        keyframebody: [\n            { include: '@term' },\n            ['{', { token: 'delimiter.curly', next: '@selectorbody' }],\n            ['}', { token: 'delimiter.curly', next: '@pop' }],\n        ],\n        controlstatement: [\n            ['[@](if|else|for|while|each|media)', { token: 'keyword.flow', next: '@controlstatementdeclaration' }],\n        ],\n        controlstatementdeclaration: [\n            ['(in|from|through|if|to)\\\\b', { token: 'keyword.flow' }],\n            { include: '@term' },\n            ['{', { token: 'delimiter.curly', switchTo: '@selectorbody' }],\n        ],\n        functionbody: [\n            ['[@](return)', { token: 'keyword' }],\n            { include: '@variabledeclaration' },\n            { include: '@term' },\n            { include: '@controlstatement' },\n            [';', 'delimiter'],\n            ['}', { token: 'delimiter.curly', next: '@pop' }],\n        ],\n        functioninvocation: [\n            ['@identifier\\\\(', { token: 'meta', next: '@functionarguments' }],\n        ],\n        functionarguments: [\n            ['\\\\$@identifier@ws:', 'attribute.name'],\n            ['[,]', 'delimiter'],\n            { include: '@term' },\n            ['\\\\)', { token: 'meta', next: '@pop' }],\n        ],\n        strings: [\n            ['~?\"', { token: 'string.delimiter', next: '@stringenddoublequote' }],\n            ['~?\\'', { token: 'string.delimiter', next: '@stringendquote' }]\n        ],\n        stringenddoublequote: [\n            ['\\\\\\\\.', 'string'],\n            ['\"', { token: 'string.delimiter', next: '@pop' }],\n            ['.', 'string']\n        ],\n        stringendquote: [\n            ['\\\\\\\\.', 'string'],\n            ['\\'', { token: 'string.delimiter', next: '@pop' }],\n            ['.', 'string']\n        ]\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbW9uYWNvLWVkaXRvci9lc20vdnMvYmFzaWMtbGFuZ3VhZ2VzL3Njc3Mvc2Nzcy5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tb25hY28tZWRpdG9yL2VzbS92cy9iYXNpYy1sYW5ndWFnZXMvc2Nzcy9zY3NzLmpzPzQwOTkiXSwic291cmNlc0NvbnRlbnQiOlsiLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqICBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4ndXNlIHN0cmljdCc7XG5leHBvcnQgdmFyIGNvbmYgPSB7XG4gICAgd29yZFBhdHRlcm46IC8oIz8tP1xcZCpcXC5cXGRcXHcqJT8pfChbQCQjIS46XT9bXFx3LT9dKyU/KXxbQCMhLl0vZyxcbiAgICBjb21tZW50czoge1xuICAgICAgICBibG9ja0NvbW1lbnQ6IFsnLyonLCAnKi8nXSxcbiAgICAgICAgbGluZUNvbW1lbnQ6ICcvLydcbiAgICB9LFxuICAgIGJyYWNrZXRzOiBbXG4gICAgICAgIFsneycsICd9J10sXG4gICAgICAgIFsnWycsICddJ10sXG4gICAgICAgIFsnKCcsICcpJ11cbiAgICBdLFxuICAgIGF1dG9DbG9zaW5nUGFpcnM6IFtcbiAgICAgICAgeyBvcGVuOiAneycsIGNsb3NlOiAnfScsIG5vdEluOiBbJ3N0cmluZycsICdjb21tZW50J10gfSxcbiAgICAgICAgeyBvcGVuOiAnWycsIGNsb3NlOiAnXScsIG5vdEluOiBbJ3N0cmluZycsICdjb21tZW50J10gfSxcbiAgICAgICAgeyBvcGVuOiAnKCcsIGNsb3NlOiAnKScsIG5vdEluOiBbJ3N0cmluZycsICdjb21tZW50J10gfSxcbiAgICAgICAgeyBvcGVuOiAnXCInLCBjbG9zZTogJ1wiJywgbm90SW46IFsnc3RyaW5nJywgJ2NvbW1lbnQnXSB9LFxuICAgICAgICB7IG9wZW46ICdcXCcnLCBjbG9zZTogJ1xcJycsIG5vdEluOiBbJ3N0cmluZycsICdjb21tZW50J10gfSxcbiAgICBdLFxuICAgIHN1cnJvdW5kaW5nUGFpcnM6IFtcbiAgICAgICAgeyBvcGVuOiAneycsIGNsb3NlOiAnfScgfSxcbiAgICAgICAgeyBvcGVuOiAnWycsIGNsb3NlOiAnXScgfSxcbiAgICAgICAgeyBvcGVuOiAnKCcsIGNsb3NlOiAnKScgfSxcbiAgICAgICAgeyBvcGVuOiAnXCInLCBjbG9zZTogJ1wiJyB9LFxuICAgICAgICB7IG9wZW46ICdcXCcnLCBjbG9zZTogJ1xcJycgfSxcbiAgICBdLFxuICAgIGZvbGRpbmc6IHtcbiAgICAgICAgbWFya2Vyczoge1xuICAgICAgICAgICAgc3RhcnQ6IG5ldyBSZWdFeHAoXCJeXFxcXHMqXFxcXC9cXFxcKlxcXFxzKiNyZWdpb25cXFxcYlxcXFxzKiguKj8pXFxcXHMqXFxcXCpcXFxcL1wiKSxcbiAgICAgICAgICAgIGVuZDogbmV3IFJlZ0V4cChcIl5cXFxccypcXFxcL1xcXFwqXFxcXHMqI2VuZHJlZ2lvblxcXFxiLipcXFxcKlxcXFwvXCIpXG4gICAgICAgIH1cbiAgICB9XG59O1xuZXhwb3J0IHZhciBsYW5ndWFnZSA9IHtcbiAgICBkZWZhdWx0VG9rZW46ICcnLFxuICAgIHRva2VuUG9zdGZpeDogJy5zY3NzJyxcbiAgICB3czogJ1sgXFx0XFxuXFxyXFxmXSonLFxuICAgIGlkZW50aWZpZXI6ICctPy0/KFthLXpBLVpdfChcXFxcXFxcXCgoWzAtOWEtZkEtRl17MSw2fVxcXFxzPyl8W15bMC05YS1mQS1GXSkpKShbXFxcXHdcXFxcLV18KFxcXFxcXFxcKChbMC05YS1mQS1GXXsxLDZ9XFxcXHM/KXxbXlswLTlhLWZBLUZdKSkpKicsXG4gICAgYnJhY2tldHM6IFtcbiAgICAgICAgeyBvcGVuOiAneycsIGNsb3NlOiAnfScsIHRva2VuOiAnZGVsaW1pdGVyLmN1cmx5JyB9LFxuICAgICAgICB7IG9wZW46ICdbJywgY2xvc2U6ICddJywgdG9rZW46ICdkZWxpbWl0ZXIuYnJhY2tldCcgfSxcbiAgICAgICAgeyBvcGVuOiAnKCcsIGNsb3NlOiAnKScsIHRva2VuOiAnZGVsaW1pdGVyLnBhcmVudGhlc2lzJyB9LFxuICAgICAgICB7IG9wZW46ICc8JywgY2xvc2U6ICc+JywgdG9rZW46ICdkZWxpbWl0ZXIuYW5nbGUnIH1cbiAgICBdLFxuICAgIHRva2VuaXplcjoge1xuICAgICAgICByb290OiBbXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAc2VsZWN0b3InIH0sXG4gICAgICAgIF0sXG4gICAgICAgIHNlbGVjdG9yOiBbXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAY29tbWVudHMnIH0sXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAaW1wb3J0JyB9LFxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQHZhcmlhYmxlZGVjbGFyYXRpb24nIH0sXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAd2FybmRlYnVnJyB9LFxuICAgICAgICAgICAgWydbQF0oaW5jbHVkZSknLCB7IHRva2VuOiAna2V5d29yZCcsIG5leHQ6ICdAaW5jbHVkZWRlY2xhcmF0aW9uJyB9XSxcbiAgICAgICAgICAgIFsnW0BdKGtleWZyYW1lc3wtd2Via2l0LWtleWZyYW1lc3wtbW96LWtleWZyYW1lc3wtby1rZXlmcmFtZXMpJywgeyB0b2tlbjogJ2tleXdvcmQnLCBuZXh0OiAnQGtleWZyYW1lZGVjbGFyYXRpb24nIH1dLFxuICAgICAgICAgICAgWydbQF0ocGFnZXxjb250ZW50fGZvbnQtZmFjZXwtbW96LWRvY3VtZW50KScsIHsgdG9rZW46ICdrZXl3b3JkJyB9XSxcbiAgICAgICAgICAgIFsnW0BdKGNoYXJzZXR8bmFtZXNwYWNlKScsIHsgdG9rZW46ICdrZXl3b3JkJywgbmV4dDogJ0BkZWNsYXJhdGlvbmJvZHknIH1dLFxuICAgICAgICAgICAgWydbQF0oZnVuY3Rpb24pJywgeyB0b2tlbjogJ2tleXdvcmQnLCBuZXh0OiAnQGZ1bmN0aW9uZGVjbGFyYXRpb24nIH1dLFxuICAgICAgICAgICAgWydbQF0obWl4aW4pJywgeyB0b2tlbjogJ2tleXdvcmQnLCBuZXh0OiAnQG1peGluZGVjbGFyYXRpb24nIH1dLFxuICAgICAgICAgICAgWyd1cmwoXFxcXC1wcmVmaXgpP1xcXFwoJywgeyB0b2tlbjogJ21ldGEnLCBuZXh0OiAnQHVybGRlY2xhcmF0aW9uJyB9XSxcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0Bjb250cm9sc3RhdGVtZW50JyB9LFxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQHNlbGVjdG9ybmFtZScgfSxcbiAgICAgICAgICAgIFsnWyZcXFxcKl0nLCAndGFnJ10sXG4gICAgICAgICAgICBbJ1s+XFxcXCssXScsICdkZWxpbWl0ZXInXSxcbiAgICAgICAgICAgIFsnXFxcXFsnLCB7IHRva2VuOiAnZGVsaW1pdGVyLmJyYWNrZXQnLCBuZXh0OiAnQHNlbGVjdG9yYXR0cmlidXRlJyB9XSxcbiAgICAgICAgICAgIFsneycsIHsgdG9rZW46ICdkZWxpbWl0ZXIuY3VybHknLCBuZXh0OiAnQHNlbGVjdG9yYm9keScgfV0sXG4gICAgICAgIF0sXG4gICAgICAgIHNlbGVjdG9yYm9keTogW1xuICAgICAgICAgICAgWydbKl9dP0BpZGVudGlmaWVyQHdzOig/PShcXFxcc3xcXFxcZHxbXns7fV0qWzt9XSkpJywgJ2F0dHJpYnV0ZS5uYW1lJywgJ0BydWxldmFsdWUnXSxcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0BzZWxlY3RvcicgfSxcbiAgICAgICAgICAgIFsnW0BdKGV4dGVuZCknLCB7IHRva2VuOiAna2V5d29yZCcsIG5leHQ6ICdAZXh0ZW5kYm9keScgfV0sXG4gICAgICAgICAgICBbJ1tAXShyZXR1cm4pJywgeyB0b2tlbjogJ2tleXdvcmQnLCBuZXh0OiAnQGRlY2xhcmF0aW9uYm9keScgfV0sXG4gICAgICAgICAgICBbJ30nLCB7IHRva2VuOiAnZGVsaW1pdGVyLmN1cmx5JywgbmV4dDogJ0Bwb3AnIH1dLFxuICAgICAgICBdLFxuICAgICAgICBzZWxlY3Rvcm5hbWU6IFtcbiAgICAgICAgICAgIFsnI3snLCB7IHRva2VuOiAnbWV0YScsIG5leHQ6ICdAdmFyaWFibGVpbnRlcnBvbGF0aW9uJyB9XSxcbiAgICAgICAgICAgIFsnKFxcXFwufCMoPz1bXntdKXwlfChAaWRlbnRpZmllcil8OikrJywgJ3RhZyddLFxuICAgICAgICBdLFxuICAgICAgICBzZWxlY3RvcmF0dHJpYnV0ZTogW1xuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQHRlcm0nIH0sXG4gICAgICAgICAgICBbJ10nLCB7IHRva2VuOiAnZGVsaW1pdGVyLmJyYWNrZXQnLCBuZXh0OiAnQHBvcCcgfV0sXG4gICAgICAgIF0sXG4gICAgICAgIHRlcm06IFtcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0Bjb21tZW50cycgfSxcbiAgICAgICAgICAgIFsndXJsKFxcXFwtcHJlZml4KT9cXFxcKCcsIHsgdG9rZW46ICdtZXRhJywgbmV4dDogJ0B1cmxkZWNsYXJhdGlvbicgfV0sXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAZnVuY3Rpb25pbnZvY2F0aW9uJyB9LFxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQG51bWJlcnMnIH0sXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAc3RyaW5ncycgfSxcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0B2YXJpYWJsZXJlZmVyZW5jZScgfSxcbiAgICAgICAgICAgIFsnKGFuZFxcXFxifG9yXFxcXGJ8bm90XFxcXGIpJywgJ29wZXJhdG9yJ10sXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAbmFtZScgfSxcbiAgICAgICAgICAgIFsnKFs8Pj1cXFxcK1xcXFwtXFxcXCpcXFxcL1xcXFxeXFxcXHxcXFxcfixdKScsICdvcGVyYXRvciddLFxuICAgICAgICAgICAgWycsJywgJ2RlbGltaXRlciddLFxuICAgICAgICAgICAgWychZGVmYXVsdCcsICdsaXRlcmFsJ10sXG4gICAgICAgICAgICBbJ1xcXFwoJywgeyB0b2tlbjogJ2RlbGltaXRlci5wYXJlbnRoZXNpcycsIG5leHQ6ICdAcGFyZW50aGl6ZWR0ZXJtJyB9XSxcbiAgICAgICAgXSxcbiAgICAgICAgcnVsZXZhbHVlOiBbXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAdGVybScgfSxcbiAgICAgICAgICAgIFsnIWltcG9ydGFudCcsICdsaXRlcmFsJ10sXG4gICAgICAgICAgICBbJzsnLCAnZGVsaW1pdGVyJywgJ0Bwb3AnXSxcbiAgICAgICAgICAgIFsneycsIHsgdG9rZW46ICdkZWxpbWl0ZXIuY3VybHknLCBzd2l0Y2hUbzogJ0BuZXN0ZWRwcm9wZXJ0eScgfV0sXG4gICAgICAgICAgICBbJyg/PX0pJywgeyB0b2tlbjogJycsIG5leHQ6ICdAcG9wJyB9XSxcbiAgICAgICAgXSxcbiAgICAgICAgbmVzdGVkcHJvcGVydHk6IFtcbiAgICAgICAgICAgIFsnWypfXT9AaWRlbnRpZmllckB3czonLCAnYXR0cmlidXRlLm5hbWUnLCAnQHJ1bGV2YWx1ZSddLFxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQGNvbW1lbnRzJyB9LFxuICAgICAgICAgICAgWyd9JywgeyB0b2tlbjogJ2RlbGltaXRlci5jdXJseScsIG5leHQ6ICdAcG9wJyB9XSxcbiAgICAgICAgXSxcbiAgICAgICAgd2FybmRlYnVnOiBbXG4gICAgICAgICAgICBbJ1tAXSh3YXJufGRlYnVnKScsIHsgdG9rZW46ICdrZXl3b3JkJywgbmV4dDogJ0BkZWNsYXJhdGlvbmJvZHknIH1dLFxuICAgICAgICBdLFxuICAgICAgICBpbXBvcnQ6IFtcbiAgICAgICAgICAgIFsnW0BdKGltcG9ydCknLCB7IHRva2VuOiAna2V5d29yZCcsIG5leHQ6ICdAZGVjbGFyYXRpb25ib2R5JyB9XSxcbiAgICAgICAgXSxcbiAgICAgICAgdmFyaWFibGVkZWNsYXJhdGlvbjogW1xuICAgICAgICAgICAgWydcXFxcJEBpZGVudGlmaWVyQHdzOicsICd2YXJpYWJsZS5kZWNsJywgJ0BkZWNsYXJhdGlvbmJvZHknXSxcbiAgICAgICAgXSxcbiAgICAgICAgdXJsZGVjbGFyYXRpb246IFtcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0BzdHJpbmdzJyB9LFxuICAgICAgICAgICAgWydbXilcXHJcXG5dKycsICdzdHJpbmcnXSxcbiAgICAgICAgICAgIFsnXFxcXCknLCB7IHRva2VuOiAnbWV0YScsIG5leHQ6ICdAcG9wJyB9XSxcbiAgICAgICAgXSxcbiAgICAgICAgcGFyZW50aGl6ZWR0ZXJtOiBbXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAdGVybScgfSxcbiAgICAgICAgICAgIFsnXFxcXCknLCB7IHRva2VuOiAnZGVsaW1pdGVyLnBhcmVudGhlc2lzJywgbmV4dDogJ0Bwb3AnIH1dLFxuICAgICAgICBdLFxuICAgICAgICBkZWNsYXJhdGlvbmJvZHk6IFtcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0B0ZXJtJyB9LFxuICAgICAgICAgICAgWyc7JywgJ2RlbGltaXRlcicsICdAcG9wJ10sXG4gICAgICAgICAgICBbJyg/PX0pJywgeyB0b2tlbjogJycsIG5leHQ6ICdAcG9wJyB9XSxcbiAgICAgICAgXSxcbiAgICAgICAgZXh0ZW5kYm9keTogW1xuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQHNlbGVjdG9ybmFtZScgfSxcbiAgICAgICAgICAgIFsnIW9wdGlvbmFsJywgJ2xpdGVyYWwnXSxcbiAgICAgICAgICAgIFsnOycsICdkZWxpbWl0ZXInLCAnQHBvcCddLFxuICAgICAgICAgICAgWycoPz19KScsIHsgdG9rZW46ICcnLCBuZXh0OiAnQHBvcCcgfV0sXG4gICAgICAgIF0sXG4gICAgICAgIHZhcmlhYmxlcmVmZXJlbmNlOiBbXG4gICAgICAgICAgICBbJ1xcXFwkQGlkZW50aWZpZXInLCAndmFyaWFibGUucmVmJ10sXG4gICAgICAgICAgICBbJ1xcXFwuXFxcXC5cXFxcLicsICdvcGVyYXRvciddLFxuICAgICAgICAgICAgWycjeycsIHsgdG9rZW46ICdtZXRhJywgbmV4dDogJ0B2YXJpYWJsZWludGVycG9sYXRpb24nIH1dLFxuICAgICAgICBdLFxuICAgICAgICB2YXJpYWJsZWludGVycG9sYXRpb246IFtcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0B2YXJpYWJsZXJlZmVyZW5jZScgfSxcbiAgICAgICAgICAgIFsnfScsIHsgdG9rZW46ICdtZXRhJywgbmV4dDogJ0Bwb3AnIH1dLFxuICAgICAgICBdLFxuICAgICAgICBjb21tZW50czogW1xuICAgICAgICAgICAgWydcXFxcL1xcXFwqJywgJ2NvbW1lbnQnLCAnQGNvbW1lbnQnXSxcbiAgICAgICAgICAgIFsnXFxcXC9cXFxcLysuKicsICdjb21tZW50J10sXG4gICAgICAgIF0sXG4gICAgICAgIGNvbW1lbnQ6IFtcbiAgICAgICAgICAgIFsnXFxcXCpcXFxcLycsICdjb21tZW50JywgJ0Bwb3AnXSxcbiAgICAgICAgICAgIFsnLicsICdjb21tZW50J10sXG4gICAgICAgIF0sXG4gICAgICAgIG5hbWU6IFtcbiAgICAgICAgICAgIFsnQGlkZW50aWZpZXInLCAnYXR0cmlidXRlLnZhbHVlJ10sXG4gICAgICAgIF0sXG4gICAgICAgIG51bWJlcnM6IFtcbiAgICAgICAgICAgIFsnKFxcXFxkKlxcXFwuKT9cXFxcZCsoW2VFXVtcXFxcLStdP1xcXFxkKyk/JywgeyB0b2tlbjogJ251bWJlcicsIG5leHQ6ICdAdW5pdHMnIH1dLFxuICAgICAgICAgICAgWycjWzAtOWEtZkEtRl9dKyg/IVxcXFx3KScsICdudW1iZXIuaGV4J10sXG4gICAgICAgIF0sXG4gICAgICAgIHVuaXRzOiBbXG4gICAgICAgICAgICBbJyhlbXxleHxjaHxyZW18dm1pbnx2bWF4fHZ3fHZofHZtfGNtfG1tfGlufHB4fHB0fHBjfGRlZ3xncmFkfHJhZHx0dXJufHN8bXN8SHp8a0h6fCUpPycsICdudW1iZXInLCAnQHBvcCddXG4gICAgICAgIF0sXG4gICAgICAgIGZ1bmN0aW9uZGVjbGFyYXRpb246IFtcbiAgICAgICAgICAgIFsnQGlkZW50aWZpZXJAd3NcXFxcKCcsIHsgdG9rZW46ICdtZXRhJywgbmV4dDogJ0BwYXJhbWV0ZXJkZWNsYXJhdGlvbicgfV0sXG4gICAgICAgICAgICBbJ3snLCB7IHRva2VuOiAnZGVsaW1pdGVyLmN1cmx5Jywgc3dpdGNoVG86ICdAZnVuY3Rpb25ib2R5JyB9XSxcbiAgICAgICAgXSxcbiAgICAgICAgbWl4aW5kZWNsYXJhdGlvbjogW1xuICAgICAgICAgICAgLy8gbWl4aW4gd2l0aCBwYXJhbWV0ZXJzXG4gICAgICAgICAgICBbJ0BpZGVudGlmaWVyQHdzXFxcXCgnLCB7IHRva2VuOiAnbWV0YScsIG5leHQ6ICdAcGFyYW1ldGVyZGVjbGFyYXRpb24nIH1dLFxuICAgICAgICAgICAgLy8gbWl4aW4gd2l0aG91dCBwYXJhbWV0ZXJzXG4gICAgICAgICAgICBbJ0BpZGVudGlmaWVyJywgJ21ldGEnXSxcbiAgICAgICAgICAgIFsneycsIHsgdG9rZW46ICdkZWxpbWl0ZXIuY3VybHknLCBzd2l0Y2hUbzogJ0BzZWxlY3RvcmJvZHknIH1dLFxuICAgICAgICBdLFxuICAgICAgICBwYXJhbWV0ZXJkZWNsYXJhdGlvbjogW1xuICAgICAgICAgICAgWydcXFxcJEBpZGVudGlmaWVyQHdzOicsICd2YXJpYWJsZS5kZWNsJ10sXG4gICAgICAgICAgICBbJ1xcXFwuXFxcXC5cXFxcLicsICdvcGVyYXRvciddLFxuICAgICAgICAgICAgWycsJywgJ2RlbGltaXRlciddLFxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQHRlcm0nIH0sXG4gICAgICAgICAgICBbJ1xcXFwpJywgeyB0b2tlbjogJ21ldGEnLCBuZXh0OiAnQHBvcCcgfV0sXG4gICAgICAgIF0sXG4gICAgICAgIGluY2x1ZGVkZWNsYXJhdGlvbjogW1xuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQGZ1bmN0aW9uaW52b2NhdGlvbicgfSxcbiAgICAgICAgICAgIFsnQGlkZW50aWZpZXInLCAnbWV0YSddLFxuICAgICAgICAgICAgWyc7JywgJ2RlbGltaXRlcicsICdAcG9wJ10sXG4gICAgICAgICAgICBbJyg/PX0pJywgeyB0b2tlbjogJycsIG5leHQ6ICdAcG9wJyB9XSxcbiAgICAgICAgICAgIFsneycsIHsgdG9rZW46ICdkZWxpbWl0ZXIuY3VybHknLCBzd2l0Y2hUbzogJ0BzZWxlY3RvcmJvZHknIH1dLFxuICAgICAgICBdLFxuICAgICAgICBrZXlmcmFtZWRlY2xhcmF0aW9uOiBbXG4gICAgICAgICAgICBbJ0BpZGVudGlmaWVyJywgJ21ldGEnXSxcbiAgICAgICAgICAgIFsneycsIHsgdG9rZW46ICdkZWxpbWl0ZXIuY3VybHknLCBzd2l0Y2hUbzogJ0BrZXlmcmFtZWJvZHknIH1dLFxuICAgICAgICBdLFxuICAgICAgICBrZXlmcmFtZWJvZHk6IFtcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0B0ZXJtJyB9LFxuICAgICAgICAgICAgWyd7JywgeyB0b2tlbjogJ2RlbGltaXRlci5jdXJseScsIG5leHQ6ICdAc2VsZWN0b3Jib2R5JyB9XSxcbiAgICAgICAgICAgIFsnfScsIHsgdG9rZW46ICdkZWxpbWl0ZXIuY3VybHknLCBuZXh0OiAnQHBvcCcgfV0sXG4gICAgICAgIF0sXG4gICAgICAgIGNvbnRyb2xzdGF0ZW1lbnQ6IFtcbiAgICAgICAgICAgIFsnW0BdKGlmfGVsc2V8Zm9yfHdoaWxlfGVhY2h8bWVkaWEpJywgeyB0b2tlbjogJ2tleXdvcmQuZmxvdycsIG5leHQ6ICdAY29udHJvbHN0YXRlbWVudGRlY2xhcmF0aW9uJyB9XSxcbiAgICAgICAgXSxcbiAgICAgICAgY29udHJvbHN0YXRlbWVudGRlY2xhcmF0aW9uOiBbXG4gICAgICAgICAgICBbJyhpbnxmcm9tfHRocm91Z2h8aWZ8dG8pXFxcXGInLCB7IHRva2VuOiAna2V5d29yZC5mbG93JyB9XSxcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0B0ZXJtJyB9LFxuICAgICAgICAgICAgWyd7JywgeyB0b2tlbjogJ2RlbGltaXRlci5jdXJseScsIHN3aXRjaFRvOiAnQHNlbGVjdG9yYm9keScgfV0sXG4gICAgICAgIF0sXG4gICAgICAgIGZ1bmN0aW9uYm9keTogW1xuICAgICAgICAgICAgWydbQF0ocmV0dXJuKScsIHsgdG9rZW46ICdrZXl3b3JkJyB9XSxcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0B2YXJpYWJsZWRlY2xhcmF0aW9uJyB9LFxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQHRlcm0nIH0sXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAY29udHJvbHN0YXRlbWVudCcgfSxcbiAgICAgICAgICAgIFsnOycsICdkZWxpbWl0ZXInXSxcbiAgICAgICAgICAgIFsnfScsIHsgdG9rZW46ICdkZWxpbWl0ZXIuY3VybHknLCBuZXh0OiAnQHBvcCcgfV0sXG4gICAgICAgIF0sXG4gICAgICAgIGZ1bmN0aW9uaW52b2NhdGlvbjogW1xuICAgICAgICAgICAgWydAaWRlbnRpZmllclxcXFwoJywgeyB0b2tlbjogJ21ldGEnLCBuZXh0OiAnQGZ1bmN0aW9uYXJndW1lbnRzJyB9XSxcbiAgICAgICAgXSxcbiAgICAgICAgZnVuY3Rpb25hcmd1bWVudHM6IFtcbiAgICAgICAgICAgIFsnXFxcXCRAaWRlbnRpZmllckB3czonLCAnYXR0cmlidXRlLm5hbWUnXSxcbiAgICAgICAgICAgIFsnWyxdJywgJ2RlbGltaXRlciddLFxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQHRlcm0nIH0sXG4gICAgICAgICAgICBbJ1xcXFwpJywgeyB0b2tlbjogJ21ldGEnLCBuZXh0OiAnQHBvcCcgfV0sXG4gICAgICAgIF0sXG4gICAgICAgIHN0cmluZ3M6IFtcbiAgICAgICAgICAgIFsnfj9cIicsIHsgdG9rZW46ICdzdHJpbmcuZGVsaW1pdGVyJywgbmV4dDogJ0BzdHJpbmdlbmRkb3VibGVxdW90ZScgfV0sXG4gICAgICAgICAgICBbJ34/XFwnJywgeyB0b2tlbjogJ3N0cmluZy5kZWxpbWl0ZXInLCBuZXh0OiAnQHN0cmluZ2VuZHF1b3RlJyB9XVxuICAgICAgICBdLFxuICAgICAgICBzdHJpbmdlbmRkb3VibGVxdW90ZTogW1xuICAgICAgICAgICAgWydcXFxcXFxcXC4nLCAnc3RyaW5nJ10sXG4gICAgICAgICAgICBbJ1wiJywgeyB0b2tlbjogJ3N0cmluZy5kZWxpbWl0ZXInLCBuZXh0OiAnQHBvcCcgfV0sXG4gICAgICAgICAgICBbJy4nLCAnc3RyaW5nJ11cbiAgICAgICAgXSxcbiAgICAgICAgc3RyaW5nZW5kcXVvdGU6IFtcbiAgICAgICAgICAgIFsnXFxcXFxcXFwuJywgJ3N0cmluZyddLFxuICAgICAgICAgICAgWydcXCcnLCB7IHRva2VuOiAnc3RyaW5nLmRlbGltaXRlcicsIG5leHQ6ICdAcG9wJyB9XSxcbiAgICAgICAgICAgIFsnLicsICdzdHJpbmcnXVxuICAgICAgICBdXG4gICAgfVxufTtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/monaco-editor/esm/vs/basic-languages/scss/scss.js\n");

/***/ })

}]);