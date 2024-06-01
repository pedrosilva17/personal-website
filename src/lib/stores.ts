import { cubicOut } from 'svelte/easing';
import { tweened } from 'svelte/motion';
import { writable } from 'svelte/store';

// Playground
const duration = (a: number, b: number) => Math.abs(a - b) * 1000;
export const scaling = writable(1);
export const rotationY = writable(0);
export const positionY = tweened(0, {
	duration: duration,
	easing: cubicOut
});
export const ambIntensity = writable(1);
export const dirIntensity = writable(1);
export const topColor = writable('#ff0000');
export const midColor = writable('#000000');
export const botColor = writable('#ffffff');

//Dice Roller
export const numDice = writable(20);
export const launchAngle = writable(0);
