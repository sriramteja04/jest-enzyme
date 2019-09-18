/** 
 * Return ShallowWrapper containing node(s) with the given data-test value.
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper to search within.
 * @param {string} val - value of data-test attribute for search
 * @return {ShallowWrapper}
*/
export const findByDataTest = (wrapper,attr) => {
    return wrapper.find(`[data-test='${attr}']`);
  }