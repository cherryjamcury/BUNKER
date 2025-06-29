# Markdown syntax guide (*Extended*)[^1][^2][^3]

<details>
<summary>Markdown Extended</summary>

Content Table 
- [Table](#extended-01)
- [Highlighting](#extended-02)
- [Subscript, Superscript, Highlight](#extended-03)
- [Definition Lists](#extended-04)
- [Footnotes](#extended-05)
- [Heading IDs, Linking to Heading IDs](#extended-06)
</details>

## Table{#extended-01}
Table content can be aligned to the left, right, or center by adding a colon ( : ) as shown below
```
| Syntax      | Description | Test Text     |
| :---        |    :----:   |          ---: |
| Header      | Title       | Here's this   |
| Paragraph   | Text        | And more      |
```
Output 
| Syntax      | Description | Test Text     |
| :---        |    :----:   |          ---: |
| Header      | Title       | Here's this   |
| Paragraph   | Text        | And more      |
---
## Syntax Highlighting in Markdown {#extended-02}

Many Markdown processors support **syntax highlighting** for fenced code blocks.  
This feature adds color-coded formatting based on the programming language you specify, making your code easier to read and understand.

To add syntax highlighting, specify the **language name** immediately after the opening triple backticks of your fenced code block, like this:

````markdown
```language 
Your code here
```
````
When you do this, the Markdown renderer applies the appropriate syntax highlighting rules for that language.
```markdown
```js
// JavaScript example
const greet = (name) => {
  console.log("Hello " + name);
};
greet("World");
```
```
Output 
```js
// JavaScript example
const greet = (name) => {
  console.log("Hello " + name);
};
greet("World");
```
Supported Languages
Below is a list of common languages and their corresponding tags you can use to enable syntax highlighting:
| Language     | Language Tag(s)       |
| ------------ | --------------------- |
| JavaScript   | `javascript`, `js`    |
| Python       | `python`, `py`        |
| HTML         | `html`                |
| CSS          | `css`                 |
| JSON         | `json`                |
| Bash / Shell | `bash`, `sh`, `shell` |
| C            | `c`                   |
| C++          | `cpp`, `c++`          |
| Java         | `java`                |
| Ruby         | `ruby`, `rb`          |
| PHP          | `php`                 |
| SQL          | `sql`                 |
| YAML         | `yaml`, `yml`         |
| Markdown     | `markdown`            |
| TypeScript   | `typescript`, `ts`    |
| Rust         | `rust`                |
| Go           | `go`                  |
| Swift        | `swift`               |
| Perl         | `perl`                |
| Kotlin       | `kotlin`              |
| Dockerfile   | `dockerfile`          |
---
 ## Subscript, Superscript, Highlight, Strikethrough{#extended-03}
 |Feature|Markdown|HTML|Rendered Output|
 |----|----|----|----|
 |Strikethrough|`~~Strikethrough~~`|&lt;del&gt;Strikethrough&lt;/del&gt;|~~Strikethrough~~|
 |Highlight|`===Highlight==`|&lt;mark&gt;Highlight&lt;/mark&gt;|==Highlight==|
 |Subscript|`H~2~O`|H&lt;sub&gt;2&lt;/sub&gt;O|H~2~O|
 |Superscript|`X^2^`|X&lt;sup&gt;2&lt;/sup&gt;|X^2^|
---

## Definition Lists{#extended-04}
```markdown
markdown

First Term
: This is the definition of the first term.

Second Term
: This is one definition of the second term.
: This is another definition of the second term.
```
```html
html 
<dl>
  <dt>First Term</dt>
  <dd>This is the definition of the first term.</dd>
  <dt>Second Term</dt>
  <dd>This is one definition of the second term. </dd>
  <dd>This is another definition of the second term.</dd>
</dl>
```

Output

First Term
: This is the definition of the first term.

Second Term
: This is one definition of the second term.
: This is another definition of the second term.
---
## Footnotes{#extended-05}
Footnotes allow you to add notes and references without cluttering the body of the document. When you create a footnote, a superscript number with a link appears where you added the footnote reference. Readers can click the link to jump to the content of the footnote at the bottom of the page.

To create a footnote reference, add a caret and an identifier inside brackets (`[^1]`). Identifiers can be numbers or words, but they can’t contain spaces or tabs. Identifiers only correlate the footnote reference with the footnote itself — in the output, footnotes are numbered sequentially.

Add the footnote using another caret and number inside brackets with a colon and text (`[^1]`: My footnote.). You don’t have to put footnotes at the end of the document. You can put them anywhere except inside other elements like lists, block quotes, and tables.

```markdown
markdown 

# Markdown syntax guide (*Extended*)[^1][^2][^3]
[^1]: Extended syntax: https://www.markdownguide.org/extended-syntax/
[^2]: Escaping characters: https://github.com/mattcone/markdown-guide/blob/master/_basic-syntax/escaping-characters.md
[^3]: List of emoji shortcodes: https://gist.github.com/rxaviers/7360908
```

Output 
# Markdown syntax guide (*Extended*)[^1][^2][^3]
[^1]: Extended syntax: https://www.markdownguide.org/extended-syntax/
[^2]: Escaping characters: https://github.com/mattcone/markdown-guide/blob/master/_basic-syntax/escaping-characters.md
[^3]: List of emoji shortcodes: https://gist.github.com/rxaviers/7360908
---
## Heading IDs, Linking to Heading IDs{#extended-06}
Many Markdown processors support custom IDs for headings — some Markdown processors automatically add them. Adding custom IDs allows you to link directly to headings and modify them with CSS. To add a custom heading ID, enclose the custom ID in curly braces on the same line as the heading.
```markdown
markdown 

### My Great Heading {#custom-id}
```

```html
html 

<h3 id="custom-id">My Great Heading</h3>
```

Output 
### My Great Heading {#custom-id}

You can link to headings with custom IDs in the file by creating a standard link with a number sign (#) followed by the custom heading ID. These are commonly referred to as anchor links.

|Markdown|HTML| Rendered Output| 
|---|---|---|
`[Heading IDs](#custom-id)`|&lt;a href = "#custom-id"&gt;Heading IDs&lt;/a&gt;|[Heading IDs](#custom-id)|



Other websites can link to the heading by adding the custom heading ID to the full URL of the webpage<br>`(e.g, [Heading IDs](https://www.markdownguide.org/extended-syntax#heading-ids))`.

---
 ## Emoji{#extended-07}
There are two ways to add emoji to Markdown files: *copy and paste* the emoji into your Markdown-formatted text, or type *emoji shortcodes*. 

Copying and Pasting Emoji
In most cases, you can simply copy an emoji from a source like [Emojipedia](https://emojipedia.org/) and paste it into your document. Many Markdown applications will automatically display the emoji in the Markdown-formatted text. The HTML and PDF files you export from your Markdown application should display the emoji.

Using Emoji Shortcodes
Some Markdown applications allow you to insert emoji by typing emoji shortcodes. These begin and end with a colon and include the name of an emoji.

```markdown 
markdown 

Gone camping! :tent: Be back soon.

That is so funny! :joy:
```

Output 

Gone camping! :tent: Be back soon.

That is so funny! :joy:

You can use this list of emoji shortcodes[^3], but keep in mind that emoji shortcodes vary from application to application. Refer to your Markdown application's documentation for more information.













