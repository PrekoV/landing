const api = (method, url, body, isFile = false) => {

    let options = {
        method: method,
        body: !isFile ? JSON.stringify(body) : body
    }
    if (!isFile) {
        options = {
            ...options,
            headers: {
                'accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }
    }

    return fetch(`http://localhost:8080/landing/${url}`, options).then(
        res => {
            return res.json()
        }
    )
}

export default api