# ⚡ [Page Progressbar React](https://www.npmjs.com/package/page-progressbar-react)

💡 A Simple progressbar based on scroll state of a page using [framer-motion](https://www.framer.com/motion/)

👀 Demo (https://page-progressbar-react.vercel.app/)

## Installation

```
npm i page-progressbar-react
            or
yarn add page-progressbar-react
```

## Usage

You can import the `PageProgressBar` component from the package after installing.

```jsx
import PageProgressBar from "page-progressbar-react";
```

After importing, add `<PageProgressBar />` to your desired page.

```jsx
-pages / index.js;
import PageProgressBar from "page-progressbar-react";

export default function HomePage() {
  return (
    <>
      <PageProgressBar />

      {/* Your code here... */}
    </>
  );
}
```

## Customization

Currently `PageProgressBar` supports `color` and `height` props.

```jsx
export default function HomePage() {
  return (
    <>
      <PageProgressBar color="#2563eb" height={5} />

      {/* Your code here... */}
    </>
  );
}
```

## Props:

| prop   | type   | default |
| ------ | ------ | ------- |
| color  | string | #ec4899 |
| height | number | 4px     |

## Author

- [Portfolio](https://anurag.tech)
- [GitHub](https://github.com/kr-anurag)
- [Twitter](https://twitter.com/imanuraglol)
