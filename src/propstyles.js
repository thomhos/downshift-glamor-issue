export function propStyles(styles) {
    return function dynamicStyles(props) {
      return Object.keys(props).map(function (key) {
        if (props[key]) {
          return typeof styles[key] === 'function'
            ? styles[key](props)
            : styles[key];
        }
        return null;
      });
    };
  }
  