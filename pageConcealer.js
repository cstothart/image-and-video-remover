const concealer = document.createElement('div');
concealer.id = 'concealer';
const concealerText = document.createTextNode('Hiding images and videos...');
concealer.style.width = `${window.innerWidth}px`;
concealer.style.height = `${window.innerHeight}px`;
concealer.appendChild(concealerText);
document.documentElement.appendChild(concealer);