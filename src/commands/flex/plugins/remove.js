const FlexPluginScripts = require('../../../sub-commands/flex-plugin-scripts');

/**
 * Deletes the flex-plugin
 */
class FlexPluginsRemove extends FlexPluginScripts {
  async run() {
    await this.runScript('remove');
  }

  async runCommand() {
    return this.run();
  }
}

module.exports = FlexPluginsRemove;
