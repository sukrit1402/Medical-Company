import { render } from '@testing-library/react';
import React from 'react'

const Chat = () => 
{
    componentDidMount:
        (function(d, m){
            var kommunicateSettings = 
                {"appId":"9ecee46bc523541abfb593c7c60d48c0","popupWidget":true,"automaticChatOpenOnNavigation":true};
            var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
            s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
            var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
            window.kommunicate = m; m._globals = kommunicateSettings;
        })(document, window.kommunicate || {});
    /* NOTE : Use web server to view HTML files as real-time update will not work if you directly open the HTML file in the browser. */

    
    
    
    
render()
{
    return (
        <div>
          
        </div>
      )
}

 
}

export default Chat
