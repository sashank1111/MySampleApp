export const getAPIError = (error) => {
    if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx

        /* console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers); */


        if (error.response.data && (error.response.data.message || error.response.data.msg)) {
            return error.response.data.message || error.response.data.msg;
        }
    }

    return 'Something went wrong';
};