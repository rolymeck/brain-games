#!/usr/bin/env node
import readlineSync from 'readline-sync'

export const welcomeUser = () => { 
    const userName = readlineSync.question('May I have your name? ');
    console.log('Hello, ' + userName + '!')
};