document.addEventListener('DOMContentLoaded', () => {
    // Enter button functionality
    const enterButton = document.getElementById('enter-button');
    const landingPage = document.getElementById('landing-page');
    const profilePage = document.getElementById('profile-page');

    enterButton.addEventListener('click', () => {
        landingPage.style.display = 'none';
        profilePage.style.display = 'flex';
    });

    // Discord Status Fetching
    fetch('your-endpoint-url')
        .then(response => response.json())
        .then(data => {
            const statusElement = document.getElementById('status');
            statusElement.textContent = data.status;
        })
        .catch(error => {
            console.error('Error fetching Discord status:', error);
            const statusElement = document.getElementById('status');
            statusElement.textContent = 'Working On Nexus Cloud';
        });

    // Facts About Me Animation
    const facts = [
        "I am a web developer.",
        "I am a Minecraft server developer.",
        "I am a Discord bot developer.",
        "I am the owner of Nexus Cloud."
    ];

    let factIndex = 0;
    const factElement = document.getElementById('fact-text');

    function showNextFact() {
        factElement.textContent = facts[factIndex];
        factElement.style.opacity = 0;
        setTimeout(() => {
            factElement.style.opacity = 1;
        }, 100); // Adjust this value for fade-in effect timing
        factIndex = (factIndex + 1) % facts.length;
    }

    showNextFact();
    setInterval(showNextFact, 5000); // Change facts every 5 seconds

    // Firefly Animation
    const firefliesContainer = document.getElementById('fireflies');
    const fireflyCount = 50;

    for (let i = 0; i < fireflyCount; i++) {
        const firefly = document.createElement('div');
        firefly.classList.add('firefly');
        firefly.style.left = Math.random() * 100 + 'vw';
        firefly.style.top = Math.random() * 100 + 'vh';
        firefly.style.animationDuration = (Math.random() * 5 + 5) + 's';
        firefliesContainer.appendChild(firefly);
    }
});
