onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);

    // Tạo hiệu ứng đom đóm
    const firefliesContainer = document.querySelector(".fireflies");
    const numberOfFireflies = 50; // Tăng số lượng đom đóm để hiệu ứng dày đặc hơn

    for (let i = 0; i < numberOfFireflies; i++) {
        const firefly = document.createElement("div");
        firefly.classList.add("firefly");
        
        // Random kích thước từ 0.3vmin đến 1.2vmin
        const size = Math.random() * 0.9 + 0.3; 
        firefly.style.width = `${size}vmin`;
        firefly.style.height = `${size}vmin`;
        
        // Random các biến CSS cho chuyển động lơ lửng
        // Sử dụng % của viewport để đom đóm di chuyển ra khỏi màn hình và vào lại
        firefly.style.setProperty('--start-x', (Math.random() * 120) - 10); // Từ -10% đến 110%
        firefly.style.setProperty('--start-y', (Math.random() * 120) - 10);
        firefly.style.setProperty('--mid1-x', (Math.random() * 120) - 10);
        firefly.style.setProperty('--mid1-y', (Math.random() * 120) - 10);
        firefly.style.setProperty('--mid2-x', (Math.random() * 120) - 10);
        firefly.style.setProperty('--mid2-y', (Math.random() * 120) - 10);
        firefly.style.setProperty('--end-x', (Math.random() * 120) - 10);
        firefly.style.setProperty('--end-y', (Math.random() * 120) - 10);
        
        // Thời gian cho animation chuyển động và nhấp nháy
        firefly.style.setProperty('--float-duration', `${Math.random() * 20 + 15}s`); // Từ 15s đến 35s
        firefly.style.setProperty('--blink-duration', `${Math.random() * 2 + 1}s`); // Từ 1s đến 3s
        firefly.style.setProperty('--max-opacity', `${Math.random() * 0.6 + 0.4}`); // Opacity ngẫu nhiên từ 0.4 đến 1

        // Random delay cho animation
        firefly.style.animationDelay = `-${Math.random() * 20}s`; // Sử dụng delay âm để animation bắt đầu ở các giai đoạn khác nhau
        
        firefliesContainer.appendChild(firefly);
    }
};