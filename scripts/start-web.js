#!/usr/bin/env node

const { spawn } = require('child_process');

const expoCliPath = require.resolve('expo/bin/cli');
const args = ['start', '--web', ...process.argv.slice(2)];

const child = spawn(process.execPath, [expoCliPath, ...args], {
    stdio: 'inherit',
    env: {
        ...process.env,
        EXPO_UNSTABLE_HEADLESS: 'true',
    },
});

child.on('error', (error) => {
    console.error(error);
    process.exit(1);
});

child.on('exit', (code, signal) => {
    if (signal) {
        process.kill(process.pid, signal);
        return;
    }

    process.exit(code ?? 0);
});