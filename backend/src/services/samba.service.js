import { execCommand } from '../utils/exec.js';

export async function createUserWithSamba(formData) {
  const {
    username,
    password,
    ou,
    givenName,
    surname,
    initials,
    email,
    description,
    useUsernameAsCN,
    mustChangePassword,
    isEnabled,
    homeDrive,
    homeDirectory,
    scriptPath,
    profilePath,
    jobTitle,
    company,
    useRandomPassword,
  } = formData;

  const realPassword = useRandomPassword
    ? Math.random().toString(36).slice(-12)
    : password;

  let cmd = `sudo samba-tool user create "${username}" "${realPassword}"`;

  if (ou) cmd += ` --userou="OU=${ou}"`;
  if (givenName) cmd += ` --given-name="${givenName}"`;
  if (surname) cmd += ` --surname="${surname}"`;
  if (initials) cmd += ` --initials="${initials}"`;
  if (email) cmd += ` --mail-address="${email}"`;
  if (description) cmd += ` --description="${description}"`;
  if (useUsernameAsCN) cmd += ` --use-username-as-cn`;
  if (mustChangePassword) cmd += ` --must-change-at-next-login`;
  if (!isEnabled) cmd += ` --disabled`;
  if (homeDrive) cmd += ` --drive="${homeDrive}"`;
  if (homeDirectory) cmd += ` --home-directory="${homeDirectory}"`;
  if (scriptPath) cmd += ` --script-path="${scriptPath}"`;
  if (profilePath) cmd += ` --profile-path="${profilePath}"`;
  if (jobTitle) cmd += ` --title="${jobTitle}"`;
  if (company) cmd += ` --company="${company}"`;

  return await execCommand(cmd);
}

export async function listUserWithSamba() {
  const cmd = 'sudo samba-tool user list';
  return await execCommand(cmd);
}
