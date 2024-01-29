# Mobile Preview - React UI Library
Simple mobile preview popup to represent our mobile webview/SPA

![Screenshot](https://github.com/axquired24/react-mobile-preview/blob/main/screenshot/usage.png?raw=true)

Usage:
```sh
    npm install @axquired24/mobile-preview
```

In your jsx file:
```jsx
    import { MobilePreview } from '@axquired24/mobile-preview';
    import { useState } from 'react';

    const AxPack = () => {
        const [viewLink, setViewLink] = useState("https://yoursite.com");
        const onChangeInput = (e) => {
            setViewLink(e.target.value)
        }
        return (
            <div style={{padding: "2rem"}}>
            <div>Paste Link Below</div>
            <div>
            <input 
                className="px-1 py-2 border border-gray-600 rounded-md"
                type="text" name="viewUrl" id="viewUrl" onChange={onChangeInput} />
            </div>
            <MobilePreview viewLink={viewLink} id='previewLinks'></MobilePreview>
            </div>
        );
    }

    export default AxPack;
```
