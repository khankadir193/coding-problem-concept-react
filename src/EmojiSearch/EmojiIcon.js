import EmojiPicker from 'emoji-picker-react'
import React from 'react'

function EmojiIcon() {

    const emojiClick = (event)=>{
        console.log('emoji.???',event);
    }

  return (
    <div>
        <EmojiPicker width={1915} height={855} onEmojiClick={emojiClick} autoFocusSearch={true}/>
    </div>
  )
}

export default EmojiIcon