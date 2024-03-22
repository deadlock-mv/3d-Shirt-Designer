import { proxy } from 'valtio';

const state = proxy({
    intro: true,
    color: '#bced66',
    isLogoTexture: true,
    isFullTexture: false,
    logoDecal: './logoicon.png',
    fullDecal: './logoicon.png',
});

export default state;