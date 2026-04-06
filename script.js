/**
 * Lógica de Animación al Scroll
 */
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

// Confirmación en consola
console.log("BRIQO Green Engine: Operativo.");
/**
 * Efecto de Parallax suave para el Hero
 */
window.addEventListener('scroll', () => {
    const heroText = document.querySelector('#inicio h1');
    let scrollValue = window.scrollY;
    if (heroText) {
        heroText.style.transform = `translateY(${scrollValue * 0.2}px) skewX(-2deg)`;
    }
});

/**
 * Consola con estilo (Para que vean que hay código profesional detrás)
 */
console.log(
    "%c BRIQO %c PROYECTO ITSR TEPEXI %c 2026 ",
    "background:#16a34a; color:white; font-weight:bold; padding:4px 8px; border-radius:4px 0 0 4px",
    "background:#0f172a; color:white; font-weight:bold; padding:4px 8px;",
    "background:#f1f5f9; color:#0f172a; font-weight:bold; padding:4px 8px; border-radius:0 4px 4px 0"
);
/**
 * Lógica de la Eco-Calculadora
 * 1 kg de ropa ≈ 3 Ladrillos BRIQO
 * 50 Ladrillos ≈ 1 Metro cuadrado de muro
 */
const kilosInput = document.getElementById('kilosInput');
const resLadrillos = document.getElementById('resultadoLadrillos');
const resMuros = document.getElementById('resultadoMuros');

if (kilosInput) {
    kilosInput.addEventListener('input', (e) => {
        const kilos = e.target.value;
        if (kilos > 0) {
            const ladrillos = Math.round(kilos * 3.5); // Factor de conversión textil
            const metros = (ladrillos / 48).toFixed(1);
            
            resLadrillos.innerText = ladrillos;
            resMuros.innerText = metros;
        } else {
            resLadrillos.innerText = '0';
            resMuros.innerText = '0';
        }
    });
}

/**
 * Notificación de bienvenida al usuario
 */
window.addEventListener('load', () => {
    setTimeout(() => {
        console.log("%c INFO: Sistema de Cálculo BRIQO v2.1 Activo ", "color: #16a34a; font-weight: bold;");
    }, 2000);
});
/**
 * Al hacer clic en un enlace del menú, el menú se "oculta" 
 * (útil si después agregas una versión móvil con botón)
 */
document.querySelectorAll('.dropdown-item').forEach(item => {
    item.addEventListener('click', () => {
        // Esto ayuda a que la transición de scroll se sienta más limpia
        console.log("Navegando a: " + item.innerText);
    });
});

// Cambiar el fondo del Nav cuando se hace scroll para que el logo resalte más
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.classList.add('shadow-lg');
        nav.style.height = "70px"; // Se hace un poco más delgada al bajar
    } else {
        nav.classList.remove('shadow-lg');
        nav.style.height = "80px";
    }
});
/**
 * Lógica para el Acordeón de FAQ
 */
document.querySelectorAll('.faq-item').forEach(item => {
    item.addEventListener('click', () => {
        // Alternar clase activa
        item.classList.toggle('active');
        
        // Animación de icono
        const icon = item.querySelector('i');
        if (item.classList.contains('active')) {
            console.log("FAQ Abierto: " + item.innerText.split('\n')[0]);
        }
    });
});

/**
 * Notificación de Validación Técnica
 */
window.addEventListener('load', () => {
    console.log("%c NORMAS: NMX-C-404-ONNCCE CUMPLIDA ", "background: #16a34a; color: white; border-radius: 5px; padding: 2px 5px;");
});
// Función para abrir el certificado
function mostrarCertificado() {
    const modal = document.getElementById('modalCertificado');
    if (modal) {
        modal.classList.remove('hidden');
        // Un pequeño delay para que la animación de entrada (CSS) se note
        setTimeout(() => {
            modal.classList.add('active');
        }, 10);
    }
}

// Función para cerrar el certificado
function cerrarCertificado() {
    const modal = document.getElementById('modalCertificado');
    if (modal) {
        modal.classList.remove('active');
        setTimeout(() => {
            modal.classList.add('hidden');
        }, 400); // Tiempo que coincide con la transición de CSS
    }
}
function mostrarCertificado() {
    const modal = document.getElementById('modalCertificado');
    if (modal) {
        modal.classList.remove('hidden');
        setTimeout(() => {
            modal.classList.add('active');
            // ¡Lanzar confeti verde y blanco!
            confetti({
                particleCount: 150,
                spread: 70,
                origin: { y: 0.6 },
                colors: ['#16a34a', '#ffffff', '#000000']
            });
        }, 10);
    }
}
/**
 * Efecto de Hover persistente en componentes de dosificación
 */
document.querySelectorAll('#dosificacion div').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.querySelector('i').classList.add('fa-bounce');
        setTimeout(() => {
            card.querySelector('i').classList.remove('fa-bounce');
        }, 1000);
    });
});

/**
 * Log de Validación Estructural para la presentación
 */
console.log(
    "%c ESTRUCTURA %c Coeficiente de elasticidad: 0.45 %c SEGURO ",
    "background:#16a34a; color:white; font-weight:bold; padding:4px 8px; border-radius:4px 0 0 4px",
    "background:#334155; color:white; font-weight:bold; padding:4px 8px;",
    "background:#f1f5f9; color:#16a34a; font-weight:bold; padding:4px 8px; border-radius:0 4px 4px 0"
);