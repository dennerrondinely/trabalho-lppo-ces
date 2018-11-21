const api = "http://localhost:8080"
let token = 'Eu sou o Batman'

const headers = {
}
export const GET = (rota,params) =>
    fetch(`${api}/${rota}`, { headers })
        .then(res => res.json())
        .then(data => data)


export const apiPost = (rota,params) =>
    fetch(`${api}/${rota}`, {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(params)
})
    .then(res => res.text())
    .then(data => data)

export const PUT = (rota,params) =>
    fetch(`${api}/${rota}`, {
    method: "PUT",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(params)
})
    .then(res => res.json())
    .then(data => data)

export const DELETE = (rota,params) =>
    fetch(`${api}/${rota}`, {
    method: "DELETE",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(params)
})
    .then(res => res.json())
    .then(data => data)

