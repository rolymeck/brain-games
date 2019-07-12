#!/usr/bin/env node
import game from '../games/brain-prime';
import flow from '..';

console.log('Welcome to the Brain Games!\nAnswer "yes" if given number is prime. Otherwise answer "no".\n');
flow(game);
