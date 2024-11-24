const apiURL =
  "https://api-books-dot-api-samples-423102.uc.r.appspot.com/api/books";

export async function getBooks() {
  const requestInit = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: "Bearer 12120881",
    },
  };

  const httpResponse = await fetch(apiURL, requestInit);

  if (httpResponse.ok) {
    return await httpResponse.json();
  } else {
    throw new Error(
      "Não foi possível obter os contatos. Favor entre em contato com o suporte."
    );
  }
}

export async function addComment(bookId, comment) {
  const requestInit = {
    method: "POST",
    headers: {
      accept: "application/json",
      Authorization: "Bearer 12120881",
      "Content-Type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify({
      bookId,
      comment,
    }),
  };

  const httpResponse = await fetch(apiURL, requestInit);

  if (httpResponse.ok) {
    return await httpResponse.json();
  } else {
    console.log(await httpResponse.text());
    throw new Error(
      "Não foi possivel adicionar o comentário. Favor entre em contato com o suporte."
    );
  }
}
