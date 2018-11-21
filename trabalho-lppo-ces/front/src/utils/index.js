export const getCep = (cep) => {
    return fetch(`https://viacep.com.br/ws/${cep}/json`)
        .then(res => res.json())
        .then(data => data)
}