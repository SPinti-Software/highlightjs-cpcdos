# Cpcdos Syntax for `highlight.js`

![Commit](https://img.shields.io/github/last-commit/SPinti-Software/highlightjs-cpcdos?style=for-the-badge)
![Open Issue](https://img.shields.io/github/issues-raw/SPinti-Software/highlightjs-cpcdos?style=for-the-badge)
![License](https://img.shields.io/github/license/SPinti-Software/highlightjs-cpcdos?style=for-the-badge)

## What is Cpcdos?

### Preamble

Cpcdos is a co-kernel made primarilly for beginners in the OS development world without having to necessarily know low-level programming. By implementing a language called Cpcdos C+, developers can quickly write programs and tools and essentially make a full distribution out of it.

Resources about the operating system, tests, tutorials, etc. may be found [here](https://www.youtube.com/user/cpcdososx).

### Implementation

Cpcdos sits on top of a DPMI server for the moment, although progress on independent code has been made during the last couple of years. The DPMI server is used mainly for filesystem operations, networking & video display. 

### Example Code Snippet

See [/test/detect/default.txt](/test/detect/default.txt) for an example code snippet.

You can test the syntax highlighting by including both the `highlight.js` library and this module in a page as follows:
```html
<script type="text/javascript" src="/lib/highlight.min.js"></script>
<script type="text/javascript" src="/lib/cpc-highlight.min.js"></script>
<script type="text/javascript">
  hljs.initHighlightingOnLoad();
  // ...
</script>
```

Depending on the layout of your website or application, the specified paths in the above code block may be different.
Refer to the [`highlight.js` documentation](https://highlightjs.org/usage/) for more details on how to use this library.

### Website

For more information, visit the [website](https://cpcdos.net/en).

## What is `highlight.js`?

[`highlight.js`](https://github.com/highlightjs/highlight.js) is a syntax highlighter written in JavaScript. It works in a browser as well as on a server. It has automatic language detection and doesn’t depend on any framework.

### Main Contributors

The following developers have contributed to this project:

| Developer Name                                            | Description                                                  |
|-----------------------------------------------------------|--------------------------------------------------------------|
| [0v3rl0w](https://github.com/0v3rl0w)                     | Code and initial `README.md`                                 |
| [alexbelm48](https://github.com/alexbelm48)               | `README.md` completion                                       |

