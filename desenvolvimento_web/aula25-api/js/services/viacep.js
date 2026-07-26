export async function buscarCep(cep) {
    let cepLimpo = cep.replace(/\D/g, '')

    if (cepLimpo.length !== 8) {
        throw new Error('O CEP deve ter 8 dígitos.');
    }

    let resposta = await fetch(`https://viacep.com.br/ws/${cepLimpo}/json/`)

    if (!resposta.ok) {
        throw new Error('Erro ao conectar com o servior da API ViaCEP')
    }

    let dados = await resposta.json()

    if (dados.erro) {
        throw new Error('CEP não encontrado')
    }

    return dados
}