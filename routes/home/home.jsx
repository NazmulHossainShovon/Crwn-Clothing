import Directory from "../../directory/directory";
function Home() {
  const categories = [
    {
      id: 1,
      title: "hats",
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
    },
    {
      id: 2,
      title: "jackets",
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
    },
    {
      id: 3,
      title: "sneakers",
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
    },
    {
      id: 4,
      title: "womens",
      imageUrl:
        "https://img.freepik.com/free-vector/red-clipart-flower-t-shirt-print_1305-5002.jpg?w=740&t=st=1664540778~exp=1664541378~hmac=202329fd4f1d537ec191899752a3131e6cf8c7aace01be826ffbb54e18df8941",
    },
    {
      id: 5,
      title: "mens",
      imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
    },
  ];
  return <Directory categories={categories} />;
}
export default Home;
