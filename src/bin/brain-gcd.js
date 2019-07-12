#!/usr/bin/env node
import game from '../games/brain-gcd';
import flow from '..';

console.log('Welcome to the Brain Games!\nFind the greatest common divisor of given numbers.\n');
flow(game);
