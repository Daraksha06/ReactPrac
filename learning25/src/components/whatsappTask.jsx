import React from 'react'
import '../assets/css/IphoneUi.css'
const WhatsappTask = () => {
  return (
    <div>
    <div id="whatsapp" className="pml-open-site">
      <div className="landscape-ok">
        <section id="iphone-wrap" className="clearfix">
          {/* iPhone frame */}
          <div id="iphone">
            {/* Status bar */}
            <div id="status-bar">
              <span className="carrier">Carrier</span>
              <span className="wifi">📶</span>
              <span className="time">9:41 AM</span>
              <span className="battery">🔋</span>
            </div>

            {/* Screen content */}
            <div id="screen">
              <p className="welcome">Welcome to iPhone UI</p>
            </div>
          </div>

          {/* Grid column (Foundation style) */}
          <div className="small-16 columns"></div>
        </section>
      </div>
    </div>
    </div>
  )
}

export default WhatsappTask
