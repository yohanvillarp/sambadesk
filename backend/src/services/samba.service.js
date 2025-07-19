import { execCommand } from '../utils/exec.js';

export async function createUserWithSamba(username, password, ou = "Users") {
  const cmd = `sudo samba-tool user create "${username}" "${password}" --userou="OU=${ou}"`;
  return await execCommand(cmd);
}
export async function listUserWithSamba(){
  const cmd = 'sudo samba-tool user list';
  return await execCommand(cmd);
}
