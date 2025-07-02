## Intro into Mermaid :mermaid:

To render Mermaid in Vs Code we need to install an exptansion for it.  I use Markdown prewien. jist find it in extension bar in yur vs code 

Good 
Now weee nedd documetantation 
here is the page with fdocumentations, tutorials, examples etc 
[Mermaid :mermaid:](https://mermaid.js.org/syntax/flowchart.html)

Step 1
Build a node 
```markdown 

```mermaid 
title: Node 
flowchart LR
id 
```
```

Output 

```mermaid 
---
title: Node
---

flowchart LR
id
name
```

```mermaid 
---
title: Node
---

graph LR
id
name
```

```mermaid 
---
config:
  flowchart:
    htmlLabels: false
---
flowchart LR
    markdown["`This **is** _Markdown_`"]
    newLines["`Line1
    Line 2
    Line 3`"]
    markdown --> newLines

```

## Node(default)

```mermaid
flowchart TD
id["Simple Node"]
```

## Nod's shape 
A node with round edges
```mermaid 
flowchart LR
    id1(This is the text in the box)
```

A stadium-shaped node
```mermaid
flowchart LR
    id1([This is the text in the box])
```

A node in a subroutine shape
```mermaid
flowchart LR
    id1[[This is the text in the box]]
```

A node in a cylindrical shape
```mermaid
flowchart LR
    id1[(Database)]
```

A node in the form of a circle
```mermaid
flowchart LR
    id1((This is the text in the circle))
```

A node in an asymmetric shape
```mermaid
flowchart LR
    id1>This is the text in the box]
```

A node (rhombus)
```mermaid
flowchart LR
    id1{This is the text in the box}
```

A hexagon node
```mermaid
flowchart LR
    id1{{This is the text in the box}}
```

Parallelogram
```mermaid
flowchart TD
    id1[/This is the text in the box/]
```

Parallelogram alt
```mermaid
flowchart TD
    id1[\This is the text in the box\]
```

Trapezoid
```mermaid
flowchart TD
    A[/Christmas\]
```

Trapezoid alt
```mermaid
flowchart TD
    B[\Go shopping/]
```

Double circle
```mermaid
flowchart TD
    id1(((This is the text in the circle)))
```

Expanded Node Shapes in Mermaid Flowcharts (v11.3.0+)
Mermaid introduces 30 new shapes to enhance the flexibility and precision of flowchart creation. These new shapes provide more options to represent processes, decisions, events, data storage visually, and other elements within your flowcharts, improving clarity and semantic meaning.

New Syntax for Shape Definition

Mermaid now supports a general syntax for defining shape types to accommodate the growing number of shapes. This syntax allows you to assign specific shapes to nodes using a clear and flexible format:



`A@{ shape: rect }`



## Links between nodes 
Arrow (-->)
```mermaid
flowchart TB
a --> b
```
Open Link 
```mermaid
flowchart TB 
a --- b
```

Text on links 
```mermaid
flowchart TB 
a -- This is  the text!--- b
```

```mermaid
flow chart LR
a ---|This is  the text|b
```

A link with arrow head and text
```mermaid
flowchart LR
a -->|text|b
```


```mermaid
flowchart LR 
a -- text -->b
```

Dotted Link 
```mermaid
flowchart LR
a -.-> b
```


Dotted link with text
```mermaid
flowchart LR
a -. text .->b
```


Thick link 
```mermaid

flowchart LR
A==>B
```


Thick link with text
```mermaid
flowchart LR
   A == text ==> B
```



```mermaid
```



```mermaid
```



```mermaid
```


