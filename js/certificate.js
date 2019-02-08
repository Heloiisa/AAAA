const getToken = function () {

    console.log("aqui")

    $.ajax({

        url: "https://ieptb-api.azurewebsites.net/api/authentication/token",

        type: "GET",

        //contentType: 'application/json', //<--- This Line make everthing perfect

 

        dataType: 'json',

        //async: true,

        complete: function (response) {

            //console.log(response);

        },

        statusCode: {

            200: function (data) {

                console.log("Success..." + data);

                console.log(data.token)

                return data.token;

            },

            400: function (error) {

                console.log("Bad Request..." + error);

            }

        },

    });

}

 

const certificate = function (cert = undefined) {

    let token = getToken();

    if (token !== undefined && cert !== undefined) {

        $.ajax({

            url: "https://ieptb-api.azurewebsites.net/api/authentication/login",

            type: "POST",

            data: JSON.stringify(certificator),

            //contentType: 'application/json', //<--- This Line make everthing perfect

            dataType: 'json',

            //async: true,

            complete: function (response) {

                //console.log(response);

            },

            statusCode: {

                200: function (data) {

                    console.log("Success..." + data);

                },

                400: function (error) {

                    console.log("Bad Request..." + error);

                }

            },

        });

    }

 

    return false;

}

