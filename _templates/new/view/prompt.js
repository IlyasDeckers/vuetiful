module.exports = [
  {
    type: 'input',
    name: 'name',
    message: 'Name:',
    validate (value) {
      if (!value.length) {
        return 'Components must have a name.'
      }

      return true
    }
  },
  {
    type: 'input',
    name: 'folder',
    message: 'Folder:',
    validate (value) {
      if (!value.length) {
        return 'Folder must have a name.'
      }
      return true
    }
  }
]
