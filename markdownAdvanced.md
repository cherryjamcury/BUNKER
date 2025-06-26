# Extended Syntax 

## Advanced features that build on the basic Markdown syntax.

[ggg](#my-id)
## Tables
- ### Aligment
You can align text in the columns to the left, right, or center by adding a colon (:) to the left, right, or on both side of the hyphens within the header row.
| Syntax|Description|Test Text|
| :---|:----:|---: |
| Header|Title|Here's this|
| Paragraph| Text|And more|

- ### Formatting Text in Tables
You can format the text within tables. For example, you can add links, code (words or phrases in backticks (`) only, not code blocks), and emphasis.

| Syntax|Description|Test Text|
| :---|:----:|---: |
| Header|Title|Here's this|
| [Paragraph]()| **Text**| `And more`|

## Escaping Pipe Characters in Tables
You can display a pipe (|) character in a table by using its HTML character code `(&#124;)`.  
H&#124;E&#124;L&#124;L&#124;O

## Fenced Code Blocks
The basic Markdown syntax allows you to create code blocks by indenting lines by four spaces or one tab. If you find that inconvenient, try using fenced code blocks. Depending on your Markdown processor or editor, you’ll use three backticks (```) or three tildes (~~~) on the lines before and after the code block. The best part? You don’t have to indent any lines!


```
{
    "firstName": "John",
    "lastName": "Smith",
    "age": 25
}
```


##Footnotes
Here is the first note.[^a] And here is another.[^b]

[^a]: Footnote A content.
[^b]: Footnote B content.
 
## My Heading {#my-id}


## Using Emoji Shortcodes
[list of emoji shortcodes](https://gist.github.com/rxaviers/7360908)
Gone camping! :tent: Be back soon.

That is so funny! :joy:



## Automatic URL Linking 
http://www.example.com
## Disabling Automatic URL Linking 
`http://www.example.com`

## Superscript
X^2^ or X<sup>2</sup>

## Subscript
H~2~O or H<sub>2</sub>O

## Highlight 
I need to highlight these ==very important words==. or     I need to highlight these <mark>very important words</mark>.

## Definition Lists 
First Term
: This is the definition of the first term.

Second Term
: This is one definition of the second term.
: This is another definition of the second term.
### My Great Heading {#custom-id}
<h3 id="custom-id">My Great Heading</h3>
[Heading IDs](#heading-ids)
<a href="#heading-ids">Heading IDs</a>

The Moon landing happened in 1969 [NASA](https://nasa.gov/apollo11).


Here is a simple sentence with a footnote.[^1]

[^1]: This is the footnote text that provides more detail or a citation.
## Table of Contents

1. [🍕 Food](##food)
2. [👗 Dress](##dress)
3. [🎮 Games](##games)

---



























## 🍕 Food
This section is about food.

## 👗 Dress
This section is about clothes.

## 🎮 Games
This section is about games.
