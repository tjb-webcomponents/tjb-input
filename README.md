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

### Attributes

Tiny Example:

```html
<tjb-input
  label="Password"
  type="password"
  name="password"
  info="minimum 8 digits"
  pattern=".{8,}"
  errormessage="please check this input"
></tjb-input>
```

All attributes:

| attribute      | example                                   | description                                                            |
| -------------- | ----------------------------------------- | ---------------------------------------------------------------------- |
| label          | label="Password"                          | the text of the corresponding label field.                             |
| type           | type="password"                           | type of the imput field                                                |
| name           | name="password"                           | name of the imput field                                                |
| info           | info="minimum 8 digits                    | tiny info text shown besides the label                                 |
| pattern        | pattern=".{8,}"                           | regex pattern to check if input is valid                               |
| errormessage   | errormessage="please check your password" | message to display if input is invalid                                 |
| successmessage | successmessage="√"                        | message to display if input is valid                                   |
| required       | required="true"                           | add required flag to input                                             |
| nosubmit       | nosubmit="true"                           | whether or not the nearest form feald should be submitted on enter key |

### Methods

| method        | properties                                  | example                         | description                                                                                                     |
| ------------- | ------------------------------------------- | ------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| showMessage   | - type (@String) <br> ['error' / 'success'] | `tjbInput.showMessage("error")` | displays the respective border color and message text                                                           |
| hideMessage   | -                                           | `tjbInput.hideMessage()`        | hides border color and message text                                                                             |
| checkValidity | -                                           | `tjbInput.checkValidity()`      | checks whether or not the input field is valid. Displays the success message if so and the error message if not |
| submit        | -                                           | `tjbInput.submit()`             | submits the nearest form element if input is valid                                                              |

## Styling

Default public values:

```css
:host {
  --input-color-error: #fa354c;
  --input-color-success: limegreen;
  --input-padding: 10px;
  --input-margin: 0 0 30px 0;
  --input-width: 100%;
  --input-border: 1px solid black;
  --input-border-radius: 0;
  --input-font-size: 1rem;
  --input-info-color: grey;
  --input-info-font-size: 0.8rem;
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
