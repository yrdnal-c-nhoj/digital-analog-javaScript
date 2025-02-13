function createAnalogClock(targetElement) {
    // Create clock structure
    const clock = document.createElement('div');
    clock.className = 'clock';

    const hourHand = document.createElement('div');
    hourHand.className = 'hand hour';

    const minuteHand = document.createElement('div');
    minuteHand.className = 'hand minute';

    const secondHand = document.createElement('div');
    secondHand.className = 'hand second';

    clock.appendChild(hourHand);
    clock.appendChild(minuteHand);
    clock.appendChild(secondHand);

    // Add styles
    const style = document.createElement('style');
    style.textContent = `
    .clock {
      position: relative;
      width: 200px;
      height: 200px;
      border: 2px solid #333;
      border-radius: 50%;
    }
    .hand {
      position: absolute;
      bottom: 50%;
      left: 50%;
      transform-origin: 50% 100%;
    }
    .hour {
      width: 6px;
      height: 60px;
      background: #333;
    }
    .minute {
      width: 4px;
      height: 80px;
      background: #666;
    }
    .second {
      width: 2px;
      height: 90px;
      background: #f00;
    }
  `;
    document.head.appendChild(style);

    // Append clock to target element
    targetElement.appendChild(clock);

    // Clock update function
    function updateClock() {
        const now = new Date();
        const seconds = now.getSeconds() / 60;
        const minutes = (now.getMinutes() + seconds) / 60;
        const hours = (now.getHours() % 12 + minutes) / 12;

        setRotation(hourHand, hours);
        setRotation(minuteHand, minutes);
        setRotation(secondHand, seconds);

        requestAnimationFrame(updateClock);
    }

    function setRotation(element, rotation) {
        element.style.transform = `translateX(-50%) rotate(${rotation * 360}deg)`;
    }

    // Start the clock
    updateClock();
}
