'use client'
import { useState } from 'react'

import styles from './LikeButton.module.css'

const LikeButton = ({ id }) => {
  const [liked, setLiked] = useState(false)
  return (
    <button className={styles.button} onClick={() => setLiked(!liked)}>
      {liked ? '❤️' : '🤍'}
    </button>
  )
}

export default LikeButton
