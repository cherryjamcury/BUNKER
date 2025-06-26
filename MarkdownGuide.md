# Markdown syntax guide 
## Headers 

# Heading 1 
## Heading 2 
### Heading 3 
#### Heading 4
##### Heading 5
###### Heading 6

## Emphasis
*Italic* or _Italic_
**Bold** or __Bold__
Love**is**bold
~~strikethrough~~

## Blockquotes
> This is a blockquote 
>> Nested blockquote 
>>> Nested blockquote

## Lists (*Unordered List*)
- Item 1 
- Item 2 
 - Item 2-1
  * Item 3

## Lists (*Ordered List)
1. First Item 
2. Second Item 
   1. Subitem 1
   2. Subitem 2

## Inline code
Use `console.log()` to print.

## Horizontal Rule 
___ 
or
***
## Line Breaks
To create a line break or new line `(<br>)`,   
end a line with two or more spaces,   
and then type return.

## Links
[OpenAI](https://openai.com) 

## Images 
![Image](https://s3.amazonaws.com/images.seroundtable.com/google-images-1548419288.jpg)

## Linking Images 
[![Image](https://s3.amazonaws.com/images.seroundtable.com/google-images-1548419288.jpg)](https://s3.amazonaws.com/images.seroundtable.com/google-images-1548419288.jpg)

## Tables 
|A       |B       |C       |
|--------|--------|--------|
|content |content |content |

## Task Lists 
- [ ] Finish Project 
- [X] Submit report 
- [ ] Drink Coffee 

## HTML in markdown 
<b>Bold with HTML</b>
<p style= "color: red;">Red Text</p>
<button>Button</button>

## Escaping Characters
\*This will not be italic\*

## Markdown Tips 
- Save your file with .md extension (e.g. `README.md`)

- Preview using:

   - VS Code (with Markdown plugins)

   - GitHub or GitLab

   - `glow` in terminal

   - `pandoc` to convert to HTML/PDF
   - You can convert Markdown to other formats using `pandoc file.md -o file.html`

   