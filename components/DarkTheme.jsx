import React from 'react'

function DarkTheme() {
    const darkTheme = () => {
        var element = document.body;
        element.classList.toggle("dark-mode");
    }

  return (
    // darktheme button 
    <div>
        <button onClick={darkTheme}>Dark Theme</button>
    </div>

  )
}

export default DarkTheme