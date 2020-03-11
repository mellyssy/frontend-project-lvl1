#!/usr/bin/env node
import gameRun from '../src/index.js';
import { progression, rules } from '../src/games/progression.js';

gameRun(progression, rules);
