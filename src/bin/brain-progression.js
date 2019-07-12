#!/usr/bin/env node
import game from '../games/brain-progression';
import flow from '..';

console.log('Welcome to the Brain Games!\nWhat number is missing in the progression?\n');
flow(game);
