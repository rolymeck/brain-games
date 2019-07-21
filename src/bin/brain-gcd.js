#!/usr/bin/env node
import { getValues, question } from '../games/brain-gcd';
import { flow } from '..';

flow(getValues, question);
