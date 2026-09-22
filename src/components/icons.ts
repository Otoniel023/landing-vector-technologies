import {
  RadioTower,
  ShieldCheck,
  Network,
  Blocks,
  PhoneCall,
  Route,
} from '@lucide/astro';

export const ICONS = {
  'radio-tower': RadioTower,
  'shield-check': ShieldCheck,
  network: Network,
  blocks: Blocks,
  'phone-call': PhoneCall,
  route: Route,
} as const;

export type IconName = keyof typeof ICONS;
