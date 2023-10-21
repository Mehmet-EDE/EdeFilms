import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <footer className="flex items-center justify-center bottom-0 static">
      Made with 🚀 by&nbsp;
      <Link className='underline' href="https://www.linkedin.com/in/mehmet-ede-20984316a/" target="_blank">
        Mehmet EDE
      </Link>
    </footer>
  )
}

export default Footer