
// Scroll animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 100);
      }
    });
  }, { threshold: 0.1 });
 
  document.querySelectorAll('.exp-item, .project-card').forEach(el => observer.observe(el));
 
  // ── MODAL PROYECTOS ──
  const projectsData = {
    tripleboot: {
      icon: '⚙️',
      title: 'Triple Boot Corporativo',
      subtitle: 'Proyecto técnico · Fraternidad Muprespa — 2026',
      tags: ['GRUB', 'Debian', 'Clonezilla', 'SSH', 'Windows Sysprep', 'Samba', 'PXE', 'Bash'],
      description: `Diseño e implementación de un entorno de triple boot para equipos corporativos en Fraternidad Muprespa. El sistema arranca en tres modos: Debian de trabajo para empleados, Debian de restauración en modo consola con acceso SSH remoto, y Windows Sysprepado listo para despliegue. El proyecto fue presentado ante dirección y personal técnico con 20 asistentes.`,
      objective: `Eliminar la necesidad de enviar físicamente los equipos al departamento técnico cuando fallan o se infectan. Con el entorno de restauración accesible por SSH, cualquier técnico puede remotamente iniciar una reimagen completa desde el servidor Samba sin desplazarse, reduciendo drásticamente el tiempo de resolución de incidencias.`,
      steps: [
        'Diseño de la arquitectura de particiones para soportar los tres sistemas operativos.',
        'Configuración avanzada de GRUB: entradas personalizadas, control del SO por defecto y protección del arranque de Windows sysprepado.',
        'Despliegue de Debian minimalista para uso diario de empleados en caso de fallo del sistema principal.',
        'Configuración del entorno de restauración en modo consola con acceso remoto vía SSH.',
        'Automatización del proceso de reimagen conectando el equipo afectado al servidor de imágenes corporativo (Samba + Clonezilla).',
        'Optimización del flujo de soporte: resolución remota sin necesidad de desplazamiento físico.',
        'Presentación del proyecto ante dirección y equipo técnico (20 asistentes).',
      ],
      images: 1,
    },
    deploy: {
      icon: '🖥️',
      title: 'Despliegue Masivo de Equipos',
      subtitle: 'Prácticas · Fraternidad Muprespa — 2026',
      tags: ['Clonezilla', 'Samba', 'Windows 11', 'Redes LAN'],
      description: `Proyecto de reimagen corporativa de múltiples equipos de forma simultánea en un entorno de red real durante las prácticas en Fraternidad Muprespa. Se trabajó con varias máquinas en paralelo, reduciendo drásticamente el tiempo de despliegue frente al método equipo por equipo.`,
      objective: `Modernizar el parque de equipos de la empresa migrando a Windows 11 24H2 de forma centralizada y estandarizada, garantizando que todos los PCs salieran con la misma imagen corporativa y configuración base, minimizando el tiempo de inactividad.`,
      steps: [
        'Configuración del servidor Clonezilla lite y switch de red dedicado al despliegue.',
        'Preparación y gestión de las imágenes corporativas en servidor Samba.',
        'Arranque en red (PXE) de los equipos cliente de forma simultánea.',
        'Supervisión del proceso de reimagen y resolución de incidencias en tiempo real.',
        'Verificación de cada equipo tras la restauración y entrega a los usuarios.',
      ],
      images: 1,
    },
    linux: {
      icon: '🌐',
      title: 'Administración de Servidores Linux',
      subtitle: 'Proyecto académico + laboratorio personal',
      tags: ['Debian', 'Ubuntu Server', 'Apache', 'Nginx', 'SSH', 'DNS', 'DHCP', 'SSL'],
      description: `Configuración completa de servidores Linux (Debian/Ubuntu) desde cero, cubriendo los servicios más habituales en entornos empresariales: web, transferencia de ficheros, resolución de nombres y compartición de recursos en red híbrida.`,
      objective: `Adquirir dominio real de la administración de servidores Linux, siendo capaz de desplegar y mantener una infraestructura de servicios completa, segura y funcional sin depender de entornos gráficos.`,
      steps: [
        'Instalación y bastionado inicial del sistema: SSH seguro, usuarios sin privilegios.',
        "Despliegue de servidor web Apache/Nginx con virtualhosting y certificado SSL (Let's Encrypt).",
        'Configuración de FTP/SFTP con chroot por usuario para transferencias seguras.',
        'Integración de Samba para compartición de ficheros con equipos Windows en la red.',
        'Configuración de DHCP con Bind9 y dnsmasq para resolución de nombres interna.',
      ],
      images: 2,
    },
    winserver: {
      icon: '🏢',
      title: 'Infraestructura Windows Server',
      subtitle: 'Proyecto académico · entorno virtualizado',
      tags: ['Active Directory', 'GPO', 'DHCP', 'DNS', 'Windows Server'],
      description: `Implementación de una infraestructura completa de directorio activo en entorno virtualizado, simulando la estructura de una empresa mediana: departamentos, permisos diferenciados y políticas de seguridad centralizadas.`,
      objective: `Comprender y aplicar la gestión centralizada de usuarios y equipos en entornos Windows corporativos, siendo capaz de administrar el ciclo de vida de cuentas, aplicar políticas y mantener la seguridad del dominio.`,
      steps: [
        'Instalación de Windows Server y promoción a controlador de dominio (AD DS).',
        'Creación de la estructura de OUs por departamento: dirección, RRHH, técnicos.',
        'Alta de usuarios y grupos con permisos diferenciados según rol.',
        'Diseño y aplicación de GPOs: fondo corporativo, restricciones de software, mapeo de unidades.',
        'Configuración de DHCP con reservas por MAC y DNS con zonas directas e inversas.',
      ],
      images: 1,
    },
    webs: {
      icon: '💻',
      title: 'Páginas Web para Negocios Locales',
      subtitle: 'Freelance · 2025 – Actualidad',
      tags: ['HTML', 'CSS', 'JavaScript', 'SEO', 'Hosting', 'Dominio'],
      description: `Desarrollo y mantenimiento de sitios web profesionales para negocios locales de Madrid como actividad freelance. Gestión integral del proyecto: desde la reunión inicial con el cliente hasta la entrega y puesta en marcha, incluyendo el alta de dominio y hosting.`,
      objective: `Ofrecer a pequeños negocios una presencia web profesional, accesible y funcional, que les permita captar clientes online y diferenciarse de la competencia sin necesidad de grandes inversiones.`,
      steps: [
        'Reunión con el cliente para definir requisitos, estilo y contenidos.',
        'Diseño responsive adaptado a móvil, tablet y escritorio.',
        'Desarrollo de formulario de contacto funcional y mapa de localización.',
        'Alta y configuración de dominio y hosting, certificado SSL incluido.',
        'Integración con Google Maps, WhatsApp Business y redes sociales.',
        'Entrega, formación básica al cliente y mantenimiento posterior.',
      ],
      images: 2,
    },
  };
 
  function openModal(id) {
    const p = projectsData[id];
    document.getElementById('modalIcon').textContent = p.icon;
    document.getElementById('modalTitle').textContent = p.title;
    document.getElementById('modalSubtitle').textContent = p.subtitle;
 
    let html = '';
 
    // Descripción
    html += `<div>
      <div class="modal-section-title">Descripción</div>
      <p class="modal-text">${p.description}</p>
    </div>`;
 
    // Placeholder(s) imagen
    for (let i = 0; i < p.images; i++) {
      html += `<div class="modal-img-placeholder">
        <span class="ph-icon">📷</span>
        <span class="ph-label">[ Añade aquí una captura del proyecto · 1200×630 px ]</span>
      </div>`;
    }
 
    // Objetivo
    html += `<div>
      <div class="modal-section-title">Objetivo</div>
      <p class="modal-text">${p.objective}</p>
    </div>`;
 
    // Proceso
    html += `<div><div class="modal-section-title">Proceso</div><div class="modal-steps">`;
    p.steps.forEach((s, i) => {
      html += `<div class="modal-step">
        <div class="modal-step-num">${String(i + 1).padStart(2, '0')}</div>
        <div class="modal-step-text">${s}</div>
      </div>`;
    });
    html += `</div></div>`;
 
    // Tags
    html += `<div><div class="modal-section-title">Tecnologías</div><div class="modal-tags">`;
    p.tags.forEach(t => { html += `<span class="modal-tag">${t}</span>`; });
    html += `</div></div>`;
 
    document.getElementById('modalBody').innerHTML = html;
    document.getElementById('modalOverlay').classList.add('open');
    document.body.style.overflow = 'hidden';
  }
 
  function closeModal() {
    document.getElementById('modalOverlay').classList.remove('open');
    document.body.style.overflow = '';
  }
 
  function closeOnOverlay(e) {
    if (e.target === document.getElementById('modalOverlay')) closeModal();
  }
 
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
 
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(s => {
      if (window.scrollY >= s.offsetTop - 200) current = s.getAttribute('id');
    });
    navLinks.forEach(a => {
      a.style.color = a.getAttribute('href') === `#${current}` ? 'var(--green)' : '';
    });
  });
