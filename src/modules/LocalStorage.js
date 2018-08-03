class LocalStorage {
  static setLocal (name, data) {
    data = typeof data === 'object' ? JSON.stringify(data) : data
    window.localStorage.setItem(name, data)
  }

  static getLocal (name) {
    return JSON.parse(window.localStorage.getItem(name))
  }

  static clearLocal (name) {
    if (name) {
      window.localStorage.removeItem(name)
    } else {
      window.localStorage.clear()
    };
  }
}

export default LocalStorage
