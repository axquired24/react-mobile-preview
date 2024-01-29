import React, { FC, useEffect, useState } from "react"
import { BsFillArrowDownRightSquareFill, BsFillArrowUpLeftSquareFill, BsBoxArrowInUpRight } from "react-icons/bs"
import { VscRefresh } from 'react-icons/vsc'

interface Props{
  viewLink: string,
  width: number,
  height: number,
  id: string
}

const MobilePreview:FC<Props> = ({
  viewLink="", 
  width=414, 
  height=750, 
  id
}) => {
  const [stateUrl, setStateUrl] = useState('')
  const [showPreview, setShowPreview] = useState(false)
  
  function reloadIframe() {
    const currentUrl = stateUrl
    setStateUrl('')
    setTimeout(() => {
      setStateUrl(currentUrl)
    }, 300)
  }

  function openInNewTab() {
    if (viewLink) {
      // @ts-ignore: Object is possibly 'null'.
      window.open(viewLink, '_blank').focus()
    } // endif
  }

  useEffect(() => {
    if (viewLink) {
      setStateUrl(viewLink)
      setShowPreview(true)
    } // endif
  }, [viewLink]);

  const previewBox = (
    <div hidden={! showPreview} 
      className="fixed top-5 right-5 p-5 bg-white shadow-md rounded-md">
      <div className="flex items-center gap-2 mb-2">
        <input className="w-full rounded-md py-1 px-1.5 bg-gray-300" type="text" 
          readOnly value={stateUrl ?? 'Click on View Card to Show Page'} />
        <VscRefresh 
          onClick={reloadIframe}
          title="Reload"
          className="text-blue-700 hover:text-blue-600 cursor-pointer" size={32} />
        <BsBoxArrowInUpRight 
          onClick={openInNewTab}
          title="Open in new tab"
          className="text-blue-700 hover:text-blue-600 cursor-pointer" size={36} />
      </div>
      <div className="bg-gray-500 flex justify-center p-10 rounded-md"
        style={{minHeight: height, minWidth: width}}>
        <div className="flex justify-center">
          <iframe title="Mobile Preview"
            className="bg-white" 
            id={id} 
            hidden={! stateUrl} 
            src={stateUrl} 
            width={width} 
            height={height}
          />
        </div>
      </div>
    </div>
  )

  const onBubbleClick = () => {
    setShowPreview(prev => {
      return ! prev
    })
  }
  const bubbleIconProps = {
    title: "Show/Hide Preview",
    size: 24
  }
  const minimizedBubble = (
    <div className="fixed bottom-0 right-3 lg:right-10">
      <button 
        onClick={onBubbleClick}
        className="flex items-center gap-2 bg-blue-700 hover:bg-blue-600 rounded-t-md text-white py-3 shadow-md px-5 cursor-pointer">
        {
          showPreview ? <BsFillArrowDownRightSquareFill {...bubbleIconProps} /> :
          <BsFillArrowUpLeftSquareFill {...bubbleIconProps} />
        }
        <span>Show Preview</span>
      </button>
    </div>
  )

  return (
    <>
      { previewBox }
      { minimizedBubble }
    </>
  )
}

export default MobilePreview


