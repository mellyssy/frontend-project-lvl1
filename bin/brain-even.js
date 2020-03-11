#!/usr/bin/env node
import gameRun from '../src/index.js';
import { even, rules } from '../src/games/even.js';

gameRun(even, rules);
