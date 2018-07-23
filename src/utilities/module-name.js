export default function moduleName (fileName) {
  // Fomat the plugin name from fileName
  return fileName.replace(/^\.\//, '').replace(/\.\w+$/, '')
}
