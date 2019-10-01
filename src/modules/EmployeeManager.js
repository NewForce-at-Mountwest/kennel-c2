const remoteURL = "http://localhost:5002";

export default {
  getAll() {
        return fetch(`${remoteURL}/employees/`).then(result => result.json())
    }
}