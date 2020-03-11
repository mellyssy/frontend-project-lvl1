#!/usr/bin/env node
import gameRun from '../src/index.js';
import { gcd, rules } from '../src/games/gcd.js';

gameRun(gcd, rules);
