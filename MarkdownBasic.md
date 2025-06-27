# Markdown syntax guide (*Basic*)[^1][^2]
[^1]: Main syntax: https://www.markdownguide.org/basic-syntax/
[^2]: Escaping characters: https://github.com/mattcone/markdown-guide/blob/master/_basic-syntax/escaping-characters.md


<details>
<summary>Markdown Basic</summary>

Content Table 
- [Heading](#Basic-01)
- [Emphasis](#Basic-02)
- [Blockquotes](#Basic-03)
- [Lists](#Basic-04)
- [Inline code](#Basic-05)
- [Horizontal Rule](#Basic-06)
- [Line Breaks](#Basic-07)
- [Links](#Basic-08)
- [Images](#Basic-09)
- [Linking Images](#Basic-10)
- [Tables](#Basic-11)
- [HTML in markdown](#Basic-12)
- [Escaping Characters](#Basic-13)
- [Markdown Tips](#Basic-14)
</details>

## Heading{#Basic-01}
| Markdown |HTML| Rendered Output |
|---|---|---|
| # Heading|&lt;h1&gt;Heading&lt;/h1&gt;|<h1>Heading</h1>|
| ## Heading|&lt;h2&gt;Heading&lt;/h2&gt;|<h2>Heading</h2>|
| ### Heading|&lt;h3&gt;Heading&lt;/h3&gt;|<h3>Heading</h3>|
| #### Heading|&lt;h4&gt;Heading&lt;/h4&gt;|<h4>Heading</h4>|
| ##### Heading|&lt;h5&gt;Heading&lt;/h5&gt;|<h5>Heading</h5>|
| ###### Heading|&lt;h6&gt;Heading&lt;h6&gt;|<h6>Heading</h6>|
---

## Emphasis{#Basic-02}
|Markdown |HTML| rendered Output|
|---|---|---|
|\*Italic\*|&lt;em&gt;Italic&lt;em&gt;|*Italic*|
|\_Italic\_|&lt;em&gt;Italic&lt;em&gt;|_Italic_|
|\*\*Bold\*\*|&lt;strong&gt;Bold&lt;/strong&gt;|**Bold**|
|\_\_Bold\_\_|&lt;strong&gt;Bold&lt;/strong&gt;|__Bold__|
|\~\~Strikethrough\~\~|&lt;s&gt;Strikethrough&lt;/s&gt;   or &lt;del&gt;Strikethrough&lt;/del&gt;|~~Strikethrough~~|
---

## Blockquotes{#Basic-03}
|Markdown| HTML| Rendered Output|
|---|---|---|
|`> BlockQuote`| &lt;blockquote&gt;<br>&nbsp;&nbsp;&nbsp;Blockquote<br>&lt;/blockquote&gt;|<blockquote>Blockquote</blockquote>|
|`> Outer`<br>`>> Inner`<br>`>>> Deepest`|&lt;blockquote&gt;<br>&nbsp;&nbsp;Outer<br>&nbsp;&nbsp;&lt;blockquote&gt;<br>&nbsp;&nbsp;&nbsp;&nbsp;Inner<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;blockquote&gt;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Deepest<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;/blockquote&gt;<br>&nbsp;&nbsp;&lt;/blockquote&gt;<br>&lt;/blockquote&gt;| <pre><blockquote> Outer <blockquote> Inner <blockquote> Deepest </blockquote> </blockquote> </blockquote>  </pre>|
---
## Lists{#Basic-04}
*Unordered List*
|Markdown|HTML|Rendered Output|
|---|---|---|
|- Item 1<br>- Item 2<br>&nbsp;&nbsp;&nbsp;&nbsp;- Item 2-1|&lt;ul&gt;<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;li&gt;Item 1&lt;/li&gt;<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;li&gt;Item 2<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;ul&gt;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;li&gt;Item 2-1&lt;/li&gt;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/ul&gt;<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;/li&gt;<br>&lt;/ul&gt; |<ul><li>Item 1</li><li>Item 2<ul><li>Item 2-1</li></ul></li></ul>|

*Ordered List*
|Markdown|HTML|Rendered Output|
|---|---|---|
|1. Item 1<br>2. Item 2<br>&nbsp;&nbsp;&nbsp;&nbsp;1. Item 2-1|&lt;ol&gt;<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;li&gt;Item 1&lt;/li&gt;<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;li&gt;Item 2<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;ol&gt;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;li&gt;Item 2-1&lt;/li&gt;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/ol&gt;<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;/li&gt;<br>&lt;/ol&gt; |<ol><li>Item 1</li><li>Item 2<ol><li>Item 2-1</li></ol></li></ol>|
---


## Inline code{#Basic-05}
|Markdown|HTML|Rendered Output|
|---|---|---|
|\`console.log(Inline Code)\`|&lt;code&gt;console.log(Inline Code)&lt;/code&gt;|<code>console.log(Inline Code)</code>|
---
## Horizontal Rule{#Basic-06}
|Markdown|HTML|Rendered Output|
|---|---|---|
|\-\-\- (dash x3) |&lt;hr&gt;|<hr>|
|\*\*\* (asterisk x3)|&lt;hr&gt;|<hr>|
|\_\_\_ (underscore x3)|&lt;hr&gt;|<hr>|
---

## Line Breaks{#Basic-07}

> Hard Line Break with 2+ Spaces + Enter
First Line  
Second Line. 

>Use `<br>` HTML Tag
First Line<br>Second Line
---
## Links{#Basic-08}
|Markdown|HTML|Rendered Output|
|---|---|---|
|`[OpenAI](https://openai.com)`|&lt;a href = "https://openai.com"&gt;OpenAI&lt;/a&gt;|[OpenAi](https://openai.com)|
---
## Images{#Basic-09}
|Markdown|HTML|Rendered Output|
|---|---|---|
|`![Image](https://s3.amazonaws.com/images.seroundtable.com/google-images-1548419288.jpg)`|&lt;img src "URL" alt="description" &gt;|![Image](https://s3.amazonaws.com/images.seroundtable.com/google-images-1548419288.jpg)|
---
## Linking Images{#Basic-10} 
|Markdown|HTML|Rendered Output|
|---|---|---|
|`[![OpenAI Logo](https://openai.com/favicon.ico)](https://openai.com)`|&lt;a href="https://openai.com"&gt;&lt;img src="https://openai.com/favicon.ico" alt="OpenAI Logo"&gt;&lt;/a&gt;|[![OpenAI Logo](https://openai.com/favicon.ico)](https://openai.com)|
---

## Tables{#Basic-11}
```
Markdown

|Header 1|Header 2|
|--------|--------|
|Row 1, Cell 1|Row 1, Cell 2|
|Row 2, Cell 1|Row 2, Cell 2|
```
Otput
|Header 1|Header 2|
|--------|--------|
|Row 1, Cell 1|Row 1, Cell 2|
|Row 2, Cell 1|Row 2, Cell 2|

```
HTML

<table>
  <tr>
    <th>Header 1</th>
    <th>Header 2</th>
  </tr>
  <tr>
    <td>Row 1, Cell 1</td>
    <td>Row 1, Cell 2</td>
  </tr>
  <tr>
    <td>Row 2, Cell 1</td>
    <td>Row 2, Cell 2</td>
  </tr>
</table>
```
Output 
<table>
  <tr>
    <th>Header 1</th>
    <th>Header 2</th>
  </tr>
  <tr>
    <td>Row 1, Cell 1</td>
    <td>Row 1, Cell 2</td>
  </tr>
  <tr>
    <td>Row 2, Cell 1</td>
    <td>Row 2, Cell 2</td>
  </tr>
</table>

---
Markdown
```
Task Lists 
- [ ] Finish Project 
  - [X] Submit report 
  - [ ] Drink Coffee 
```
Output 
Task Lists 
- [ ] Finish Project 
  - [X] Submit report 
  - [ ] Drink Coffee 

```
HTML
<ul>
  <li><input type="checkbox">Finish Project</li>
  <ul>
  <li><input type="checkbox" checked>Submit Report</li>
  <li><input type="checkbox">Drink Coffee</li>
  </ul>
</ul>
```
Output 
<ul style = "list-style-type:none;">
  <li><input type="checkbox">Finish Project</li>
  <ul style = "list-style-type: none">
  <li><input type="checkbox" checked>Submit Report</li>
  <li><input type="checkbox">Drink Coffee</li>
  </ul>
</ul>

---
## HTML in markdown{#Basic-12}
```
<b>Bold with HTML</b>
<p style= "color: red;">Red Text</p>
<button>Button</button>  
```
Output
<b>Bold with HTML</b>
<p style= "color: red;">Red Text</p>
<button>Button</button> 

---

## Escaping Characters{#Basic-13}
| Character | Name                  | HTML Entity | Expression             | With Escaping         | Without              |
|-----------|-----------------------|-------------|------------------------|------------------------|----------------------|
| \\        | Backslash             | `&#92;`     | \\a\\                  | \a\                    | a\                   |
| \`        | Backtick              | `&#96;`     | \`code\`               | `code`                | code (inline code)   |
| \*        | Asterisk              | `&#42;`     | \*text\*               | *text* (as-is)        | *text* (italic)      |
| \_        | Underscore            | `&#95;`     | \_text\_               | _text_ (as-is)        | _text_ (italic)      |
| \{        | Curly brace (open)    | `&#123;`    | \{example\}            | {example}             | {example}            |
| \}        | Curly brace (close)   | `&#125;`    | \{example\}            | {example}             | {example}            |
| \[        | Square bracket (open) | `&#91;`     | \[ link \]               | [link]                | link (link syntax)   |
| \]        | Square bracket (close)| `&#93;`     | \[link\]               | [link]                | link (link syntax)   |
| \<        | Angle bracket (lt)    | `&lt;`      | \<div\>                | <div>                 | HTML tag             |
| \>        | Angle bracket (gt)    | `&gt;`      | \> note                | > note                | Blockquote           |
| \#        | Pound / hash          | `&#35;`     | \# Heading             | # Heading             | Heading              |
| \+        | Plus sign             | `&#43;`     | \+ Item                | + Item                | List item            |
| \-        | Minus / dash          | `&#45;`     | \- Item                | - Item                | List item            |
| \.        | Dot / period          | `&#46;`     | 1\. Item               | 1. Item               | Ordered list         |
| \!        | Exclamation mark      | `&#33;`     | \!Alert                | !Alert                | Image syntax start   |
| \|        | Pipe / vertical bar   | `&#124;`    | Column A \| Column B   | Column A \| Column B  | Table split          |
---

## Markdown Tips{#Basic-14} 
- Save your file with .md extension (e.g. `README.md`)

- Preview using:

   - VS Code (with Markdown plugins)

   - GitHub or GitLab

   - `glow` in terminal

   - `pandoc` to convert to HTML/PDF
   - You can convert Markdown to other formats using `pandoc file.md -o file.html`


   
