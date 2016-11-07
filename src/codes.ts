export const codes =
  {
    foreground: {
      black: [30, 39] as [30, 39],
      red: [31, 39] as [31, 39],
      green: [32, 39] as [32, 39],
      yellow: [33, 39] as [33, 39],
      blue: [34, 39] as [34, 39],
      magenta: [35, 39] as [35, 39],
      cyan: [36, 39] as [36, 39],
      white: [37, 39] as [37, 39],
      gray: [90, 39] as [90, 39],
    },
    background: {
      black: [40, 49] as [40, 49],
      red: [41, 49] as [41, 49],
      green: [42, 49] as [42, 49],
      yellow: [43, 49] as [43, 49],
      blue: [44, 49] as [44, 49],
      magenta: [45, 49] as [45, 49],
      cyan: [46, 49] as [46, 49],
      white: [47, 49] as [47, 49],
    },
    modifier: {
      reset: [0, 0] as [0, 0],
      bold: [1, 22] as [1, 22],
      dim: [2, 22] as [2, 22],
      italic: [3, 23] as [3, 23],
      underline: [4, 24] as [4, 24],
      inverse: [7, 27] as [7, 27],
      hidden: [8, 28] as [8, 28],
      strikethrough: [9, 29] as [9, 29],
    },
  };
