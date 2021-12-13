import React from 'react';

export const getStaticProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const data = await res.json();
  console.log(data);

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { ninja: data },
// will be passed to the page component as props
  };
};
const AboutUs = ({ninja}) => {
    return (
        <div>
            this is about page { ninja?.length}
        </div>
    );
};

export default AboutUs;