function loadData() {
    console.log('Datos cargados');
}

function initNavigation() {
    document.querySelectorAll('a[href^="#"]').forEach(a => {
        a.addEventListener('click', function(e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

function initFadeIn() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((e, i) => {
            if (e.isIntersecting) {
                setTimeout(() => e.target.classList.add('visible'), i * 120);
            }
        });
    }, { threshold: 0.15 });

    document.querySelectorAll('.fade-in-up').forEach(el => observer.observe(el));
}

function initWhatsAppButton() {
    const whatsappBtn = document.getElementById('whatsappBtn');
    if (whatsappBtn) {
        whatsappBtn.addEventListener('click', function() {
            const mensaje = encodeURIComponent('Hola, me pueden agendar una reunión');
            const telefono = '56921951687';
            window.open(`https://wa.me/${telefono}?text=${mensaje}`, '_blank');
        });
    }
}

function initWhatsAppButton_2() {
    const whatsappBtn = document.getElementById('whatsappBtn_2');
    if (whatsappBtn) {
        whatsappBtn.addEventListener('click', function() {
            const mensaje = encodeURIComponent('Hola, quiero Donar o Servir');
            const telefono = '56921951687';
            window.open(`https://wa.me/${telefono}?text=${mensaje}`, '_blank');
        });
    }
}

// ─── DATOS DE LOS CURSOS ───
const CURSOS = {
  'formalizacion-empresas': {
    nombre: 'Formalización de Empresas',
    duracion: '10 hrs',
    precio: 'CLP $99.990 - USD $120,00',
    imagen: 'static/cursos/Formalización_Empresas.png',
    descripcion: 'El curso está diseñado exclusivamente para guiarte, de forma práctica, durante todo el proceso de formalización de una empresa. Con énfasis en la aclaración de requisitos legales y los pasos claves que deberás llevar a cabo para formalizar tu Empresa.',
    malla: 'cursos/Programa_estudio_formalización_de_empresas.pdf'
  },
  'contabilidad-tributaria': {
    nombre: 'Contabilidad y Gestión Tributaria',
    duracion: '10 hrs',
    precio: 'CLP $99.990 - USD $120,00',
    imagen: 'static/cursos/contabilidad.png',
    descripcion: 'Hazles frente a tus obligaciones tributarias, desde la declaración de impuesto mensual y modificaciones DAS hasta la solicitud de peticiones administrativas al SII.',
    malla: 'cursos/Programa_estudio_contabilidad_gestion_tributaria.pdf'
  },
  'diseno-producto': {
    nombre: 'Diseño de Producto',
    duracion: '10 hrs',
    precio: 'CLP $99.990 - USD $120,00',
    imagen: 'static/cursos/deseno_productos.png',
    descripcion: 'Aprende a crear y darle un estilo único a tus productos, determinar los costos de adquisición y determinar el precio del producto final. Desde el diseño de packaging, tabla nutricional, sellos y códigos de barra para la comercialización.',
    malla: 'cursos/Programa_estudio_diseno_de_productos.pdf'
  },
  'diseno-web': {
    nombre: 'Diseño de Páginas Web',
    duracion: '10 hrs',
    precio: 'CLP $99.990 - USD $120,00',
    imagen: 'static/cursos/diseno_web.png',
    descripcion: 'Con un enfoque en el diseño de páginas web para empresas con tecnologías Frontend, este curso está diseñado para crear y mantener un entorno de desarrollo para la codificación de páginas webs realizadas con tecnologías como HTML, CSS + BOOTSTRAP y JS. Además de la configuración de tu entorno de desarrollo con VSC, GIT, GITHUB y VERCEL.',
    malla: 'cursos/Programa_estudio_diseno_paginas_web.pdf'
  },
  'ofimatica': {
    nombre: 'Ofimática',
    duracion: '10 hrs',
    precio: 'CLP $99.990 - USD $120,00',
    imagen: 'static/cursos/ofimatica.png',
    descripcion: 'Aprende a usar herramientas de digitalización para tu trabajo o emprendimiento, desde alfabetización digital, profundizando herramientas claves como Microsoft Word, Excel, PowerPoint.',
    malla: 'cursos/Programa_estudio_ofimatica.pdf'
  },
  'marketing-digital': {
    nombre: 'Marketing Digital',
    duracion: '10 hrs',
    precio: 'CLP $99.990 - USD $120,00',
    imagen: 'static/cursos/marketing_digital.png',
    descripcion: 'Diseña y publica anuncios con enfoque en la contactabilidad de nuevos clientes o usuarios para tu negocio, desde el diseño gráfico en Canva hasta la circulación en Meta Ads. Aprende a interpretar las métricas y a crear procesos de toma de decisiones ante los resultados medibles.',
    malla: 'cursos/Programa_estudio_marketing_digital.pdf'
  },
  'mercado-publico': {
    nombre: 'Mercado Público',
    duracion: '10 hrs',
    precio: 'CLP $99.990 - USD $120,00',
    imagen: 'static/cursos/mercado_publico.png',
    descripcion: 'Aprende a registrar tu emprendimiento en Mercado Público y a vender tus productos y servicios a través de Licitaciones y Compra Ágil. Con un enfoque en potenciar a emprendedores, a través de revisión de propuesta y presupuesto, este curso te permitirá dar el siguiente paso para tu crecimiento.',
    malla: 'cursos/Programa_estudio_mercado_publico.pdf'
  },
  'gestion-rrhh': {
    nombre: 'Gestión de RRHH',
    duracion: '10 hrs',
    precio: 'CLP $99.990 - USD $120,00',
    imagen: 'static/cursos/rrhh.png',
    descripcion: 'Todo lo que necesitas saber de la Gestión de Recursos Humanos, desde diseño cargos, contratación y finiquitos, pagos previsionales y trámites necesarios en la Dirección del Trabajo para la correcta Gestión de Personas.',
    malla: 'cursos/Programa_estudio_gestion_rrhh.pdf'
  },
  'registro-marca': {
    nombre: 'Registro de Marca',
    duracion: '10 hrs',
    precio: 'CLP $99.990 - USD $120,00',
    imagen: 'static/cursos/registro_marca.png',
    descripcion: 'Aprende como registrar tu propiedad intelectual como marca personal artística en el DDI y tu marca empresarial en el INAPI, procedimientos administrativos, costos, alcances y todo lo que necesitas saber antes de comercializar tus productos o servicios.',
    malla: 'cursos/Programa_estudio_registro_marca.pdf'
  }
};

// ─── PÁGINA DE DETALLE DE CURSO ───
function initCursoDetalle() {
    const contenedor = document.getElementById('cursoDetalle');
    if (!contenedor) return; // no estamos en curso-detalle.html

    const params = new URLSearchParams(window.location.search);
    const cursoId = params.get('curso');
    const curso = CURSOS[cursoId];

    if (!curso) {
        contenedor.innerHTML = '<div class="container py-5 text-center"><h2>Curso no encontrado</h2><a href="educacion.html" class="btn-cta-white mt-3">Volver a Educación</a></div>';
        return;
    }

    document.title = curso.nombre + ' · Fundación Bio-Bío Impulsa';
    document.getElementById('cursoImagen').src = curso.imagen;
    document.getElementById('cursoImagen').alt = curso.nombre;
    document.getElementById('cursoNombre').textContent = curso.nombre;
    document.getElementById('cursoDuracion').textContent = curso.duracion;
    document.getElementById('cursoPrecio').textContent = curso.precio;
    document.getElementById('cursoDescripcion').textContent = curso.descripcion;

    // Botón WhatsApp dinámico
    const btnWhatsappCurso = document.getElementById('whatsappCursoBtn');
    if (btnWhatsappCurso) {
        btnWhatsappCurso.addEventListener('click', function() {
            const mensaje = encodeURIComponent(
                `Quiero tomar este curso (${curso.nombre} - ${curso.precio})`
            );
            const telefono = '56921951687';
            window.open(`https://wa.me/${telefono}?text=${mensaje}`, '_blank');
        });
    }

    // Botón "Ver malla" — descarga el PDF desde la raíz
    const btnMalla = document.getElementById('verMallaBtn');
    if (btnMalla) {
        btnMalla.addEventListener('click', function() {
            const link = document.createElement('a');
            link.href = curso.malla;
            link.download = curso.malla;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
    }
}

// ─── FADE-IN REUTILIZABLE (para contenido cargado dinámicamente) ───
let fadeObserver = null;

function observeFadeElements(root = document) {
    if (!fadeObserver) {
        fadeObserver = new IntersectionObserver((entries) => {
            entries.forEach((e, i) => {
                if (e.isIntersecting) {
                    setTimeout(() => e.target.classList.add('visible'), i * 120);
                    fadeObserver.unobserve(e.target);
                }
            });
        }, { threshold: 0.15 });
    }
    root.querySelectorAll('.fade-in-up:not(.visible)').forEach(el => fadeObserver.observe(el));
}

function initFadeIn() {
    observeFadeElements(document);
}

// ─── NOTICIAS ───
async function cargarNoticias() {
    const res = await fetch('noticias.json');
    if (!res.ok) throw new Error('No se pudo cargar noticias.json');
    return res.json();
}

function formatearFecha(fechaISO) {
    const meses = ['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'];
    const [anio, mes, dia] = fechaISO.split('-');
    return `${parseInt(dia)} de ${meses[parseInt(mes) - 1]} de ${anio}`;
}

// Listado (noticias.html)
async function initNoticiasListado() {
    const contenedor = document.getElementById('noticiasGrid');
    if (!contenedor) return;

    try {
        const noticias = await cargarNoticias();
        noticias.sort((a, b) => new Date(b.fecha) - new Date(a.fecha));

        contenedor.innerHTML = noticias.map(n => `
            <div class="col-md-6 col-lg-4 fade-in-up">
              <div class="noticia-card h-100">
                <div class="noticia-cover">
                  <img src="${n.imagenPortada}" alt="${n.titulo}">
                </div>
                <div class="noticia-body">
                  <div class="noticia-tag">${n.categoria} · ${formatearFecha(n.fecha)}</div>
                  <h5 class="noticia-titulo">${n.titulo}</h5>
                  <p class="noticia-resumen">${n.resumen}</p>
                  <a href="detalle-noticia.html?noticia=${n.id}" class="btn-ver-noticia">
                    Ver noticia
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/></svg>
                  </a>
                </div>
              </div>
            </div>
        `).join('');

        observeFadeElements(contenedor);
    } catch (err) {
        contenedor.innerHTML = '<p class="text-center">No fue posible cargar las noticias.</p>';
        console.error(err);
    }
}

// Detalle (detalle-noticia.html)
async function initNoticiaDetalle() {
    const contenedor = document.getElementById('noticiaDetalle');
    if (!contenedor) return;

    const params = new URLSearchParams(window.location.search);
    const noticiaId = params.get('noticia');

    try {
        const noticias = await cargarNoticias();
        const noticia = noticias.find(n => n.id === noticiaId);

        if (!noticia) {
            contenedor.innerHTML = '<div class="container py-5 text-center"><h2>Noticia no encontrada</h2><a href="noticias.html" class="btn-cta-white mt-3">Volver a Noticias</a></div>';
            return;
        }

        document.title = noticia.titulo + ' · Fundación Bio-Bío Impulsa';

        document.getElementById('noticiaCategoria').textContent = noticia.categoria;
        document.getElementById('noticiaTitulo').textContent = noticia.titulo;
        document.getElementById('noticiaFecha').textContent = formatearFecha(noticia.fecha);

        const bloquesHTML = noticia.contenido.map(b => {
            const filaClass = b.tipo === 'imagen-der' ? 'row g-0 flex-lg-row-reverse' : 'row g-0';
            return `
                <div class="noticia-bloque fade-in-up">
                  <div class="${filaClass}">
                    <div class="col-lg-5 noticia-bloque-img">
                      <img src="${b.imagen}" alt="${noticia.titulo}">
                    </div>
                    <div class="col-lg-7 noticia-bloque-texto">
                      <p>${b.texto}</p>
                    </div>
                  </div>
                </div>
            `;
        }).join('');
        document.getElementById('noticiaBloques').innerHTML = bloquesHTML;

        const galeriaSection = document.getElementById('galeriaSection');
        if (noticia.galeria && noticia.galeria.length > 0) {
            const indicadores = noticia.galeria.map((_, i) =>
                `<button type="button" data-bs-target="#carruselGaleria" data-bs-slide-to="${i}" class="${i === 0 ? 'active' : ''}" aria-current="${i === 0 ? 'true' : 'false'}"></button>`
            ).join('');
            const items = noticia.galeria.map((img, i) =>
                `<div class="carousel-item ${i === 0 ? 'active' : ''}"><img src="${img}" alt="Foto ${i + 1} de ${noticia.titulo}"></div>`
            ).join('');

            galeriaSection.innerHTML = `
                <div class="container">
                  <div class="text-center mb-4 fade-in-up">
                    <div class="section-line mx-auto" style="background:var(--azul);"></div>
                    <h2 class="section-title" style="color:var(--azul);">Galería de Fotos</h2>
                  </div>
                  <div id="carruselGaleria" class="carousel slide galeria-carousel fade-in-up" data-bs-ride="carousel">
                    <div class="carousel-indicators">${indicadores}</div>
                    <div class="carousel-inner">${items}</div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carruselGaleria" data-bs-slide="prev">
                      <span class="carousel-control-prev-icon"></span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carruselGaleria" data-bs-slide="next">
                      <span class="carousel-control-next-icon"></span>
                    </button>
                  </div>
                </div>
            `;
        } else {
            galeriaSection.remove();
        }

        observeFadeElements(document);
    } catch (err) {
        contenedor.innerHTML = '<p class="text-center">No fue posible cargar la noticia.</p>';
        console.error(err);
    }
}

document.addEventListener('DOMContentLoaded', async function() {
    loadData();
    initWhatsAppButton();
    initWhatsAppButton_2();
    initNavigation();
    initFadeIn(); // observa el contenido estático de la página
    initCursoDetalle();
    await initNoticiasListado();   // no hace nada si no existe #noticiasGrid
    await initNoticiaDetalle();    // no hace nada si no existe #noticiaDetalle
});