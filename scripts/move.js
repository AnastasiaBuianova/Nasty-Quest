const fs = require('fs');
const nonEncryptedTaskFiles = fs.readdirSync('.').filter(
    file => file.includes('task') && file.includes('html') &&
        !file.includes('encrypted'))
for (const nonEncryptedTask of nonEncryptedTaskFiles) {
  fs.renameSync(nonEncryptedTask, 'tasks/' + nonEncryptedTask)
}