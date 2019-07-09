namespace Excluder {
  const dictionary = {
    ErrorService: { cause: 'not documented' },
    HomeroomService: {
      cause: 'not documented'
    },
    ScriptProperties: {
      cause:
        'Deprecated. This class is deprecated and should not be used in new scripts.'
    },
    SoapService: {
      cause:
        'Jul 9, 2013	Service no longer appears in autocomplete, although existing scripts should still function.'
    },
    UiApp: {
      cause:
        'Deprecated. The UI service was deprecated on December 11, 2014. To create user interfaces, use the HTML service instead.'
    },
    UserProperties: {
      cause:
        'Deprecated. This class is deprecated and should not be used in new scripts.'
    },
    Xml: {
      cause: 'not documented'
    }
  };

  export function getItem(key: string) {
    return dictionary[key];
  }

  export function checker(_, key: string) {
    if (dictionary[key]) Logger.log(`${key}: ${dictionary[key].cause}`);
    return !dictionary[key];
  }
}

export { Excluder };
