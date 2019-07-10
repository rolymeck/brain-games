#!/usr/bin/env node
import { welcomeUser, evenGame } from '..';

console.log('Welcome to the Brain Games!\nAnswer "yes" if number even otherwise answer "no".\n');

const userName = welcomeUser();
console.log('');
evenGame(userName);
