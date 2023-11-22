//Selecionando a tabela
const $tbody = $("#peopleTable tbody")


/**
 * Retorna o sexo da pessoa
 * @param {string} sex - Sexo abreviado
 * @returns {string}
 */
const formatSex = (sex) => sex === "M" ? "Masculino" : "Feminino";

//Preenchendo a tabela

$.each(people, (_, person) => {

    //Criando a linha com os dados
    const $row = $(`
    <tr>
        <td>${person.id}</td>
        <td>${person.name}</td>
        <td>${person.age}</td>
        <td>${formatSex(person.sex)}</td>
    </tr>`);

    $tbody.append($row);
});