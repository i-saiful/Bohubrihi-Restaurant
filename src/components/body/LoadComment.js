import React from 'react'
import dateFormat from 'dateformat'

export default function LoadComment({ comments }) {
  return (
    comments.map(comment => {
      return (
        <div key={comment.id}>
          <h5>{comment.author}</h5>
          <p>{comment.comment}</p>
          <p>Rating: {comment.rating}</p>
          <p>{dateFormat(comment.date, "dddd, mmmm dS, yyyy, h:MM:ss TT")}</p>
          <hr />
        </div>
      )
    })
  )
}
