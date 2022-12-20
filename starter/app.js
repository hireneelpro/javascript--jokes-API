const url = "https://icanhazdadjoke.com/";
// we can find these API url by googling 'dad jokes API'

const container = document.querySelector(".container");
const btn = document.querySelector(".btn");
const joke = document.querySelector(".joke");
btn.addEventListener("click", () => {
  fetchjoke();
});
//  we have used fetchjoke()in addEventListener before function is defined because it is executed when button is clicked .... and before that js execute function
const fetchjoke = async () => {
  try {
    joke.textContent = "...Loading";
    //   while fetch brings data from url, lorem ipsom data will be displayed momentorily , to prevent it above code will display ...loading in between
    const response = await fetch(url, {
      headers: {
        Accept: "application/json",
        "User-Agent": "hiren building learning app",
      },
    });
    // 99% of API needs only url address, but some API require user to add information about user in the http request as a header syntax as above

    // console.log(response.ok);
    if (!response.ok) {
      throw new Error("reference");
    }
    // ok property of response promise shows false or true depending on whether url is found (true)  or not found (false)
    // throw new Error('error') here user can show an error message on console log whenever he needs to be by using this code.
    // when throw..is used inside try..catch block , whenever it is activated it immediately jump to catch block and execute as per catch
    // try,catch block does not detect error of wrong url because url always send back response to all http requests as error or success.
    console.log(response);

    const data = await response.json();
    // console.log(data.joke);

    joke.textContent = data.joke;
  } catch {
    joke.textContent = " there is an error";
  }
};

fetchjoke();
// here when js load page it will display lorem ipsum text before button is clicked so to display any random joke fetchjoke() is initialised before click event to display any joke text.

// fetch only throws  an error only when promise is not resolved
// Error response from url  is still a response
// check for response
// throw new Error('Whoops!!')

// fetch(url)
//   .then((resp) => { return resp.json })
//   .then((data) => { console.log(data); })
//   .catch(()=>{})
