export function transformarData(data: Date): string {
    let dataString = data.toLocaleDateString('pt-BR');
    dataString = dataString.split('/').reverse().join('-');
    return dataString
}