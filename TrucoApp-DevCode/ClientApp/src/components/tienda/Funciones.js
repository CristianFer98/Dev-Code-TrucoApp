export const getIdPreferencia = (url, id) => {
    const urlApi = url + id;
    fetch(urlApi)
        .then(res => res.json())
        .then(data => {
            console.log(data.result)

            localStorage.setItem("preferenceId", data.result);
            //822844930-436e32b0-c6d7-4206-b714-5ed4ecb26de5
        });

}