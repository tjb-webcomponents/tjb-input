# tjb-input

Webcomponents input (optionally with labelfield).

## Features

- easy to use
- accessible
- time saving

## Example

https://tjb-webcomponents.github.io/tjb-input/

## Add to project

You might want to use a Polyfill for WebComponent:

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/webcomponentsjs/1.2.0/webcomponents-lite.js"></script>
```

### Include via HTML

Include it:

```html
<script
  src="https://tjb-webcomponents.github.io/tjb-input/tjb-input.min.js"
  type="module"
></script>
```

### Include via JavaScript

```JavaScript
import 'https://tjb-webcomponents.github.io/tjb-input/tjb-input.min.js'
```

### Include via NPM

Console:

```bash
npm i -S tjb-input
```

Then in your code:

```JavaScript
import 'tjb-input';
```

## Useage

```html
<tjb-input
  class="tjb-input"
  label="Password"
  type="password"
  name="password"
  info="minimum 8 digits"
  pattern=".{8,}"
></tjb-input>
```

- `label` the parent
- `type` a submenu
- `name` an item in the menu
- `info` an item in the menu
- `pattern` an item in the menu

## Suggested styling

```css
.tjb-input {
}
```

# Enjoy

[![Typewriter Gif](https://tjb-webcomponents.github.io/html-template-string/typewriter.gif)](http://thibaultjanbeyer.com/)
