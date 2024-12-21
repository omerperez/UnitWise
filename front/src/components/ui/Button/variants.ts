const disableBorderWhenActive = "active:border-none";

const primary = `
  bg-primary-500 text-text-inverted hover:bg-primary-400 border border-primary-500
  focus:border-primary-800
  active:bg-primary-700
  disabled:text-text-disabled disabled:bg-gray-50 disabled:border-untitled-white-100
`;

const distractive = `
  bg-rose-600 text-text-inverted hover:bg-rose-500/70
  focus:bg-rose-600 focus:border-rose-800
  active:bg-rose-700
  disabled:text-text-disabled disabled:bg-rose-50
  ${disableBorderWhenActive}
`;

const secondary = `
  bg-blue-100 text-primary-500 hover:bg-untitled-blue-100
  focus:border-untitled-blue-500
  active:bg-untitled-blue-500
  disabled:text-text-disabled disabled:bg-gray-50
  ${disableBorderWhenActive}
`;

const outline = `
  bg-white border border-solid border-untitled-white-100 text-gray-900
  hover:bg-gray-50 hover:text-gray-600
  active:text-gray-900 active:bg-gray-100 active:border-gray-600
  focus:border-gray-600 focus:border
  disabled:text-text-disabled disabled:bg-gray-50 disabled:border-none
`;

const ghost = `
  bg-transparent text-gray-900 border-none
  hover:bg-untitled-gray-100
  active:bg-gray-100
  focus:border focus:border-gray-300
  disabled:text-gray-300 disabled:bg-transparent
  ${disableBorderWhenActive}
`;

export const buttonVariantOptions = {
  primary,
  secondary,
  distractive,
  outline,
  ghost,
};
