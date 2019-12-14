(this["webpackJsonp"] = this["webpackJsonp"] || []).push([[13],{

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/csharp/csharp.js":
/*!****************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/csharp/csharp.js ***!
  \****************************************************************************/
/*! exports provided: conf, language */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"conf\", function() { return conf; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"language\", function() { return language; });\n/*---------------------------------------------------------------------------------------------\n *  Copyright (c) Microsoft Corporation. All rights reserved.\n *  Licensed under the MIT License. See License.txt in the project root for license information.\n *--------------------------------------------------------------------------------------------*/\n\nvar conf = {\n    wordPattern: /(-?\\d*\\.\\d\\w*)|([^\\`\\~\\!\\#\\$\\%\\^\\&\\*\\(\\)\\-\\=\\+\\[\\{\\]\\}\\\\\\|\\;\\:\\'\\\"\\,\\.\\<\\>\\/\\?\\s]+)/g,\n    comments: {\n        lineComment: '//',\n        blockComment: ['/*', '*/'],\n    },\n    brackets: [\n        ['{', '}'],\n        ['[', ']'],\n        ['(', ')'],\n    ],\n    autoClosingPairs: [\n        { open: '{', close: '}' },\n        { open: '[', close: ']' },\n        { open: '(', close: ')' },\n        { open: '\\'', close: '\\'', notIn: ['string', 'comment'] },\n        { open: '\"', close: '\"', notIn: ['string', 'comment'] },\n    ],\n    surroundingPairs: [\n        { open: '{', close: '}' },\n        { open: '[', close: ']' },\n        { open: '(', close: ')' },\n        { open: '<', close: '>' },\n        { open: '\\'', close: '\\'' },\n        { open: '\"', close: '\"' },\n    ],\n    folding: {\n        markers: {\n            start: new RegExp(\"^\\\\s*#region\\\\b\"),\n            end: new RegExp(\"^\\\\s*#endregion\\\\b\")\n        }\n    }\n};\nvar language = {\n    defaultToken: '',\n    tokenPostfix: '.cs',\n    brackets: [\n        { open: '{', close: '}', token: 'delimiter.curly' },\n        { open: '[', close: ']', token: 'delimiter.square' },\n        { open: '(', close: ')', token: 'delimiter.parenthesis' },\n        { open: '<', close: '>', token: 'delimiter.angle' }\n    ],\n    keywords: [\n        'extern', 'alias', 'using', 'bool', 'decimal', 'sbyte', 'byte', 'short',\n        'ushort', 'int', 'uint', 'long', 'ulong', 'char', 'float', 'double',\n        'object', 'dynamic', 'string', 'assembly', 'is', 'as', 'ref',\n        'out', 'this', 'base', 'new', 'typeof', 'void', 'checked', 'unchecked',\n        'default', 'delegate', 'var', 'const', 'if', 'else', 'switch', 'case',\n        'while', 'do', 'for', 'foreach', 'in', 'break', 'continue', 'goto',\n        'return', 'throw', 'try', 'catch', 'finally', 'lock', 'yield', 'from',\n        'let', 'where', 'join', 'on', 'equals', 'into', 'orderby', 'ascending',\n        'descending', 'select', 'group', 'by', 'namespace', 'partial', 'class',\n        'field', 'event', 'method', 'param', 'property', 'public', 'protected',\n        'internal', 'private', 'abstract', 'sealed', 'static', 'struct', 'readonly',\n        'volatile', 'virtual', 'override', 'params', 'get', 'set', 'add', 'remove',\n        'operator', 'true', 'false', 'implicit', 'explicit', 'interface', 'enum',\n        'null', 'async', 'await', 'fixed', 'sizeof', 'stackalloc', 'unsafe', 'nameof',\n        'when'\n    ],\n    namespaceFollows: [\n        'namespace', 'using',\n    ],\n    parenFollows: [\n        'if', 'for', 'while', 'switch', 'foreach', 'using', 'catch', 'when'\n    ],\n    operators: [\n        '=', '??', '||', '&&', '|', '^', '&', '==', '!=', '<=', '>=', '<<',\n        '+', '-', '*', '/', '%', '!', '~', '++', '--', '+=',\n        '-=', '*=', '/=', '%=', '&=', '|=', '^=', '<<=', '>>=', '>>', '=>'\n    ],\n    symbols: /[=><!~?:&|+\\-*\\/\\^%]+/,\n    // escape sequences\n    escapes: /\\\\(?:[abfnrtv\\\\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,\n    // The main tokenizer for our languages\n    tokenizer: {\n        root: [\n            // identifiers and keywords\n            [/\\@?[a-zA-Z_]\\w*/, {\n                    cases: {\n                        '@namespaceFollows': { token: 'keyword.$0', next: '@namespace' },\n                        '@keywords': { token: 'keyword.$0', next: '@qualified' },\n                        '@default': { token: 'identifier', next: '@qualified' }\n                    }\n                }],\n            // whitespace\n            { include: '@whitespace' },\n            // delimiters and operators\n            [/}/, {\n                    cases: {\n                        '$S2==interpolatedstring': { token: 'string.quote', next: '@pop' },\n                        '$S2==litinterpstring': { token: 'string.quote', next: '@pop' },\n                        '@default': '@brackets'\n                    }\n                }],\n            [/[{}()\\[\\]]/, '@brackets'],\n            [/[<>](?!@symbols)/, '@brackets'],\n            [/@symbols/, {\n                    cases: {\n                        '@operators': 'delimiter',\n                        '@default': ''\n                    }\n                }],\n            // numbers\n            [/[0-9_]*\\.[0-9_]+([eE][\\-+]?\\d+)?[fFdD]?/, 'number.float'],\n            [/0[xX][0-9a-fA-F_]+/, 'number.hex'],\n            [/0[bB][01_]+/, 'number.hex'],\n            [/[0-9_]+/, 'number'],\n            // delimiter: after number because of .\\d floats\n            [/[;,.]/, 'delimiter'],\n            // strings\n            [/\"([^\"\\\\]|\\\\.)*$/, 'string.invalid'],\n            [/\"/, { token: 'string.quote', next: '@string' }],\n            [/\\$\\@\"/, { token: 'string.quote', next: '@litinterpstring' }],\n            [/\\@\"/, { token: 'string.quote', next: '@litstring' }],\n            [/\\$\"/, { token: 'string.quote', next: '@interpolatedstring' }],\n            // characters\n            [/'[^\\\\']'/, 'string'],\n            [/(')(@escapes)(')/, ['string', 'string.escape', 'string']],\n            [/'/, 'string.invalid']\n        ],\n        qualified: [\n            [/[a-zA-Z_][\\w]*/, {\n                    cases: {\n                        '@keywords': { token: 'keyword.$0' },\n                        '@default': 'identifier'\n                    }\n                }],\n            [/\\./, 'delimiter'],\n            ['', '', '@pop'],\n        ],\n        namespace: [\n            { include: '@whitespace' },\n            [/[A-Z]\\w*/, 'namespace'],\n            [/[\\.=]/, 'delimiter'],\n            ['', '', '@pop'],\n        ],\n        comment: [\n            [/[^\\/*]+/, 'comment'],\n            // [/\\/\\*/,    'comment', '@push' ],    // no nested comments :-(\n            ['\\\\*/', 'comment', '@pop'],\n            [/[\\/*]/, 'comment']\n        ],\n        string: [\n            [/[^\\\\\"]+/, 'string'],\n            [/@escapes/, 'string.escape'],\n            [/\\\\./, 'string.escape.invalid'],\n            [/\"/, { token: 'string.quote', next: '@pop' }]\n        ],\n        litstring: [\n            [/[^\"]+/, 'string'],\n            [/\"\"/, 'string.escape'],\n            [/\"/, { token: 'string.quote', next: '@pop' }]\n        ],\n        litinterpstring: [\n            [/[^\"{]+/, 'string'],\n            [/\"\"/, 'string.escape'],\n            [/{{/, 'string.escape'],\n            [/}}/, 'string.escape'],\n            [/{/, { token: 'string.quote', next: 'root.litinterpstring' }],\n            [/\"/, { token: 'string.quote', next: '@pop' }]\n        ],\n        interpolatedstring: [\n            [/[^\\\\\"{]+/, 'string'],\n            [/@escapes/, 'string.escape'],\n            [/\\\\./, 'string.escape.invalid'],\n            [/{{/, 'string.escape'],\n            [/}}/, 'string.escape'],\n            [/{/, { token: 'string.quote', next: 'root.interpolatedstring' }],\n            [/\"/, { token: 'string.quote', next: '@pop' }]\n        ],\n        whitespace: [\n            [/^[ \\t\\v\\f]*#((r)|(load))(?=\\s)/, 'directive.csx'],\n            [/^[ \\t\\v\\f]*#\\w.*$/, 'namespace.cpp'],\n            [/[ \\t\\v\\f\\r\\n]+/, ''],\n            [/\\/\\*/, 'comment', '@comment'],\n            [/\\/\\/.*$/, 'comment'],\n        ],\n    },\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbW9uYWNvLWVkaXRvci9lc20vdnMvYmFzaWMtbGFuZ3VhZ2VzL2NzaGFycC9jc2hhcnAuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW9uYWNvLWVkaXRvci9lc20vdnMvYmFzaWMtbGFuZ3VhZ2VzL2NzaGFycC9jc2hhcnAuanM/ZmNlOSJdLCJzb3VyY2VzQ29udGVudCI6WyIvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbid1c2Ugc3RyaWN0JztcbmV4cG9ydCB2YXIgY29uZiA9IHtcbiAgICB3b3JkUGF0dGVybjogLygtP1xcZCpcXC5cXGRcXHcqKXwoW15cXGBcXH5cXCFcXCNcXCRcXCVcXF5cXCZcXCpcXChcXClcXC1cXD1cXCtcXFtcXHtcXF1cXH1cXFxcXFx8XFw7XFw6XFwnXFxcIlxcLFxcLlxcPFxcPlxcL1xcP1xcc10rKS9nLFxuICAgIGNvbW1lbnRzOiB7XG4gICAgICAgIGxpbmVDb21tZW50OiAnLy8nLFxuICAgICAgICBibG9ja0NvbW1lbnQ6IFsnLyonLCAnKi8nXSxcbiAgICB9LFxuICAgIGJyYWNrZXRzOiBbXG4gICAgICAgIFsneycsICd9J10sXG4gICAgICAgIFsnWycsICddJ10sXG4gICAgICAgIFsnKCcsICcpJ10sXG4gICAgXSxcbiAgICBhdXRvQ2xvc2luZ1BhaXJzOiBbXG4gICAgICAgIHsgb3BlbjogJ3snLCBjbG9zZTogJ30nIH0sXG4gICAgICAgIHsgb3BlbjogJ1snLCBjbG9zZTogJ10nIH0sXG4gICAgICAgIHsgb3BlbjogJygnLCBjbG9zZTogJyknIH0sXG4gICAgICAgIHsgb3BlbjogJ1xcJycsIGNsb3NlOiAnXFwnJywgbm90SW46IFsnc3RyaW5nJywgJ2NvbW1lbnQnXSB9LFxuICAgICAgICB7IG9wZW46ICdcIicsIGNsb3NlOiAnXCInLCBub3RJbjogWydzdHJpbmcnLCAnY29tbWVudCddIH0sXG4gICAgXSxcbiAgICBzdXJyb3VuZGluZ1BhaXJzOiBbXG4gICAgICAgIHsgb3BlbjogJ3snLCBjbG9zZTogJ30nIH0sXG4gICAgICAgIHsgb3BlbjogJ1snLCBjbG9zZTogJ10nIH0sXG4gICAgICAgIHsgb3BlbjogJygnLCBjbG9zZTogJyknIH0sXG4gICAgICAgIHsgb3BlbjogJzwnLCBjbG9zZTogJz4nIH0sXG4gICAgICAgIHsgb3BlbjogJ1xcJycsIGNsb3NlOiAnXFwnJyB9LFxuICAgICAgICB7IG9wZW46ICdcIicsIGNsb3NlOiAnXCInIH0sXG4gICAgXSxcbiAgICBmb2xkaW5nOiB7XG4gICAgICAgIG1hcmtlcnM6IHtcbiAgICAgICAgICAgIHN0YXJ0OiBuZXcgUmVnRXhwKFwiXlxcXFxzKiNyZWdpb25cXFxcYlwiKSxcbiAgICAgICAgICAgIGVuZDogbmV3IFJlZ0V4cChcIl5cXFxccyojZW5kcmVnaW9uXFxcXGJcIilcbiAgICAgICAgfVxuICAgIH1cbn07XG5leHBvcnQgdmFyIGxhbmd1YWdlID0ge1xuICAgIGRlZmF1bHRUb2tlbjogJycsXG4gICAgdG9rZW5Qb3N0Zml4OiAnLmNzJyxcbiAgICBicmFja2V0czogW1xuICAgICAgICB7IG9wZW46ICd7JywgY2xvc2U6ICd9JywgdG9rZW46ICdkZWxpbWl0ZXIuY3VybHknIH0sXG4gICAgICAgIHsgb3BlbjogJ1snLCBjbG9zZTogJ10nLCB0b2tlbjogJ2RlbGltaXRlci5zcXVhcmUnIH0sXG4gICAgICAgIHsgb3BlbjogJygnLCBjbG9zZTogJyknLCB0b2tlbjogJ2RlbGltaXRlci5wYXJlbnRoZXNpcycgfSxcbiAgICAgICAgeyBvcGVuOiAnPCcsIGNsb3NlOiAnPicsIHRva2VuOiAnZGVsaW1pdGVyLmFuZ2xlJyB9XG4gICAgXSxcbiAgICBrZXl3b3JkczogW1xuICAgICAgICAnZXh0ZXJuJywgJ2FsaWFzJywgJ3VzaW5nJywgJ2Jvb2wnLCAnZGVjaW1hbCcsICdzYnl0ZScsICdieXRlJywgJ3Nob3J0JyxcbiAgICAgICAgJ3VzaG9ydCcsICdpbnQnLCAndWludCcsICdsb25nJywgJ3Vsb25nJywgJ2NoYXInLCAnZmxvYXQnLCAnZG91YmxlJyxcbiAgICAgICAgJ29iamVjdCcsICdkeW5hbWljJywgJ3N0cmluZycsICdhc3NlbWJseScsICdpcycsICdhcycsICdyZWYnLFxuICAgICAgICAnb3V0JywgJ3RoaXMnLCAnYmFzZScsICduZXcnLCAndHlwZW9mJywgJ3ZvaWQnLCAnY2hlY2tlZCcsICd1bmNoZWNrZWQnLFxuICAgICAgICAnZGVmYXVsdCcsICdkZWxlZ2F0ZScsICd2YXInLCAnY29uc3QnLCAnaWYnLCAnZWxzZScsICdzd2l0Y2gnLCAnY2FzZScsXG4gICAgICAgICd3aGlsZScsICdkbycsICdmb3InLCAnZm9yZWFjaCcsICdpbicsICdicmVhaycsICdjb250aW51ZScsICdnb3RvJyxcbiAgICAgICAgJ3JldHVybicsICd0aHJvdycsICd0cnknLCAnY2F0Y2gnLCAnZmluYWxseScsICdsb2NrJywgJ3lpZWxkJywgJ2Zyb20nLFxuICAgICAgICAnbGV0JywgJ3doZXJlJywgJ2pvaW4nLCAnb24nLCAnZXF1YWxzJywgJ2ludG8nLCAnb3JkZXJieScsICdhc2NlbmRpbmcnLFxuICAgICAgICAnZGVzY2VuZGluZycsICdzZWxlY3QnLCAnZ3JvdXAnLCAnYnknLCAnbmFtZXNwYWNlJywgJ3BhcnRpYWwnLCAnY2xhc3MnLFxuICAgICAgICAnZmllbGQnLCAnZXZlbnQnLCAnbWV0aG9kJywgJ3BhcmFtJywgJ3Byb3BlcnR5JywgJ3B1YmxpYycsICdwcm90ZWN0ZWQnLFxuICAgICAgICAnaW50ZXJuYWwnLCAncHJpdmF0ZScsICdhYnN0cmFjdCcsICdzZWFsZWQnLCAnc3RhdGljJywgJ3N0cnVjdCcsICdyZWFkb25seScsXG4gICAgICAgICd2b2xhdGlsZScsICd2aXJ0dWFsJywgJ292ZXJyaWRlJywgJ3BhcmFtcycsICdnZXQnLCAnc2V0JywgJ2FkZCcsICdyZW1vdmUnLFxuICAgICAgICAnb3BlcmF0b3InLCAndHJ1ZScsICdmYWxzZScsICdpbXBsaWNpdCcsICdleHBsaWNpdCcsICdpbnRlcmZhY2UnLCAnZW51bScsXG4gICAgICAgICdudWxsJywgJ2FzeW5jJywgJ2F3YWl0JywgJ2ZpeGVkJywgJ3NpemVvZicsICdzdGFja2FsbG9jJywgJ3Vuc2FmZScsICduYW1lb2YnLFxuICAgICAgICAnd2hlbidcbiAgICBdLFxuICAgIG5hbWVzcGFjZUZvbGxvd3M6IFtcbiAgICAgICAgJ25hbWVzcGFjZScsICd1c2luZycsXG4gICAgXSxcbiAgICBwYXJlbkZvbGxvd3M6IFtcbiAgICAgICAgJ2lmJywgJ2ZvcicsICd3aGlsZScsICdzd2l0Y2gnLCAnZm9yZWFjaCcsICd1c2luZycsICdjYXRjaCcsICd3aGVuJ1xuICAgIF0sXG4gICAgb3BlcmF0b3JzOiBbXG4gICAgICAgICc9JywgJz8/JywgJ3x8JywgJyYmJywgJ3wnLCAnXicsICcmJywgJz09JywgJyE9JywgJzw9JywgJz49JywgJzw8JyxcbiAgICAgICAgJysnLCAnLScsICcqJywgJy8nLCAnJScsICchJywgJ34nLCAnKysnLCAnLS0nLCAnKz0nLFxuICAgICAgICAnLT0nLCAnKj0nLCAnLz0nLCAnJT0nLCAnJj0nLCAnfD0nLCAnXj0nLCAnPDw9JywgJz4+PScsICc+PicsICc9PidcbiAgICBdLFxuICAgIHN5bWJvbHM6IC9bPT48IX4/OiZ8K1xcLSpcXC9cXF4lXSsvLFxuICAgIC8vIGVzY2FwZSBzZXF1ZW5jZXNcbiAgICBlc2NhcGVzOiAvXFxcXCg/OlthYmZucnR2XFxcXFwiJ118eFswLTlBLUZhLWZdezEsNH18dVswLTlBLUZhLWZdezR9fFVbMC05QS1GYS1mXXs4fSkvLFxuICAgIC8vIFRoZSBtYWluIHRva2VuaXplciBmb3Igb3VyIGxhbmd1YWdlc1xuICAgIHRva2VuaXplcjoge1xuICAgICAgICByb290OiBbXG4gICAgICAgICAgICAvLyBpZGVudGlmaWVycyBhbmQga2V5d29yZHNcbiAgICAgICAgICAgIFsvXFxAP1thLXpBLVpfXVxcdyovLCB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2VzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAnQG5hbWVzcGFjZUZvbGxvd3MnOiB7IHRva2VuOiAna2V5d29yZC4kMCcsIG5leHQ6ICdAbmFtZXNwYWNlJyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BrZXl3b3Jkcyc6IHsgdG9rZW46ICdrZXl3b3JkLiQwJywgbmV4dDogJ0BxdWFsaWZpZWQnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGRlZmF1bHQnOiB7IHRva2VuOiAnaWRlbnRpZmllcicsIG5leHQ6ICdAcXVhbGlmaWVkJyB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XSxcbiAgICAgICAgICAgIC8vIHdoaXRlc3BhY2VcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0B3aGl0ZXNwYWNlJyB9LFxuICAgICAgICAgICAgLy8gZGVsaW1pdGVycyBhbmQgb3BlcmF0b3JzXG4gICAgICAgICAgICBbL30vLCB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2VzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAnJFMyPT1pbnRlcnBvbGF0ZWRzdHJpbmcnOiB7IHRva2VuOiAnc3RyaW5nLnF1b3RlJywgbmV4dDogJ0Bwb3AnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAnJFMyPT1saXRpbnRlcnBzdHJpbmcnOiB7IHRva2VuOiAnc3RyaW5nLnF1b3RlJywgbmV4dDogJ0Bwb3AnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGRlZmF1bHQnOiAnQGJyYWNrZXRzJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfV0sXG4gICAgICAgICAgICBbL1t7fSgpXFxbXFxdXS8sICdAYnJhY2tldHMnXSxcbiAgICAgICAgICAgIFsvWzw+XSg/IUBzeW1ib2xzKS8sICdAYnJhY2tldHMnXSxcbiAgICAgICAgICAgIFsvQHN5bWJvbHMvLCB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2VzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAnQG9wZXJhdG9ycyc6ICdkZWxpbWl0ZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BkZWZhdWx0JzogJydcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1dLFxuICAgICAgICAgICAgLy8gbnVtYmVyc1xuICAgICAgICAgICAgWy9bMC05X10qXFwuWzAtOV9dKyhbZUVdW1xcLStdP1xcZCspP1tmRmREXT8vLCAnbnVtYmVyLmZsb2F0J10sXG4gICAgICAgICAgICBbLzBbeFhdWzAtOWEtZkEtRl9dKy8sICdudW1iZXIuaGV4J10sXG4gICAgICAgICAgICBbLzBbYkJdWzAxX10rLywgJ251bWJlci5oZXgnXSxcbiAgICAgICAgICAgIFsvWzAtOV9dKy8sICdudW1iZXInXSxcbiAgICAgICAgICAgIC8vIGRlbGltaXRlcjogYWZ0ZXIgbnVtYmVyIGJlY2F1c2Ugb2YgLlxcZCBmbG9hdHNcbiAgICAgICAgICAgIFsvWzssLl0vLCAnZGVsaW1pdGVyJ10sXG4gICAgICAgICAgICAvLyBzdHJpbmdzXG4gICAgICAgICAgICBbL1wiKFteXCJcXFxcXXxcXFxcLikqJC8sICdzdHJpbmcuaW52YWxpZCddLFxuICAgICAgICAgICAgWy9cIi8sIHsgdG9rZW46ICdzdHJpbmcucXVvdGUnLCBuZXh0OiAnQHN0cmluZycgfV0sXG4gICAgICAgICAgICBbL1xcJFxcQFwiLywgeyB0b2tlbjogJ3N0cmluZy5xdW90ZScsIG5leHQ6ICdAbGl0aW50ZXJwc3RyaW5nJyB9XSxcbiAgICAgICAgICAgIFsvXFxAXCIvLCB7IHRva2VuOiAnc3RyaW5nLnF1b3RlJywgbmV4dDogJ0BsaXRzdHJpbmcnIH1dLFxuICAgICAgICAgICAgWy9cXCRcIi8sIHsgdG9rZW46ICdzdHJpbmcucXVvdGUnLCBuZXh0OiAnQGludGVycG9sYXRlZHN0cmluZycgfV0sXG4gICAgICAgICAgICAvLyBjaGFyYWN0ZXJzXG4gICAgICAgICAgICBbLydbXlxcXFwnXScvLCAnc3RyaW5nJ10sXG4gICAgICAgICAgICBbLygnKShAZXNjYXBlcykoJykvLCBbJ3N0cmluZycsICdzdHJpbmcuZXNjYXBlJywgJ3N0cmluZyddXSxcbiAgICAgICAgICAgIFsvJy8sICdzdHJpbmcuaW52YWxpZCddXG4gICAgICAgIF0sXG4gICAgICAgIHF1YWxpZmllZDogW1xuICAgICAgICAgICAgWy9bYS16QS1aX11bXFx3XSovLCB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2VzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAnQGtleXdvcmRzJzogeyB0b2tlbjogJ2tleXdvcmQuJDAnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGRlZmF1bHQnOiAnaWRlbnRpZmllcidcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1dLFxuICAgICAgICAgICAgWy9cXC4vLCAnZGVsaW1pdGVyJ10sXG4gICAgICAgICAgICBbJycsICcnLCAnQHBvcCddLFxuICAgICAgICBdLFxuICAgICAgICBuYW1lc3BhY2U6IFtcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0B3aGl0ZXNwYWNlJyB9LFxuICAgICAgICAgICAgWy9bQS1aXVxcdyovLCAnbmFtZXNwYWNlJ10sXG4gICAgICAgICAgICBbL1tcXC49XS8sICdkZWxpbWl0ZXInXSxcbiAgICAgICAgICAgIFsnJywgJycsICdAcG9wJ10sXG4gICAgICAgIF0sXG4gICAgICAgIGNvbW1lbnQ6IFtcbiAgICAgICAgICAgIFsvW15cXC8qXSsvLCAnY29tbWVudCddLFxuICAgICAgICAgICAgLy8gWy9cXC9cXCovLCAgICAnY29tbWVudCcsICdAcHVzaCcgXSwgICAgLy8gbm8gbmVzdGVkIGNvbW1lbnRzIDotKFxuICAgICAgICAgICAgWydcXFxcKi8nLCAnY29tbWVudCcsICdAcG9wJ10sXG4gICAgICAgICAgICBbL1tcXC8qXS8sICdjb21tZW50J11cbiAgICAgICAgXSxcbiAgICAgICAgc3RyaW5nOiBbXG4gICAgICAgICAgICBbL1teXFxcXFwiXSsvLCAnc3RyaW5nJ10sXG4gICAgICAgICAgICBbL0Blc2NhcGVzLywgJ3N0cmluZy5lc2NhcGUnXSxcbiAgICAgICAgICAgIFsvXFxcXC4vLCAnc3RyaW5nLmVzY2FwZS5pbnZhbGlkJ10sXG4gICAgICAgICAgICBbL1wiLywgeyB0b2tlbjogJ3N0cmluZy5xdW90ZScsIG5leHQ6ICdAcG9wJyB9XVxuICAgICAgICBdLFxuICAgICAgICBsaXRzdHJpbmc6IFtcbiAgICAgICAgICAgIFsvW15cIl0rLywgJ3N0cmluZyddLFxuICAgICAgICAgICAgWy9cIlwiLywgJ3N0cmluZy5lc2NhcGUnXSxcbiAgICAgICAgICAgIFsvXCIvLCB7IHRva2VuOiAnc3RyaW5nLnF1b3RlJywgbmV4dDogJ0Bwb3AnIH1dXG4gICAgICAgIF0sXG4gICAgICAgIGxpdGludGVycHN0cmluZzogW1xuICAgICAgICAgICAgWy9bXlwie10rLywgJ3N0cmluZyddLFxuICAgICAgICAgICAgWy9cIlwiLywgJ3N0cmluZy5lc2NhcGUnXSxcbiAgICAgICAgICAgIFsve3svLCAnc3RyaW5nLmVzY2FwZSddLFxuICAgICAgICAgICAgWy99fS8sICdzdHJpbmcuZXNjYXBlJ10sXG4gICAgICAgICAgICBbL3svLCB7IHRva2VuOiAnc3RyaW5nLnF1b3RlJywgbmV4dDogJ3Jvb3QubGl0aW50ZXJwc3RyaW5nJyB9XSxcbiAgICAgICAgICAgIFsvXCIvLCB7IHRva2VuOiAnc3RyaW5nLnF1b3RlJywgbmV4dDogJ0Bwb3AnIH1dXG4gICAgICAgIF0sXG4gICAgICAgIGludGVycG9sYXRlZHN0cmluZzogW1xuICAgICAgICAgICAgWy9bXlxcXFxcIntdKy8sICdzdHJpbmcnXSxcbiAgICAgICAgICAgIFsvQGVzY2FwZXMvLCAnc3RyaW5nLmVzY2FwZSddLFxuICAgICAgICAgICAgWy9cXFxcLi8sICdzdHJpbmcuZXNjYXBlLmludmFsaWQnXSxcbiAgICAgICAgICAgIFsve3svLCAnc3RyaW5nLmVzY2FwZSddLFxuICAgICAgICAgICAgWy99fS8sICdzdHJpbmcuZXNjYXBlJ10sXG4gICAgICAgICAgICBbL3svLCB7IHRva2VuOiAnc3RyaW5nLnF1b3RlJywgbmV4dDogJ3Jvb3QuaW50ZXJwb2xhdGVkc3RyaW5nJyB9XSxcbiAgICAgICAgICAgIFsvXCIvLCB7IHRva2VuOiAnc3RyaW5nLnF1b3RlJywgbmV4dDogJ0Bwb3AnIH1dXG4gICAgICAgIF0sXG4gICAgICAgIHdoaXRlc3BhY2U6IFtcbiAgICAgICAgICAgIFsvXlsgXFx0XFx2XFxmXSojKChyKXwobG9hZCkpKD89XFxzKS8sICdkaXJlY3RpdmUuY3N4J10sXG4gICAgICAgICAgICBbL15bIFxcdFxcdlxcZl0qI1xcdy4qJC8sICduYW1lc3BhY2UuY3BwJ10sXG4gICAgICAgICAgICBbL1sgXFx0XFx2XFxmXFxyXFxuXSsvLCAnJ10sXG4gICAgICAgICAgICBbL1xcL1xcKi8sICdjb21tZW50JywgJ0Bjb21tZW50J10sXG4gICAgICAgICAgICBbL1xcL1xcLy4qJC8sICdjb21tZW50J10sXG4gICAgICAgIF0sXG4gICAgfSxcbn07XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/monaco-editor/esm/vs/basic-languages/csharp/csharp.js\n");

/***/ })

}]);