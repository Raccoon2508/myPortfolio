export const busStopRender = (stopName: string, zoom = 18, description?: string): string => {
    let busStop: string;

    if (zoom > 16) {
        busStop = `
            <div class="stop-wrapper zoom-${zoom}">
              <div class="icon-wrapper">
                  <div class="icon-container">
                    <img class="icon" alt="" src="./assets/transport-icons/stops/bus-stop-icon.png"> 
                   </div>
              </div>
              <div class="stop-name-wrapper">
                <span>${stopName}</span>
              </div>
              <span>${description ? description : ''}</span>
            </div>
            `;
    } else {
        busStop = `
            <div class="stop-wrapper low-zoom zoom-${zoom}">
              <div class="low-zoom-icon-part top"></div>
              <div class="low-zoom-icon-part bottom"></div>
            </div>
            `;
    }

    return busStop;
};