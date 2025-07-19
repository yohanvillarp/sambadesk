import { exec } from 'child_process';
import { promisify } from 'util'

const execPromise = promisify(exec);

export async function execCommand(command) {
  return new Promise((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      if (error) return reject(new Error(stderr || error.message));
      resolve(stdout.trim());
    });
  });
}
