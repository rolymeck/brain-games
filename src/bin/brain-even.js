#!/usr/bin/env node
import game from '../games/brain-even';
import flow from '..';

console.log('Welcome to the Brain Games!\nAnswer "yes" if number even otherwise answer "no".\n');
flow(game);
