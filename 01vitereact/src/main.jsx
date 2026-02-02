import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react';

function MyApp() {
  return(
    <div>
      <h1>custom app</h1>
    </div>
  );
}
// const ReactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank',
//     },
//     children: 'click me to visit google'

// }

const anotherUser = "chai aur react"

const reactElement = React.createElement(
  'a',
  {href: 'https://google.com', target: '_blank'},
  'click me to visit google',
  anotherUser
)

const anotherElement = (
    <a href='https://https://google.com' target='_blank'>VISIT GOOGLE</a>
)

createRoot(document.getElementById('root')).render(
reactElement
 )
