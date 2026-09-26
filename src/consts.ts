import type { IconName } from './components/icons';

export const SITE = {
  name: 'Vector Technologies Group',
  legalName: 'Vector Technologies Group Inc.',
  description:
    'Soluciones empresariales de telecomunicaciones, seguridad informática y redes para empresas modernas.',
  url: 'https://vtgipr.com',
};

export const NAV_LINKS = [
  { label: 'Inicio', href: '/' },
  { label: 'Productos', href: '/productos' },
  { label: 'Servicios', href: '/servicios' },
  { label: 'Contacto', href: '/contacto' },
];

// Teléfono y correo confirmados por el cliente. Dirección y horario siguen
// siendo placeholders del sitio original (vtgipr.com) pendientes de confirmar.
export const CONTACT = {
  phone: '+1 939-609-1070',
  email: 'Info@vtgipr.com',
  address: 'Calle Ejemplo 123, Ciudad',
  hours: 'Lunes a Viernes',
  placeholderFields: ['address', 'hours'] as const,
};

export const SERVICE_PILLARS = [
  { label: 'IPPBX' },
  { label: 'SIP Trunks' },
  { label: 'Seguridad' },
  { label: 'Redes' },
];

export const SERVICES: { index: string; icon: IconName; title: string; description: string }[] = [
  {
    index: '01',
    icon: 'radio-tower',
    title: 'Telecomunicaciones',
    description: 'Soluciones adaptadas a las necesidades específicas de cada empresa.',
  },
  {
    index: '02',
    icon: 'shield-check',
    title: 'Seguridad Informática',
    description: 'Protección para información, sistemas y operaciones.',
  },
  {
    index: '03',
    icon: 'network',
    title: 'Redes',
    description: 'Infraestructura segura y eficiente para mantener tu empresa conectada.',
  },
  {
    index: '04',
    icon: 'blocks',
    title: 'Integración',
    description: 'Soluciones tecnológicas integradas para entornos empresariales.',
  },
];

export const SERVICES_PAGE: { icon: IconName; title: string; description: string }[] = [
  {
    icon: 'shield-check',
    title: 'Seguridad Informática',
    description:
      'Protegemos tus datos y sistemas de amenazas cibernéticas con servicios avanzados de seguridad.',
  },
  {
    icon: 'network',
    title: 'Redes de Computadoras',
    description:
      'Diseñamos e implementamos redes seguras y eficientes para el crecimiento de tu empresa.',
  },
  {
    icon: 'phone-call',
    title: 'Telecomunicaciones Efectivas',
    description:
      'Soluciones de telecomunicaciones personalizadas que mejoran la comunicación y productividad empresarial.',
  },
];

export const PRODUCTS: { icon: IconName; title: string; description: string }[] = [
  {
    icon: 'phone-call',
    title: 'IPPBX Avanzado',
    description: 'Sistema de telefonía flexible y potente para empresas eficaces.',
  },
  {
    icon: 'route',
    title: 'SIP Trunks',
    description: 'Conexiones seguras y eficientes para llamadas de voz.',
  },
  {
    icon: 'shield-check',
    title: 'Seguridad Informática',
    description: 'Protege tus datos y redes contra amenazas cibernéticas.',
  },
  {
    icon: 'network',
    title: 'Redes Computadoras',
    description: 'Infraestructura robusta para un rendimiento óptimo en comunicaciones.',
  },
];

// Marcas/tecnologías con las que trabaja la empresa (mencionadas en el sitio original).
// No se presentan como partnerships o certificaciones oficiales.
export const BRANDS = ['Grandstream', 'Yealink', 'Asterisk'];

export const TELECOM_FEATURES = [
  'IPPBX',
  'SIP Trunks',
  'VoIP',
  'Infraestructura',
  'Integración de sistemas',
];
