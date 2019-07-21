#!/usr/bin/env node
import { getValues, question } from '../games/brain-calc';
import { flow } from '..';

flow(getValues, question);
