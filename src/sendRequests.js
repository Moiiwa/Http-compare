import axios from "axios";
import superagent from "superagent/lib/client";
import {readFile} from "fs";




function sendAxios() {
    var data = new FormData()
    console.log("sadad")
    var file = readFile('./img.jpeg' );
    console.log(file)
    data.append("image", file, 'img.jpeg')
    var startTime = performance.now()
    for (var i = 0; i < 20000; i++) {
        axios.get('google.com',data);
    }
    var endTime = performance.now()
    document.getElementById("axios-res").innerHTML = `Call took ${(endTime - startTime) / 1000} seconds`
}

function sendSuperagent(){

// callback
    var startTime = performance.now()
    for (var i = 0; i < 20000 ; i++) {
        superagent
            .get('google.com')
            .send({name: 'Manny', species: 'cat'}) // sends a JSON post body
            .set('X-API-Key', 'foobar')
            .set('accept', 'json')
            .end((err, res) => {
                // Calling the end function will send the request
            });
    }
    var endTime = performance.now()
    document.getElementById("superagent-res").innerHTML = `Call took ${(endTime-startTime)/1000} seconds`
}

function sendFetch(){

// callback
    var startTime = performance.now()
    for (var i = 0; i < 20000 ; i++) {
        fetch('google.com')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log(data);
            });
    }
    var endTime = performance.now()
    document.getElementById("fetch-res").innerHTML = `Call took ${(endTime-startTime)/1000} seconds`
}








export {sendAxios, sendSuperagent, sendFetch}