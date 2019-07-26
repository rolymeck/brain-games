#!/usr/bin/env node
import { getValues, question } from '../games/brain-progression';
import flow from '..';

flow(getValues, question);
