import { Metadata } from 'next';
import PoolFenceLandingClient from './PoolFenceLandingClient';

export const metadata: Metadata = {
  title: 'Pool Fence Quote | Premium Pool Fencing Solutions',
  description: 'Get a free quote for professional pool fencing installation. Premium materials, expert installation, and local compliance guaranteed.',
  keywords: 'pool fence, fence installation, pool safety, aluminum fence, vinyl fence',
};

export default function PoolFencePage() {
  return <PoolFenceLandingClient />;
}
