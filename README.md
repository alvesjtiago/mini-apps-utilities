# Mini-apps utilities

A collection of mini apps utilities for devs. Started from this thread - https://warpcast.com/alvesjtiago.eth/0xc44cf7cf

### Installation

```bash
npm install @mini_apps/utilities
```

## Utilities

<details>
<summary>
<b>Link</b>
</summary>

#### Description

Link wrapper for mini apps. Allows a child element to be either an `<a>` tag if there is no frame SDK context and an on click div if there is! Minimal with only React and the frame SDK as dependencies ✨

#### Props

- `href`: The URL to link to

#### Usage

```tsx
import { Link } from '@mini_apps/utilities'

function App() {
  return (
    <div>
      <Link href="https://www.google.com">Google</Link>
    </div>
  )
}
```

</details>

<details>
<summary>
<b>FrameInit</b>
</summary>

#### Description

FrameInit component to emit frame SDK ready event. Minimal with only React and the frame SDK as dependencies.

#### Usage

```tsx
import { FrameInit } from '@mini_apps/utilities'

function App() {
  return <FrameInit />
}
```

</details>

## Contributors

- [Steve](https://warpcast.com/stevedylandev.eth)
- [Tiago](https://warpcast.com/alvesjtiago.eth)
