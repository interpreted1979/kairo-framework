# Kairo css/js framework 


# Pattern requirements

The structure of each pattern and its behaviour under various screen sizes

---

## The Grid System

**Description**

- 12 columns
- responsive, fluid
- columns wrapped in a .row
- Each columns will have class .columns

**Responsive Behaviour**

- Mobile first, columns
- 3 breakpoints , x-small, small, medium, large

## Typography

**Elements**

- Headings
- Paragraphs
- em, bold, strike, link
- Code blocks
- lists
- blockquotes

## Buttons

**Description**

- 2 styles: default, primary
- 3 sizes: small, default, large
- styles for all html elements: '<a>, <button>, <input type="button">, <input type="submit">'

## Form Elements

**Elements**

- inputs
- radio and checkboxes (custom controls)
- Pre-made forms: sign-in, sign-up, contact

## Icons

**Descritpion**

- Will use FontAwesome
- Styles for bordered icons
- styles for square, rounded or circle border
- 3 sizes : default, large, huge

## Feedback

**Description**

- 4 message boxes: information, success, error, warning

## Navigation

### Navbar
**Elements and characteristics**

- Navbar horizonal / vertical
- Horizontal: Contains logo on left and menu on right
- Vertical: Logo and menu are stacked
- The menu will be powered by the superfish jquery plugin

**Responsive Behaviour**

- At page load, the main menu will be cloned by jquery into a responsive menu
- In mobile sizes,  the main menu will be hidden,  the logo moved  to the center of the page and the responsive menu will be displayed below the logo

### Verical Navbar
**Elements and characteristics**

- superfish plugin
- on hover it shows multi column list of sub menus
- on breakpoint, it shows a button +


# Tabs and accordions

**Description**

- Custom controls

## Carousels

### Slider

**Description**

- will use the cycle2 jquery plugin

### Showcase Tabs

**Description**

- tab customisation in order to display images as background , title and call to action

## Ribbon

**Description**

- to load a modal window with additional content

