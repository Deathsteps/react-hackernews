import React from 'react'

import CommentItem from '../components/CommentItem'

const data = [
  {
    'level': 1,
    'by' : 'norvig',
    'text' : 'Aw shucks, guys ... you make me blush with your compliments.<p>Tell you what, I"ll make a deal: I ll keep writing if you keep reading. K?',
    'timeText' : '9 hours ago'
  },
  {
    'level': 2,
    'by' : 'norvig',
    'text' : 'I don"t see any mention of quantum computers in here so I thought I"d mention: <p>the NSA themselves are concerned that quantum computing will be a great threat to encryption in the near future.</p>',
    'timeText' : '9 hours ago'
  },
  {
    'level': 3,
    'by' : 'norvig',
    'text' : 'Symmetric encryption not being broken doesn"t really help you if the encryption key has been exchanged using a (presumably quantum-breakable) form of asymmetric encryption. Most encryption in the wild works this way.',
    'timeText' : '9 hours ago'
  },
  {
    'level': 4,
    'by' : 'norvig',
    'text' : 'Aw shucks, guys ... you make me blush with your compliments.<p>Tell you what, Ill make a deal: I ll keep writing if you keep reading. K?',
    'timeText' : '9 hours ago'
  },
  {
    'level': 1,
    'by' : 'norvig',
    'text' : 'Symmetric encryption not being broken doesn"t really help you if the encryption key has been exchanged using a (presumably quantum-breakable) form of asymmetric encryption. Most encryption in the wild works this way.',
    'timeText' : '9 hours ago'
  },
  {
    'level': 2,
    'by' : 'norvig',
    'text' : 'Aw shucks, guys ... you make me blush with your compliments.<p>Tell you what, Ill make a deal: I ll keep writing if you keep reading. K?',
    'timeText' : '9 hours ago'
  },
  {
    'level': 3,
    'by' : 'norvig',
    'text' : 'I don"t see any mention of quantum computers in here so I thought I"d mention: <p>the NSA themselves are concerned that quantum computing will be a great threat to encryption in the near future.</p>',
    'timeText' : '9 hours ago'
  },
]

const CommentList = () => {
  return (
    <div className="Comment-list">
      {data.map((item, key) => {
        return <CommentItem key={key} {...item}/>
      })}
    </div>
  )
}

export default CommentList
