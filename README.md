# react-notify

**react-notify** is a lightweight library to help developers handle 
notifications easily.

<br/>

## Get Started

This library is not published in any package manager, so you should download 
the required file. I encourage you to take a look at the source code, once it's 
pretty small and customizable.

<br/>

## Usage

Include the &lt;Notify&gt; component in your app and wrap everything in the
&lt;NotifyProvider&gt;. Access the notify functions using the 
&lt;NotifyContext&gt;.

<br/>

See the example below:

```jsx
// Imports
import Notify, { NotifyProvider, NotifyContext } from './notify.jsx'
import { useContext, useEffect } from 'react'

// App
function App () {
    return (
        <NotifyProvider>
            <Notify/>
            <Content/>
        </NotifyProvider>
    )

// Content
function Content() {
    const { notify } = useContext(NotifyContext)
    
    useEffect(() => {
        notify({
            type: 'information',
            message: 'Content Component Mounted',
        })
    }, [])

    return (
        <h1>Lorem ipsum.</h1>
    )
}
}
```

<br/>

## License

This library is under the <a href="/LICENSE">MIT License</a>.
