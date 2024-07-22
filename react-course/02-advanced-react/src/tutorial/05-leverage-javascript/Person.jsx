import avatar from "../../assets/default-avatar.svg";

//NOTE: added a default value to the nickName parameter
export function Person({ name, nickName = "default name", images }) {
  console.log(images);

  //NOTE: without optional chaining
  // const img = images && images[0] && images[0].small && images[0].small.url;

  //NOTE: with optional chaining
  // const img = images?.[0]?.small?.url || avatar;
  //NOTE: with optional chaining and nullish coalescing operator
  const img = images?.[0]?.small?.url ?? avatar;
  console.log(img);

  return (
    <div>
      <h3> {name}</h3>
      <h5> Nickname: {nickName}</h5>
      <img src={img} alt={name} width={100} />
      {/* another way of writing without optional chaining  */}
      {/* {images === undefined ? (
        <img src={avatar} alt={name} title={name} width={200} />
      ) : (
        <img src={images[0].small.url} alt={name} width={200} />
      )} */}
      <hr />
    </div>
  );
}
