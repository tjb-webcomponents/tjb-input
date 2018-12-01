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
<tjb-input></tjb-input>
```

With all attributes:

```html
<tjb-input
  label="Password"
  type="password"
  name="password"
  info="minimum 8 digits"
  pattern=".{8,}"
  errormessage="please check this input"
  successmessage="√"
  required="true"
></tjb-input>
```

### Methods

method | properties | example | description
showMessage | String (type) ['error' / 'success'] | `tjbInput.showMessage("error")` | displays the respective border color and message text
hideMessage | - | `tjbInput.hideMessage()` | hides border color and message text

## Styling

Default public values:

```css
:host {
  --color-error: #fa354c;
  --input-padding: 10px;
  --input-margin: 0 0 30px 0;
  --input-width: 100%;
  --input-font-size: 1rem;
  --info-color: grey;
  --info-font-size: 0.8rem;
}
```

These can be overwritten easily by targetting the element. Example:

```css
tjb-input {
  --input-width: 300px;
}
```

# Enjoy

[![Typewriter Gif](https://tjb-webcomponents.github.io/html-template-string/typewriter.gif)](http://thibaultjanbeyer.com/)
