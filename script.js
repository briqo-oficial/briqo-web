document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. OBSERVADOR DE ANIMACIONES (REVEAL) ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));


    // --- 2. LÓGICA DE LA CALCULADORA PRO (Materiales e Impacto) ---
    const inputMetros = document.getElementById('metros');
    
    if (inputMetros) {
        inputMetros.addEventListener('input', (e) => {
            const m2 = parseFloat(e.target.value) || 0;
            
            // Cálculos de Impacto Ambiental
            const totalPetBotellas = Math.round(m2 * 1800);
            const totalCo2 = Math.round(m2 * 60);

            // Cálculos de Composición de Materiales (KG)
            const petKg = (m2 * 12.5).toFixed(1);
            const uniKg = (m2 * 2.1).toFixed(1);

            // Actualizar Textos de Impacto
            document.getElementById('res-pet').innerText = totalPetBotellas.toLocaleString();
            document.getElementById('res-co2').innerText = totalCo2.toLocaleString();

            // Actualizar Textos de Materiales
            document.getElementById('mat-pet').innerText = petKg;
            document.getElementById('mat-uni').innerText = uniKg;

            // Actualizar Barras de Progreso Visual
            // El máximo de la barra es 1000kg para referencia visual
            document.getElementById('bar-pet').style.width = Math.min((petKg / 10), 100) + '%';
            document.getElementById('bar-uni').style.width = Math.min((uniKg / 2), 100) + '%';

            // Actualizar Logros y lanzar Confeti
            actualizarLogros(m2);
        });
    }


    // --- 3. SISTEMA DE LOGROS Y CELEBRACIÓN ---
    let metaMaximaAlcanzada = false;

    function actualizarLogros(m2) {
        const icon = document.getElementById('badge-icon');
        const titulo = document.getElementById('badge-titulo');
        const desc = document.getElementById('badge-desc');

        if (m2 > 200) {
            icon.innerText = "🌍";
            icon.style.backgroundColor = "#dcfce7";
            titulo.innerText = "Héroe de la Mixteca";
            desc.innerText = "Tu impacto equivale a 10 años de reciclaje.";
            
            // Disparar confeti solo la primera vez que llega a la meta
            if (!metaMaximaAlcanzada) {
                celebrarImpacto();
                metaMaximaAlcanzada = true;
            }
        } else if (m2 > 50) {
            icon.innerText = "🏠";
            icon.style.backgroundColor = "#ffedd5";
            titulo.innerText = "Constructor Verde";
            desc.innerText = "Has limpiado una barranca completa.";
            metaMaximaAlcanzada = false;
        } else {
            icon.innerText = "🌱";
            icon.style.backgroundColor = "#f1f5f9";
            titulo.innerText = "Eco-Semilla";
            desc.innerText = "Has comenzado a limpiar Tepexi.";
            metaMaximaAlcanzada = false;
        }
    }

    function celebrarImpacto() {
        const end = Date.now() + (3 * 1000);
        const colors = ['#ea580c', '#22c55e', '#ffffff'];

        (function frame() {
            confetti({
                particleCount: 3,
                angle: 60,
                spread: 55,
                origin: { x: 0 },
                colors: colors
            });
            confetti({
                particleCount: 3,
                angle: 120,
                spread: 55,
                origin: { x: 1 },
                colors: colors
            });

            if (Date.now() < end) {
                requestAnimationFrame(frame);
            }
        }());
    }


    // --- 4. SLIDER ANTES / DESPUÉS ---
    const impactSlider = document.getElementById('impactSlider');
    if(impactSlider) {
        impactSlider.addEventListener('input', (e) => {
            const val = e.target.value;
            document.querySelector('.before-img').style.width = val + '%';
            document.querySelector('.slider-line').style.left = val + '%';
        });
    }


    // --- 5. NAVBAR SCROLL EFFECT ---
    window.addEventListener('scroll', () => {
        const nav = document.querySelector('nav');
        if (window.scrollY > 50) {
            nav.classList.add('shadow-lg');
            nav.style.padding = "5px 0";
        } else {
            nav.classList.remove('shadow-lg');
            nav.style.padding = "15px 0";
        }
    });
});


// --- 6. FUNCIONES GLOBALES (ACCESIBLES DESDE EL HTML) ---

function toggleFaq(el) {
    const answer = el.querySelector('.faq-answer');
    const icon = el.querySelector('i');
    const isOpen = answer.style.display === 'block';
    
    document.querySelectorAll('.faq-answer').forEach(a => a.style.display = 'none');
    document.querySelectorAll('.faq-item i').forEach(i => i.classList.replace('fa-minus', 'fa-plus'));

    if (!isOpen) {
        answer.style.display = 'block';
        icon.classList.replace('fa-plus', 'fa-minus');
    }
}

function generarCertificado() {
    const pet = document.getElementById('res-pet').innerText;
    if (pet === "0") {
        alert("Por favor, ingresa los metros cuadrados en la calculadora para generar tu certificado.");
        return;
    }
    document.getElementById('cert-pet').innerText = pet;
    document.getElementById('impactCertificate').classList.remove('hidden');
}

function descargarCertificado() {
    const area = document.getElementById('areaDescarga');
    const btn = event.currentTarget;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i> Procesando...';

    html2canvas(area, { 
        scale: 2,
        backgroundColor: "#ffffff" 
    }).then(canvas => {
        const link = document.createElement('a');
        link.download = `Certificado-BRIQO-${Date.now()}.png`;
        link.href = canvas.toDataURL("image/png");
        link.click();
        btn.innerHTML = '<i class="fas fa-download mr-2"></i> Descargar PNG';
    });
}

function enviarWhatsApp() {
    const nombre = document.getElementById('nombre').value;
    const metros = document.getElementById('metros_contar').value;
    const num = "522213465959"; 

    if(nombre && metros) {
        const msg = `¡Hola BRIQO! Soy ${nombre}, me interesa una cotización para un proyecto de ${metros} m2 con sus ladrillos ecológicos del Tec de Tepexi.`;
        window.open(`https://wa.me/${num}?text=${encodeURIComponent(msg)}`, '_blank');
    } else {
        alert("Por favor completa tu nombre y los metros cuadrados.");
    }
}
// --- 7. BARRA DE PROGRESO DE LECTURA ---
window.addEventListener('scroll', () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    document.styleSheets[0].addRule('body::before', `width: ${scrolled}%`);
});
// --- 8. FUNCIÓN PARA ANIMAR NÚMEROS ---
function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        obj.innerHTML = Math.floor(progress * (end - start) + start).toLocaleString();
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

// Modifica el evento de tu inputMetros para llamar a la animación
// Ejemplo: animateValue(document.getElementById('res-pet'), 0, totalPet, 1000);