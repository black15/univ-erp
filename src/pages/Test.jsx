import React from 'react'

function Test() {
   return (
      <>
         <html lang="en-US">
            <head>
               <title>Pixel Streaming Showcase</title>
               <meta charset="utf-8">
                  <meta name="viewport" content="width=device-width, initial-scale=1">

                     <!-- Optional: set some favicons -->
                     <link rel="shortcut icon" href="./assets/images/favicon.ico" type="image/x-icon">
                        <link rel="icon" type="image/png" sizes="96x96" href="./assets/images/favicon-96x96.png">
                           <link rel="icon" type="image/png" sizes="32x32" href="./assets/images/favicon-32x32.png">
                              <link rel="icon" type="image/png" sizes="16x16" href="./assets/images/favicon-16x16.png">

                                 <!-- Optional: load a custom font -->
                                 <link rel="preconnect" href="https://fonts.googleapis.com">
                                    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
                                       <link href="https://fonts.googleapis.com/css2?family=Michroma&family=Montserrat:wght@600&display=swap" rel="stylesheet">

                                          <!-- Apply the showcase CSS -->
                                          <link type="text/css" rel="stylesheet" href="./assets/css/showcase.css">

                                          </head>

                                          <body>

                                             <!-- Load images in page body load -->
                                             <img src="./assets/images/Aurora.jpg" style="display: none;" />
                                             <img src="./assets/images/Crunch.jpg" style="display: none;" />

                                             <div class="wrapper">

                                                <!-- The details panels for the examples sidebar -->
                                                <div id="sidebar">
                                                   <div id="exampletitle">
                                                      <p id="psdemotext"> Select an example:</p>
                                                      <select id="exampleSelect" onchange="onExampleChanged(event)" title="Select an example...">
                                                         <option>Getting Started</option>
                                                         <option>Send Data to UE</option>
                                                         <option>Send Commands to UE</option>
                                                      </select>
                                                   </div>
                                                   <div id="sidebar-header">Details</div>
                                                   <div id="sidebarContent"></div>
                                                </div>

                                                <div id="content">

                                                   <div id="playercontainer"></div>

                                                   <div id="infocontainer">
                                                      <div id="infoinstructions">
                                                         Information here
                                                      </div>
                                                   </div>

                                                </div>
                                             </div>

                                          </body>
                                       </html>
                                    </>
                                    )
}

                                    export default Test