/**
 * BRIQO - MOTOR LÓGICO UNIFICADO v3.0
 * Desarrollado por Jose Luis Corefix para BRIQO ITSR
 */

// 1. ANIMACIONES DE REVELADO (SCROLL)
const reveal = () => {
    const reveals = document.querySelectorAll(".reveal");
    reveals.forEach((element) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const revealPoint = 100;

        if (elementTop < windowHeight - revealPoint) {
            element.classList.add("active");
        }
    });
};

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);

// 2. ECO-CALCULADORA
const kilosInput = document.getElementById('kilosInput');
const resLadrillos = document.getElementById('resultadoLadrillos');
const resMuros = document.getElementById('resultadoMuros');

if (kilosInput) {
    kilosInput.addEventListener('input', (e) => {
        const kilos = parseFloat(e.target.value);
        if (kilos > 0) {
            // Factor: 1kg de textil ≈ 3.5 ladrillos BRIQO
            const ladrillos = Math.round(kilos * 3.5); 
            // 48 ladrillos ≈ 1 metro cuadrado
            const metros = (ladrillos / 48).toFixed(1);
            
            resLadrillos.innerText = ladrillos;
            resMuros.innerText = metros;
        } else {
            resLadrillos.innerText = '0';
            resMuros.innerText = '0';
        }
    });
}

// 3. GESTIÓN DEL CERTIFICADO (MODAL)
function mostrarCertificado() {
    const modal = document.getElementById('modalCertificado');
    if (modal) {
        modal.classList.remove('hidden');
        modal.classList.add('flex');
        
        // Lanzar confeti institucional
        confetti({
            particleCount: 150,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#16a34a', '#ffffff', '#000000']
        });
    }
}

function cerrarCertificado() {
    const modal = document.getElementById('modalCertificado');
    if (modal) {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
    }
}

// 4. EFECTO TYPEWRITER (HERO)
const fraseElemento = document.getElementById('frase-hero');
const cursor = document.querySelector('.cursor-escribiendo');
const textoFrase = '"Somos una empresa especializada en la fabricación de ladrillos ecológicos a base de ropa en desuso."';

if (fraseElemento) {
    let indice = 0;
    function escribirFrase() {
        if (indice < textoFrase.length) {
            fraseElemento.innerHTML += textoFrase.charAt(indice);
            indice++;
            setTimeout(escribirFrase, 45);
        } else if (cursor) {
            cursor.style.display = 'none';
        }
    }
    // Iniciar con un pequeño retraso para que cargue la página
    setTimeout(escribirFrase, 1200);
}

// 5. NAVBAR DINÁMICO Y FAQ
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.classList.add('shadow-lg');
        nav.style.height = "70px";
    } else {
        nav.classList.remove('shadow-lg');
        nav.style.height = "80px";
    }
});

// Acordeón FAQ
document.querySelectorAll('.faq-item').forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('active');
        const p = item.querySelector('p');
        if (p) p.classList.toggle('hidden');
        
        const icon = item.querySelector('i');
        if (icon) icon.classList.toggle('fa-plus');
        if (icon) icon.classList.toggle('fa-times');
    });
});

// 6. CONSOLA PROFESIONAL (AUDITORÍA)
console.log(
    "%c BRIQO %c ENGINE ACTIVO %c v3.0 ",
    "background:#16a34a; color:white; font-weight:bold; padding:4px 8px; border-radius:4px 0 0 4px",
    "background:#0f172a; color:white; font-weight:bold; padding:4px 8px;",
    "background:#f1f5f9; color:#0f172a; font-weight:bold; padding:4px 8px; border-radius:0 4px 4px 0"
);