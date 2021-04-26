const extractNameFromFilename = (filename) => {
  return filename.charAt(0) === '.'
    ? filename.split('.').slice(0, 2).join('.')
    : filename.split('.').slice(0, -1).join('.');
};

export default extractNameFromFilename;
