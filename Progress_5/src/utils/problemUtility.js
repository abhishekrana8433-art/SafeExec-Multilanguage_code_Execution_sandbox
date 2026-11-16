const axios = require('axios');


const getLanguageById = (lang)=>{

    const language = {
        "assembly (nasm 2.14.02)": 45,
    "bash (5.0.0)": 46,
    "basic (fbc 1.07.1)": 47,
    "c (gcc 7.4.0)": 48,
    "c (gcc 8.3.0)": 49,
    "c (gcc 9.2.0)": 50,
    "c++ (gcc 7.4.0)": 52,
    "c++ (gcc 8.3.0)": 53,
    "c++ (gcc 9.2.0)": 54,
    "c# (mono 6.6.0.161)": 51,
    "common lisp (sbcl 2.0.0)": 55,
    "d (dmd 2.089.1)": 56,
    "elixir (1.9.4)": 57,
    "erlang (otp 22.2)": 58,
    "executable": 44,
    "fortran (gfortran 9.2.0)": 59,
    "go (1.13.5)": 60,
    "haskell (ghc 8.8.1)": 61,
    "java (openjdk 13.0.1)": 62,
    "javascript (node.js 12.14.0)": 63,
    "lua (5.3.5)": 64,
    "ocaml (4.09.0)": 65,
    "octave (5.1.0)": 66,
    "pascal (fpc 3.0.4)": 67,
    "php (7.4.1)": 68,
    "plain text": 43,
    "prolog (gnu prolog 1.4.5)": 69,
    "python (2.7.17)": 70,
    "python (3.8.1)": 71,
    "ruby (2.7.0)": 72,
    "rust (1.40.0)": 73,
    "typescript (3.7.4)": 74,

    "c": 48,
    "cpp": 54,
    "c++": 54,
    "csharp": 51,
    "java": 62,
    "javascript": 63,
    "python": 71,
    "python3": 71,
    "go": 60,
    "rust": 73,
    "typescript": 74
    }


    return language[lang.toLowerCase()];
}


const submitBatch = async (submissions)=>{


const options = {
  method: 'POST',
  url: 'https://judge0-ce.p.rapidapi.com/submissions/batch',
  params: {
    base64_encoded: 'false'
  },
  headers: {
    'x-rapidapi-key': process.env.RAPIDAPI_KEY,
    'x-rapidapi-host': 'judge0-ce.p.rapidapi.com',
    'Content-Type': 'application/json'
  },
  data: {
    submissions
  }
};

async function fetchData() {
    try {
        const response = await axios.request(options);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

 return await fetchData();

}

const waiting = (timer) => {
    return new Promise(resolve => {
        setTimeout(resolve, timer);
    });
};

// ["db54881d-bcf5-4c7b-a2e3-d33fe7e25de7","ecc52a9b-ea80-4a00-ad50-4ab6cc3bb2a1","1b35ec3b-5776-48ef-b646-d5522bdeb2cc"]

const submitToken = async(resultToken)=>{

const options = {
  method: 'GET',
  url: 'https://judge0-ce.p.rapidapi.com/submissions/batch',
  params: {
    tokens: resultToken.join(","),
    base64_encoded: 'false',
    fields: '*'
  },
  headers: {
    'x-rapidapi-key': process.env.RAPIDAPI_KEY,
    'x-rapidapi-host': 'judge0-ce.p.rapidapi.com'
  }
};

async function fetchData() {
    try {
        const response = await axios.request(options);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}


 while(true){

 const result =  await fetchData();

  const IsResultObtained =  result.submissions.every((r)=>r.status_id>2);

  if(IsResultObtained)
    return result.submissions;

  
  await waiting(1000);
}



}


module.exports = {getLanguageById,submitBatch,submitToken};








// 


