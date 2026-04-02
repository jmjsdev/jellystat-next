const path = require("path");
const TaskName = require("../logging/taskName");

const tasksDir = path.join(__dirname, "..", "tasks");

const Tasks = {
  Backup: { path: path.join(tasksDir, "BackupTask.js"), name: TaskName.backup },
  Restore: { path: path.join(tasksDir, "BackupTask.js"), name: TaskName.restore },
  JellyfinSync: { path: path.join(tasksDir, "FullSyncTask.js"), name: TaskName.fullsync },
  PartialJellyfinSync: { path: path.join(tasksDir, "RecentlyAddedItemsSyncTask.js"), name: TaskName.partialsync },
  JellyfinPlaybackReportingPluginSync: { path: path.join(tasksDir, "PlaybackReportingPluginSyncTask.js"), name: TaskName.import },
  // Add more tasks as needed
};

module.exports = Tasks;
