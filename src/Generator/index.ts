class Generator {
  private environment = {};
  private extensions = {
    checkers: [
      {
        checker: function(environment, key) {
          return !Object.prototype.hasOwnProperty.call(environment, key);
        }
      }
    ]
  };

  constructor(environment: object, extensions) {
    this.environment = environment;
    if (extensions && extensions.checkers && extensions.checkers.length) {
      extensions.checkers.forEach(item => this.extensions.checkers.push(item));
    }
  }

  generate() {
    var res = [];
    for (var e in this.environment) {
      if (
        this.extensions.checkers.every(checker =>
          checker.checker(this.environment, e)
        )
      )
        res.push(e);
    }
    return res;
  }
}

namespace EnvironmentCatcher {
  let rootEnvironment: object;

  export function catchRootEnvironment() {
    rootEnvironment = this;
    return rootEnvironment;
  }

  export function getRootEnvironment() {
    return rootEnvironment;
  }
  export function logthis() {
    Logger.log(this);
  }
}

export { Generator, EnvironmentCatcher };
