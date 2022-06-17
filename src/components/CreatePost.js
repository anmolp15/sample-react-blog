import React from 'react'
import { useState } from 'react'

export default function CreatePost() {

  const [title, setTitle] = useState('');
  const [subTitle, setSubTitle] = useState('');
  const [content, setContent] = useState('');

  function handleSubmit(e) {
    e.preventDefault()
    console.log("title " + title)
    console.log("subTitle " + subTitle)
    console.log("content " + content)
  }
  return (
    <div>
      <h1>Create a new Post</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input type="text" name="" id="" placeholder='Title' value={title} onChange={(e) => {setTitle(e.target.value)}}/>
        </div>

        <div>
          <input type="text" name="" id="" placeholder='Sub Title' value={subTitle} onChange={(e) => {setSubTitle(e.target.value)}}/>
        </div>

        <div>
          <textarea name="" id="" cols="30" rows="10" placeholder='Content' value={content} onChange={(e) => {setContent(e.target.value)}}></textarea>
        </div>
        <button type='submit'>Post</button>
      </form>
    </div>
  )
}
