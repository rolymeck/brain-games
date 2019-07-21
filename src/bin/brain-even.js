#!/usr/bin/env node
import { getValues, question } from '../games/brain-even';
import { flow } from '..';

flow(getValues, question);
