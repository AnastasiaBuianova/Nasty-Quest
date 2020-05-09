
const fs = require('fs');
const encryptedTaskFiles =
    fs.readdirSync('.').filter(file => file.includes('encrypted'))
for (const encryptedTask of encryptedTaskFiles) {
  fs.renameSync(encryptedTask, encryptedTask.replace('_encrypted', ''))
}