#!/usr/bin/env node
import { getValues, question } from '../games/brain-prime';
import { flow } from '..';

flow(getValues, question);
