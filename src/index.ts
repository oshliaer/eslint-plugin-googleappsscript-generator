import { Generator, EnvironmentCatcher } from './Generator';
import extensions from './Extensions';

function generateToFile() {}

function generateToLog() {
  var res = initBaseGenerator_().generate();
  Logger.log('\n' + res.sort().join(': false,\n') + ': false');
}

function generateToHTML() {
  const res = initBaseGenerator_().generate();
  const content = JSON.stringify(res);
  return ContentService.createTextOutput(content).setMimeType(
    ContentService.MimeType.TEXT
  );
}

function doGet(e: GoogleAppsScript.Events.DoGet) {
  return generateToHTML();
}

function initBaseGenerator_() {
  const environment = EnvironmentCatcher.getRootEnvironment();
  const generator = new Generator(environment, extensions);
  return generator;
}

EnvironmentCatcher.catchRootEnvironment.bind(this)();
