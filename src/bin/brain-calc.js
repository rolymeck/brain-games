#!/usr/bin/env node
import game from '../games/brain-calc';
import flow from '..';

console.log('Welcome to the Brain Games!\nWhat is the result of the expression?\n');
flow(game);
