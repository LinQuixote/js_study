const getPerson = async (url) => {
  try {
    const finalData = await fetch("https://randomuser.me/api/")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const person = data.results[0];
        const call = person.cell;
        const name = person.name.first;

        return { call, name };
      });
    return finalData;
  } catch (error) {
    alert(error);
    console.log(error);
    return null;
  }
};

export default getPerson;
