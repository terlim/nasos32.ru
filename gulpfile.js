var requireDir = require('require-dir');

// Require all tasks in gulptasks, including subfolders
requireDir('./gulptasks', { recurse: true });