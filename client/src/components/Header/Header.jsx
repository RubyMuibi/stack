import headerStyles from "./header.module.css"

import { Link } from "react-router-dom"

import { Icon } from '@iconify/react';

export default function Header () {
  return (
    <>
      <header className={ headerStyles.container }>
      <Link to="/" className={ headerStyles.logo } >
             {"Stack"}
        </Link>
        
        <Link to="https://open.spotify.com/playlist/0IQdHzEm5lqpIPkmRUiLwW?si=f7dfee73f3804021" className={ headerStyles.music }>  
        <Icon icon="mdi:play" color="white" />

        <div className={ headerStyles.musicText }>
          <h2> Vibes </h2>
          <h3> Curated by AI </h3>
        </div>
        
        </Link>

      </header>
    </>
  );
};
