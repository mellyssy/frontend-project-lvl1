#!/usr/bin/env node
import gameRun from '../src/index.js';
import { calc, rules } from '../src/games/calc.js';

gameRun(calc, rules);
