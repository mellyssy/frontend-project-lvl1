#!/usr/bin/env node
import gameRun from '../src/index.js';
import { prime, rules } from '../src/games/prime.js';

gameRun(prime, rules);
