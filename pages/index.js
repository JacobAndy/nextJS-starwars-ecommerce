import Link from "next/link";
import fetch from "isomorphic-unfetch";

const MapCharacters = props => {
  console.log(props);
  return props.data.map(e => {
    return (
      <div>
        <h3>Name: {e.name}</h3>
        <h4>height: {e.height}</h4>
        {/* <style jsx>{``}</style> */}
      </div>
    );
  });
};

const Index = props => {
  console.log(props);
  return (
    <div>
      <h3>My Starwars Characters</h3>
      <MapCharacters data={props.data} />

      {/* <style jsx>{``}</style> */}
    </div>
  );
};

Index.getInitialProps = async function() {
  const res = await fetch("https://swapi.co/api/people");
  const data = await res.json();

  console.log(`Show data fetched. Count: ${data.length}`);
  console.log(data);
  return {
    data: data.results
  };
};
export default Index;
